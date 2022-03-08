using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Threading.Tasks;

namespace HandMImageuploader
{
   public static class uploadfilewithextensions
   {
      [FunctionName("uploadfilewithextensions")]
      public static async Task<IActionResult> Run(
          [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
          ILogger log)
      {
         try
         {
            log.LogInformation("Image uploading started.");

            string name = req.Query["contenttype"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            //dynamic data = JsonConvert.DeserializeObject(requestBody);
            //name = name ?? data?.name;

            byte[] bytes = Convert.FromBase64String(requestBody);
            MemoryStream memoryStream = new MemoryStream(bytes);
            string connectionString =
               "DefaultEndpointsProtocol=https;AccountName=hmgiftcards;AccountKey=0EGCkCah1/zl6/G2nS6WDSkca7ZaqPPfsQOiN1+8NNE1qMJTH7gyjtoYUF6zmAGz5Jfpg04lVGsGZ5rRh9/S8w==;EndpointSuffix=core.windows.net";
            BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("images");
            BlobClient blobClient = containerClient.GetBlobClient(Guid.NewGuid().ToString());


            // Upload data from the local file
            blobClient.Upload(memoryStream);

            blobClient.SetHttpHeaders(new BlobHttpHeaders
            {
               ContentType = name
            });
           
            return new OkObjectResult(blobClient.Uri.AbsoluteUri);
         }

         catch (Exception ex)
         {
            log.LogError("Issue in image upload.{ex} ", ex);
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
         }
      }
   }
}
