<template>
   <div class="emb-contact-wrap">
		<emb-page-title
			heading="Services"
			subHeading="Use our services ."
		>
		</emb-page-title>
        <v-btn class="primary ml-1 toggleBtn" icon @click="darwer=!darwer">
                         <i class="material-icons">menu</i>
                     </v-btn>
        <div class="mainSerices">
         <div>
             <div id="idCard">
              <v-navigation-drawer
              id="idCard"
              dark
              class="primary"
              width="230"
              height="700"
              permanent>
    <v-list id="services">
        <div v-for="names in servicesName" :key="names">
         <v-list-item id="servicesId" @click="viewServices(names.id)" link>
            {{names.name}}
        </v-list-item>
        <v-divider></v-divider>
        </div>
        
    </v-list>
    </v-navigation-drawer>
        </div>
        <div class ="forSmall">
            <v-navigation-drawer
            v-model="darwer"
            app
              dark
              width="230"
              height="1000"
               class="primary"
               id="thisOneTry"
              temporary>
    <v-list id="services">
        <div v-for="names in servicesName" :key="names">
         <v-list-item id="servicesId" @click="viewServices(names.id)" link>
            {{names.name}}
        </v-list-item>
        <v-divider></v-divider>
        </div>
        
    </v-list>
    </v-navigation-drawer>
        </div>
             
        </div>
        <div class="asideServices">
        	<div class="day-deal-wrap white section-gap">
		<v-container grid-list-xl pb-0>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg6 xl6  deal-content>
					<div class="day-deal-content"> 
						<div class="mb-12">
							<h2 class="font-weight-regular mb-6">
								{{selectedServices.sectitle}}
							</h2>
							<h5 class="font-weight-regular">
								{{selectedServices.subtitle}}
							</h5>
							<!-- <p class="d-inline-block mr-1">
								<strike class="px-1"><emb-currency-sign class="font-color"></emb-currency-sign>42.46</strike>
							</p> -->
							<p class="accent--text d-inline-block sec-content">
								 Starting at only <emb-currency-sign class="accent--text"></emb-currency-sign> {{selectedServices.price}}
							</p>
							<p>{{selectedServices.paragraph}}</p>
							
						</div>
						<v-layout row wrap cmx-0>
							<v-flex xs4 sm4 md4 lg4 xl4
								class="product-gallery" 
								v-for="(productImage,key) in selectedServices.productGallery"
								:key="key"
								@click="togglePreviewImage(productImage)"
							>
								<a href="javascript:void(0)">
									<v-img
										alt="deal of the day"
										class="emb-card"
										:src="productImage"
										aspect-ratio="0.8"
										max-width="217"
										max-height="217"
									/>
								</a>
							</v-flex>
						</v-layout>
					</div>
				</v-flex>
                
				<v-flex xs12 sm12 md6 lg5 xl6>
								<div class="sec-title">
									<h5>Fill this form to request this service</h5>
								</div>
								<v-form  ref="form" v-model="valid">
									<v-text-field v-model="fristName" type="text" placeholder="First Name" :rules="inputRules.basictextRules"></v-text-field>
									<v-text-field v-model="lastName"	type="text"	placeholder="Last Name" :rules="inputRules.basictextRules"></v-text-field>
									<v-text-field v-model="email" type="email" placeholder="Email" :rules="emailRules"></v-text-field>
									<v-text-field v-model="phoneNumber" 	type="number"	placeholder="Phone number" :rules="inputRules.basictextRules"></v-text-field>
                                    <v-text-field v-model="address" 	type="Address"	placeholder="Your address" :rules="inputRules.basictextRules"></v-text-field>
									<v-textarea v-model="details" rows="2" label="Please give us details of your situation" :rules="inputRules.basictextRules"></v-textarea>
									<v-btn class="accent mx-0 mt-4" large @click.stop.prevent="AskForServices">Submit</v-btn>
								</v-form>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
    <div>

    </div>
        </div>
        </div>
   </div>
