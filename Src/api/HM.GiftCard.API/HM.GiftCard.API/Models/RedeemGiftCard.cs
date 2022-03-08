using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HM.GiftCard.API.Models
{
   public class RedeemGiftCard
   {
      public string Id { get; set; }
      public int Amount { get; set; }
      public string Currency { get; set; }
      public int Pin { get; set; }
      public string CardNumber { get; set; }

   }
}
