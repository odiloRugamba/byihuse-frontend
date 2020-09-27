<template>
   <div class="order-history-wrap emb-card pa-4">
      <h4 class="mb-4">Order History</h4>
      <v-data-table 
         :headers="headers"
			:items="tableData"
			hide-default-footer
      >
         <template v-slot:item.action="{ item }">
				<a href="javascript:void(0)"><v-icon class="accent--text">remove_red_eye</v-icon></a>
			</template>
      </v-data-table>
   </div>
</template>

<script>
import myOrder from "Api/my-order.js";
export default {
   data(){
      return{
         headers: [
            {
               text: 'First name',
               value: 'firstName'
            },
            {
               text: 'last name',
               value: 'lastName'
            },
            {
               text: 'details',
               value: 'details'
            },
            { text: 'Product Name', value: 'name' },
            { text: 'Price', value: 'price' },
            { text: 'Status', value: 'status' },
            { text: 'Action', value: 'action' }
         ],
         tableData: []
      }
   },
   async created(){
      try {
         const resRental= await myOrder.myRentalOrder()
          const resProduct= await myOrder.myProductsOrder()
          resRental.data.data.forEach(el => {
             console.log(el)
             this.tableData.push({
               address: el.address,
               details: el.details,
               email: el.email,
               firstName: el.firstName,
               lastName: el.lastName,
               logs: el.logs,
               paid: el.paid,
               paymentLogs: el.paymentLogs,
               status: el.status,
            })
          });
           resProduct.data.data.forEach(el => {
             console.log(el)
             this.tableData.push({
                MoMoPhoneNumber:el.MoMoPhoneNumber,
               agentCode: el.agentCode,
               cancelReason: el.cancelReason,
               city: el.city,
               email:el.email,
               firstName:el.firstName,
               lastName:el.lastName,
               logs:el.logs,
               status:el.status,
               details:el.streetNumber,
               totalAmmount: el.totalAmmount,
               totalAmountPaid: el.totalAmountPaid
             })
          });
          console.log(resRental)
          console.log(resProduct)
      } catch (err) {
         console.log(err.response.message)
      }
   }
}
</script>