</template>
<style scoped>
#services{
    position: relative;
    bottom: 10px;
}
.mainSerices{
    display: flex;
}
.asideServices{
    /* background: grey; */
    /* height: 400px; */
    width: 100%;
}
/* #idCard{
    height: 100%;
} */
#navig{
    background: #EEEEEE;
}
#servicesId{
    font-size: 17px;
}
@media screen and (max-width: 1279px){
    #idCard{
        display: none;
    }
    .forSmall{
        /* display: none; */
        position: relative;
        top: 100px;
    }
    .thisOneTry{
        position: relative;
        top: 100px;
    }
}
@media screen and (min-width: 1279px){
    .forSmall, .toggleBtn{
        display: none;
    }
}
</style>
<script>
import services from "Api/services";
import { mapGetters } from "vuex";
import servicesOrders from "Api/serviceOrders";
export default {
  data() {
    return {
        fristName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        details: '',
        address: '',
      darwer: null,
      valid: false,
      contactInfo: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      inputRules: {
        basictextRules: [v => !!v || "This field should not be empty"]
      },
      servicesName: [],
      selectedServices: {
                id: '',
                sectitle: "",
                subtitle: "",
                paragraph: "",
                productGallery: {}
      },
      	selectedPreviewImage:'',
    };
  },
  mounted() {
    this.getContactInfo();
  },
  methods: {
      async AskForServices() {
          try {
              console.log(this.selectedServices)
           const orderRes = await servicesOrders.addServicesOrders({
            service: this.selectedServices.id,
            firstName:this.fristName,
            lastName:this.lastName,
            email:this.email,
            Phone: this.phoneNumber,
            address: this.address,
            details: this.details
            })
            console.log(orderRes)
            this.$snotify.success(`${orderRes.data.message}`,{
                    closeOnClick: false,
                    pauseOnHover: false,
                    timeout: 3000,
					showProgressBar:false,
				});
          } catch (err) {
              console.log(err.message)
          }
        //   console.log('hhelo')
        
      },
      togglePreviewImage(image) {
			this.selectedPreviewImage = image;
		},
    async getContactInfo() {
      try {
          const res = await services.getServices()
        //   console.log(res.data.data)
          res.data.data.forEach(el => {
            //   console.log(el)
              this.servicesName.push({
                  name:el.name.en,
                  id: el._id
              })
          });
          res.data.data.forEach(el => {
            //   console.log(el)
            if (this.servicesName[0].id === el._id) {
              this.selectedServices= {
                    id: el._id,
                    sectitle: el.name.en,
                    price:el.price,
                    paragraph:el.description.en,
                    productGallery:{
                        pic1:this.linksformbackend+el.pictures.pic1,
                        pic2:this.linksformbackend+el.pictures.pic2,
                        pic3:this.linksformbackend+el.pictures.pic3,
                        // pic4:this.linksformbackend+el.pictures.pic4,
                    },
                },
                this.selectedPreviewImage=this.linksformbackend+el.pictures.pic1
            }
          });
        //   const resOneForMouted = await services.getOne(this.servicesName[0].id)
        //   console.log(resOneForMouted)
      } catch (err) {
          console.log(err.message)
      }
    },
    async viewServices(id) {
        try {
            console.log(id)
            const resOne = await services.getServices()
            resOne.data.data.forEach(el => {
                if (el._id === id) {
                  this.selectedServices= {
                    id: el._id,
                    sectitle: el.name.en,
                    price:el.price,
                    paragraph:el.description.en,
                    productGallery:{
                        pic1:this.linksformbackend+el.pictures.pic1,
                        pic2:this.linksformbackend+el.pictures.pic2,
                        pic3:this.linksformbackend+el.pictures.pic3,
                        // pic4:this.linksformbackend+el.pictures.pic4,
                    }
                }  
                console.log(this.linksformbackend+el.pictures.pic1)
                this.selectedPreviewImage= this.selectedServices.productGallery.pic1
                }
                
            })
            if (window.innerWidth <= 1279 ) {
                this.darwer= false
            }
        } catch (err) {
            console.log(err.message)
        }
        
    },
    saveDetails() {
      this.$refs.form.validate();
    }
  },
  computed: {
      ...mapGetters(["linksformbackend"])
  }
};
</script>

