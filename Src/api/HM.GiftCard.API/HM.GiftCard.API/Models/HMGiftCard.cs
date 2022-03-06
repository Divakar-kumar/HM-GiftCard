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
   }

   public partial class GiftCard
   {
      [JsonProperty("message", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string Message { get; set; }

      [JsonProperty("amount", Required = Required.Always)]
      public long Amount { get; set; }

      [JsonProperty("quantity", Required = Required.Always)]
      public long Quantity { get; set; }

      [JsonProperty("template", Required = Required.Always)]
      public string Template { get; set; }

      [JsonProperty("sendLater", Required = Required.Always)]
      public bool SendLater { get; set; }

      [JsonProperty("currency", Required = Required.Always)]
      public string Currency { get; set; }

      [JsonProperty("dateTime", Required = Required.Always)]
      public DateTimeOffset DateTime { get; set; }

      [JsonProperty("cardNumber", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public string CardNumber { get; set; }

      [JsonProperty("pin", Required = Required.DisallowNull, NullValueHandling = NullValueHandling.Ignore)]
      public long Pin { get; set; }
   }

   public partial class Recepient
   {
      [JsonProperty("name", Required = Required.Always)]
      public string Name { get; set; }

      [JsonProperty("message", Required = Required.Always)]
      public string Message { get; set; }

      [JsonProperty("mailAddress", Required = Required.Always)]
      public string MailAddress { get; set; }
   }
}
