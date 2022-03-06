using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HM.GiftCard.API.Helper
{
   public static class GiftCardHelper
   {
      public static int GetRandomCode(int length)
      {
         Random rand= new Random();
         string randomString = String.Empty;

         for (int i = 0; i < length; i++)
         {
            randomString = String.Concat(randomString, rand.Next(10).ToString());
         }

         return Convert.ToInt32(randomString);
         
      }
      public static string GetRandomString(int length)
      {
         Random random = new Random();

         const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
         return new string(Enumerable.Repeat(chars, length)
             .Select(s => s[random.Next(s.Length)]).ToArray());
      }
   }
}
