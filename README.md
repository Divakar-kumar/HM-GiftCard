# H&M Gift Card solution

**Inspiration**

We saw complicated and less appealing gift card websites and then we came up with a rich customer experience and a higly scalable solution for H&M, which can be used by large number of business partner websites/mobile applications. This solution is a plug-n-play solution which can be incorporated into a web/mobile applications.


**Deploy to Azure**


[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDivakar-kumar%2FHM-GiftCard%2Fmain%2FARM-templates%2FStaticWebApp%2Ftemplate.json)


**H&M Gift Card solution flow**

We need a highly scalable solution and as well this should be a plug and play over any existing architecture. Our architecture is based on latest technologies that suits our buisness needs.

- Users can buy gift cards that can be customizable based on their needs using our Frontend applicaiton.
- As a next step, we will collect these informations in our CosmosDB using Azure Funciton and push event to the event Grid.
- From the Event Grid those events will be sent out to different subscribers

**Architecture**

| H&M Gift Card solution |
| -------- |
| ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wiga2irteq0u8h9nigim.png)    |

 
 **Standard flow**
 
 - Events will be consumed by the LogicApps
 - Based on the event type ( send now/ send later) we have two different flows
 - If it is a send now flow , we will trigger a mail to the recepient's mail address with the gift card that is generated
 - If it is a send later flow , we will store the data to comsosDB which will then be processed by a recurrence logic app and sends out a mail for the specified datetime.

**DataAnalytics flow**

 - Parallely event will be consumed by Azure Function app that will push to DataLake
 - Based on the analysis service we will gather the datapoints on number of gifts bought by a customer and on which occasions most gift cards are bought
 - We will send these data to PowerBI to visualize it and make use of these data in future to provide loyalty points/ discounts on specifc occassions for specific customers.

**What makes our solution unique?**

We have built this solution with a mindset to make it implementable and as well scalable. On top of this we thought of using some of the data points that we have as part of our solution.

- We have the data analytics of the customers who buys a gift card.
- We do maintain a history of these data based on which we can provide a customer with some loyalty points if they buy more gift card
- This helps H&M to increase the customer base and as well it allows the customer to make use of these points to buy a product/gift cards
- As we also maintain the records/history of different occasions on which these gift cards are bought , we can provide discounts to those sepcific customers.
