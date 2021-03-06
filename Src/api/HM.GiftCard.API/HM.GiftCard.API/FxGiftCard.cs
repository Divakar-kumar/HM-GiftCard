using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Azure.Messaging;
using Azure.Messaging.EventGrid;
using HM.GiftCard.API.Helper;
using HM.GiftCard.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace HM.GiftCard.API
{
   public class FxGiftCard
   {
      private readonly ILogger<FxGiftCard> _logger;
      private List<string> errors = new List<string>();

      public FxGiftCard(ILogger<FxGiftCard> log)
      {
         _logger = log;
      }

      [FunctionName("GetGiftCards")]
      [ProducesResponseType((int)HttpStatusCode.OK)]
      [ProducesResponseType((int)HttpStatusCode.NotFound)]
      [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
      [OpenApiOperation(operationId: "GetGiftCards")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.NotFound, contentType: "text/plain", bodyType: typeof(string), Description = "Bad Request")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "text/plain", bodyType: typeof(string), Description = "Internal server error")]
      public IActionResult GetGiftCards(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "giftcards")] HttpRequest req,
    [CosmosDB(
        databaseName: "gift-card-cosmos-db",
        collectionName: "GiftCard",
        ConnectionStringSetting = "CosmosDBConnection",
        SqlQuery = "SELECT * FROM c order by c._ts desc")]
        IEnumerable<dynamic> giftCards)
      {
         try
         {
            _logger.LogInformation("Getting giftcard list items");

            if (giftCards == null || !giftCards.Any())
               return new NotFoundResult();


            return new OkObjectResult(giftCards);
         }
         catch(Exception ex)
         {
            _logger.LogError(ex, "Something went wrong while getting all gift cards");

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
         }
      }

      [FunctionName("CreateGiftCard")]
      [ProducesResponseType((int)HttpStatusCode.Created)]
      [ProducesResponseType((int)HttpStatusCode.BadRequest)]
      [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
      [OpenApiOperation(operationId: "CreateGiftCard")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.BadRequest, contentType: "text/plain", bodyType: typeof(string), Description = "Bad Request")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "text/plain", bodyType: typeof(string), Description = "Internal server error")]
      public async Task<IActionResult> CreateGiftCard(
          [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "giftcard")] HttpRequest req, [CosmosDB(
        databaseName: "gift-card-cosmos-db",
        collectionName: "GiftCard",
        ConnectionStringSetting = "CosmosDBConnection")]
        IAsyncCollector<object> giftCards)
      {
         try
         {
            _logger.LogInformation("Creating Gift card");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();

            _logger.LogInformation($"Request body serialized string {requestBody}");

            var input = JsonConvert.DeserializeObject<HMGiftCard>(requestBody, new JsonSerializerSettings
            {
               Error = (s, e) =>
               {
                  errors.Add(e.ErrorContext.Error.Message);
                  e.ErrorContext.Handled = true;
               }
            });

            if (errors.Count > 0)
               return new BadRequestObjectResult(new
               {
                  Errors = new List<string>(errors)
               });

            _logger.LogInformation("Request Body deserialized");

            input.Id = String.IsNullOrWhiteSpace(input.Id) ? Guid.NewGuid().ToString("N") : input.Id;
            input.Customer.Id = String.IsNullOrWhiteSpace(input.Customer.Id) ? Guid.NewGuid().ToString("N") : input.Customer.Id;

            input.GiftCard.Pin = GiftCardHelper.GetRandomCode(6);
            input.GiftCard.CardNumber = GiftCardHelper.GetRandomString(16);

            await giftCards.AddAsync(input);

            var publisher = InitializeEventGridPublisher();

            await PublishEvent(input, publisher);

            return new OkObjectResult(new { data = "success" });
         }
         catch (Exception ex)
         {
            _logger.LogError(ex, "Something went wrong while creating gift card");

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
         }
      }

      [FunctionName("DeleteGiftCard")]
      [ProducesResponseType((int)HttpStatusCode.OK)]
      [ProducesResponseType((int)HttpStatusCode.NotFound)]
      [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
      [OpenApiOperation(operationId: "DeleteGiftCard")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.NotFound, contentType: "text/plain", bodyType: typeof(string), Description = "Bad Request")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "text/plain", bodyType: typeof(string), Description = "Internal server error")]
      public async Task<IActionResult> DeleteGiftCard(
    [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "giftcard/{id}")] HttpRequest req,
    [CosmosDB(ConnectionStringSetting = "CosmosDBConnection")] DocumentClient client, string id)
      {
         try
         {
            _logger.LogInformation("Deleting Gift card");

            Uri collectionUri = UriFactory.CreateDocumentCollectionUri("gift-card-cosmos-db", "GiftCard");
            var document = client.CreateDocumentQuery(collectionUri).Where(t => t.Id == id)
                    .AsEnumerable().FirstOrDefault();

            if (document == null)
            {
               return new NotFoundResult();
            }
            await client.DeleteDocumentAsync(document.SelfLink);
            
            return new OkResult();
         }
         catch(Exception ex)
         {
            _logger.LogError(ex, "Something went wrong while deleting gift card");

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
         }
      }
      [FunctionName("RedeemGiftCard")]
      [ProducesResponseType((int)HttpStatusCode.OK)]
      [ProducesResponseType((int)HttpStatusCode.BadRequest)]
      [ProducesResponseType((int)HttpStatusCode.NotFound)]
      [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
      [OpenApiOperation(operationId: "RedeemGiftCard")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.NotFound, contentType: "text/plain", bodyType: typeof(string), Description = "Bad Request")]
      [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "text/plain", bodyType: typeof(string), Description = "Internal server error")]
      public async Task<IActionResult> RedeemGiftCard(
    [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "giftcard/{id}")] HttpRequest req,
    [CosmosDB(ConnectionStringSetting = "CosmosDBConnection")]
        DocumentClient client,string id)
      {
         try
         {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var updated = JsonConvert.DeserializeObject<RedeemGiftCard>(requestBody);


            Uri collectionUri = UriFactory.CreateDocumentCollectionUri("gift-card-cosmos-db", "GiftCard");
            var document = client.CreateDocumentQuery<Document>(collectionUri).Where(t => t.Id == id)
                            .AsEnumerable().FirstOrDefault();


            var deserializedDocument = JsonConvert.DeserializeObject<HMGiftCard>(document.ToString());

            if (document == null)
            {
               return new NotFoundResult();
            }

            if (!String.Equals(updated.CardNumber, deserializedDocument.GiftCard.CardNumber) || updated.Pin != deserializedDocument.GiftCard.Pin)
            {
               return new BadRequestObjectResult(new
               {
                  Errors = new List<string>() { "Enter Valid combination of CardNumber and Pin" }
               });
            }

            long balanceAmount = deserializedDocument.GiftCard.Amount - updated.Amount;

            if(balanceAmount<0)
               return new BadRequestObjectResult(new
               {
                  Errors = new List<string>() { $"Your balance is :{deserializedDocument.GiftCard.Amount}, Please enter valid amount to redeem" }
               });

            var giftCard = document.GetPropertyValue<dynamic>("gift_card");
            giftCard.Amount = balanceAmount;            

            document.SetPropertyValue("gift_card", giftCard);

            await client.ReplaceDocumentAsync(document);

            return new OkObjectResult(new
            {
               BalanceAmount = balanceAmount,
               IsRedeemed = true
            });
         }
         catch(Exception ex)
         {
            _logger.LogError(ex, "Something went wrong while redeeming gift card");

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
         }
      }

      private async Task PublishEvent(HMGiftCard input, EventGridPublisherClient publisher)
      {
         var source = "HM.GiftCard.API";
         var type = "GiftCard.Created";
         var dataContentType = "application/cloudevents+json";

         var data = JsonConvert.SerializeObject(input);

         var @event = new CloudEvent(source, type, data)
         {
            DataContentType = dataContentType,
            DataSchema = "1.0"
         };
         var events = new List<CloudEvent>() { @event };

         await publisher.SendEventsAsync(events).ConfigureAwait(false);
      }

      private EventGridPublisherClient InitializeEventGridPublisher()
      {
         var publisher = new EventGridPublisherClient(new Uri("https://evgt-hmgiftcard.centralindia-1.eventgrid.azure.net/api/events"), new Azure.AzureKeyCredential("CrK+NtkQGtfeRVcxPcFV4CVR5+fceIlHLO3BJrZMD3E="));
         return publisher;
      }
   }
}

