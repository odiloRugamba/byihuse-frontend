<template>
   <div class="order-history-wrap emb-card pa-4">
      <h4 class="mb-4">{{$t("message.OrderHistory")}}</h4>
      <v-data-table 
         :headers="headers"
			:items="tableData"
         :items-per-page="tableData.length"
			hide-default-footer
      >
         <template v-slot:item.action="{ item }">
				<v-btn @click="selectedOrder(item)" icon href="javascript:void(0)"><v-icon class="accent--text">remove_red_eye</v-icon></v-btn>
			</template>
      </v-data-table>
      <v-dialog v-model="editDialog" max-width="685px" class="pa-2">
			<v-card class="emb-FinalReceipt-wrap">
				<v-card-text class="pa-4">
					<v-flex xs12>
						<div class="text-center bg-grey px-4 py-6">
							<h4>{{$t("message.Orderdetails")}}</h4>
							<!-- <h5 class="mb-6">Payment is successfully processsed and your order is on the way </h5> -->
							<!-- <h6 class="mb-6">Invoice ID:{{_id}}</h6>
							<img src="/static/images/checked.png" width="64" height="64" alt="Success"> -->
						</div>
						<div class="mt-12 mx-4">
							<v-layout row wrap mb-10 mx-0 mt-0>
								<v-flex xs12 sm6 md6 lg6 xl6 text-left pa-0 >
									<!-- <h6>Summary</h6> -->
									<!-- <p class="mb-1">Order ID : 2563883628932</p> -->
									<!-- <p class="mb-1">Order Date :{{selectProduts.date}}</p>
									<p class="mb-1">Order Total :{{selectProduts.total}}</p> -->
								</v-flex>
								<v-flex xs12 sm8 md8 lg8 xl8 text-left pa-0>
									<h6>{{$t("message.DeliverTo")}}</h6>
									<p class="mb-1">{{fristName}} {{lastName}}</p>
									<p class="mb-1">{{city}}, {{street}}</p>
									<p class="mb-1">{{phone}}</p>
								</v-flex>
							</v-layout>
							<!-- <div class="py-6 text-center bg-grey">
								<h4>Products ordered</h4>
								<h3>December 31, 2019</h3>
							</div> -->
							<h4 class="pt-12 mb-7 text-sm-left text-center">You Ordered:</h4>
							<div  id="producr">
								<div id="tittle">
								<div><h6> {{$t("message.ProductImage")}}</h6></div>
								<div><h6>{{$t("message.ProductName")}}</h6></div>
								<div><h6>{{$t("message.Quantity")}}</h6></div>
								<div><h6>{{("message.Price")}}</h6></div>
								</div>
								<div v-for="product in selectProduts" :key="product" id="products">
									<div><img width="100" :src="product.pictures" alt=""></div>
									<p class="font-weight-bold">{{product.name}}</p>
									<div><p>{{product.quantity}}</p></div>
									<div>RWF {{product.price}}</div>
								</div>
							</div>
							
							<v-divider class="my-6"></v-divider>
							<div class="pt-6">
								<div class="layout align-center justify-space-between ma-0">
									<p>{{("message.Subtotal")}}</p>
									<span>RWf {{total}}</span>
								</div>
								<div class="layout align-center justify-space-between ma-0">
									<p>{{("message.Delivery")}}</p>
									<span>RWF 0</span>
								</div>
								<div class="layout align-center justify-space-between ma-0">
									<p>{{("message.Tax")}}</p>
									<span>RWF 0</span>
								</div>
								<v-divider class="my-4"></v-divider>
								<div class="layout align-center justify-space-between ma-0">
									<h4>{{("message.Total")}}</h4>
									<h4>RWF {{total}}</h4>
								</div>
								<!-- <v-divider class="my-4"></v-divider> -->
							</div>
							<div class="openLogs">
                        <v-btn @click="openLogs" class="accent">Track Order</v-btn>
                     </div>
						</div>
					</v-flex>
				</v-card-text>
			</v-card>
		</v-dialog>
      <v-dialog v-model="open">
		<v-card class="py-6 px-2">
         <v-data-table 
         :headers="logHeader"
			:items="logs"
         :items-per-page="tableData.length"
			hide-default-footer
      >
      </v-data-table>
			<v-card-actions class="layout justify-center">
				<v-btn color="accent mx-2" @click="open = false">{{$t("Close")}}</v-btn>
				<!-- <v-btn color="accent" @click="RWF emit('onConfirm')">Yes</v-btn> -->
			</v-card-actions>
		</v-card>
	</v-dialog>
   </div>
