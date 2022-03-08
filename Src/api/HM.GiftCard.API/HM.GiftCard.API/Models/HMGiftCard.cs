using System;
using Newtonsoft.Json;
namespace HM.GiftCard.API.Models
{
   public partial class HMGiftCard
   {
      [JsonProperty("id", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string Id { get; set; }

      [JsonProperty("gift_card", Required = Required.Always)]
      public GiftCard GiftCard { get; set; }

      [JsonProperty("recepient", Required = Required.Always)]
      public Recepient Recepient { get; set; }

      [JsonProperty("customer", Required = Required.Always)]
      public Customer Customer { get; set; }
   }

   public partial class Customer
   {
      [JsonProperty("id", Required = Required.Always)]
      public string Id { get; set; }
      [JsonProperty("name", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string Name { get; set; }
   }

   public partial class GiftCard
   {
      [JsonProperty("message", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string Message { get; set; }

      [JsonProperty("amount", Required = Required.Always)]
      public long Amount { get; set; }

      [JsonProperty("quantity", Required = Required.Always)]
      public long Quantity { get; set; }

      [JsonProperty("occasion", Required = Required.Always)]
      public string Occasion { get; set; }

      [JsonProperty("imageUrl", Required = Required.Always)]
      public string ImageUrl { get; set; }

      [JsonProperty("sendLater", Required = Required.Always)]
      public bool SendLater { get; set; }

      [JsonProperty("currency", Required = Required.Always)]
      public string Currency { get; set; }

      [JsonProperty("deliveryType", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)] 
      public string DeliveryType { get; set; }

      [JsonProperty("sendLaterDateTime", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public DateTimeOffset SendLaterDateTime { get; set; }

      [JsonProperty("cardNumber", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string CardNumber { get; set; }

      [JsonProperty("pin", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public long Pin { get; set; }
   }

   public partial class Recepient
   {
      [JsonProperty("name", Required = Required.Always)]
      public string Name { get; set; }

      [JsonProperty("message", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string Message { get; set; }

      [JsonProperty("mailAddress", Required = Required.Always)]
      public string MailAddress { get; set; }

      [JsonProperty("mobile", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string Mobile { get; set; }
   }
}