</template>

<script>
import myOrder from "Api/my-order.js";
import moment from "moment"
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
            { text: 'Paid', value: 'paid' },
            { text: 'Status', value: 'status' },
            { text: 'Action', value: 'action' }
         ],
          logHeader: [
            {
               text: 'Time',
               value: 'time'
            },
            {
               text: 'Name',
               value: 'name'
            },
            {
               text: 'Comment',
               value: 'comment'
            }
            ,
            {
               text: 'Action',
               value: 'action'
            },
         ],
         tableData: [],
         editDialog: false,
         selectProduts:[],
         selectedProBef:[],
         product:[],
         fristName: '',
         lastName: '',
         city: '',
         street: '',
         total:'',
         open:false,
         logs:[]
      }
   },
   methods: {
      openLogs(){
         this.logs=[]
         this.selectProduts.forEach(el =>{
            console.log(el)
            el.logs.forEach(elLogs =>{
         const dat = moment(elLogs.time)
			const time = moment(elLogs.time)
			const tt = time.format('LT')
			const da = dat.format('L');
			const date = tt + '' + ' '+ da
            console.log(elLogs)
            this.logs.push({
            action: elLogs.action,
            name: elLogs.name,
            role: elLogs.role,
            status:elLogs.status,
            time :date,
            })
            })
         })
         this.open= true
      },
      selectedOrder(selected){
         // console.log(selected)
         this.logs=selected.logs
         this.fristName=selected.fristName,
         this.lastName=selected.lastName,
         this.city=selected.address,
         this.street=selected.details
         this.selectProduts=[]
         selected.product.forEach(el=>{
            // console.log(el.pictures.pic1)
            this.selectProduts.push({
               pictures: 'Https://byihuse.rw/'+el.pictures.pic1,
               price:el.price,
               name: el.name.en,
               logs: selected.logs
            })
            this.total=el.price
         })
         this.editDialog= true
      }
   },
   async created(){
      try {
         const resRental= await myOrder.myRentalOrder()
          const resProduct= await myOrder.myProductsOrder()
          resRental.data.data.forEach(el => {
             if (el.logs.length) {
                this.product[0]= el.rental
                this.tableData.push({
               address: el.address,
               details: el.details,
               email: el.email,
               firstName: el.firstName,
               lastName: el.lastName,
               logs: el.logs,
               paid: el.paid,
               paymentLogs: el.paymentLogs,
               status: el.status.status,
               product:this.product
            })
             console.log(el)
             console.log(el)
             }
            //  console
          });
         //   resProduct.data.data.forEach(el => {
         //    //  console.log(el)
         //     this.tableData.push({
         //        MoMoPhoneNumber:el.MoMoPhoneNumber,
         //       agentCode: el.agentCode,
         //       cancelReason: el.cancelReason,
         //       city: el.city,
         //       email:el.email,
         //       firstName:el.firstName,
         //       lastName:el.lastName,
         //       logs:el.logs,
         //       status:el.status.status,
         //       details:el.streetNumber,
         //       totalAmmount: el.totalAmmount,
         //       totalAmountPaid: el.totalAmountPaid
         //     })
         //  });
          console.log(resRental.data.data.length)
          console.log(resProduct.data.data.length)
      } catch (err) {
         console.log(err.response.message)
      }
   }
}
</script>
<style  scoped>
#products{
	display: flex;
	justify-content: space-between;
	/* text-align: center; */
	align-items: center;
	margin-top: 10px;
}
#tittle{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.openLogs{
   display: flex;
   justify-content: center;
}
/* #producr{
	display: flex;
	justify-content: space-between;
} */
</style>
