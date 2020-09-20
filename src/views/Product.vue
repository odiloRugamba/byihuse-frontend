<template>
	<div class="feature-product-wrap section-gap title-gap">
		<div class="containevr">
			<!-- <div class="sec-title">
				<h2>{{secTitle}}</h2>
			</div> -->
			<div id="contt" class="tab-content">
				<!-- <template v-for="(tab,title) in products"> -->
					<!-- <div v-if="index == selectedTab" :key="index"> -->
						<!-- <slick  :options="slickOptions" :key="title"> -->
							<div
								v-for="(cateogary,subindex) in produ"
								:key="subindex"
								class="tab-item"
							>
								<div class="emb-card">
									<div  id="item" class="thumb-wrap">
										<router-link :to="'/'+$i18n.locale+'/products/'+title+'/'+cateogary.category+'/'+cateogary.objectID">
											<img 
												alt="feature product image"
												:src="cateogary.image"
												width="626"
												height="800"
                        id="ddd"
											>
                      <!-- <img id="ddd" alt="product" height="800" width="626"
												src="http://162.243.173.84:4000/1598520712511.jpg"
												
											> -->
                      <!-- <img id="ddd" alt="product" height="800" width="626"
												src="/static/images/logo/tryy.jpg"
												
											> -->
                      <!-- <img id="ddd" alt="product" height="800" width="626"
												src="/static/images/logo/p.png"
												
											> -->
                       <!-- <img id="ddd" alt="product" height="800" width="626"
												src="/static/images/logo/data1.jpg"
												
											> -->
										</router-link>
										<div class="wishlist-icon">
											<v-btn v-if="ifItemExistInWishlist(cateogary)" @click="addItemToWishlist(cateogary)" icon >
												<v-icon  class="black--text">favorite</v-icon>
											</v-btn>
											<v-btn v-else @click="addItemToWishlist(cateogary)" icon >
												<v-icon class="grey--text">favorite</v-icon>
											</v-btn>
										</div>
										<div class="add-to-cart ">
											<v-btn v-if="ifItemExistInCart(cateogary,cart)" :to="'/'+$i18n.locale+'/cart'" class="accent" icon absolute bottom>
												<v-icon>remove_red_eye</v-icon>
											</v-btn>
											<v-btn v-else @click="addProductToCart(cateogary)" class="accent" icon >
												<v-icon>shopping_cart</v-icon>
											</v-btn>
										</div>
									</div>
									<div class="emb-card-content pa-4">
										<h5  class="font-weight-medium" v-text="cateogary.name"></h5>
										<div class="emb-meta-info layout align-center my-1">
											<div class="inline-block">
												<h6 class="accent--text font-weight-medium">
													<emb-currency-sign></emb-currency-sign>{{cateogary.price}}
												</h6>
											</div>
											<div class="inline-block ">
												<!-- <v-rating 
													v-model="cateogary.rate"
													readonly
													background-color="grey"
													color="#edb876"
												>
												</v-rating> -->
											</div>
										</div>
									</div>
								</div>
							<!-- </div> -->
						<!-- </slick> -->
					</div>
				<!-- </template>	 -->
			</div>	
		</div>
    <div class="pagination text-center">
            <v-pagination
              class="my-4"
              v-model="page"
              :length="length"
              :totalVisible="totalVisible"
            ></v-pagination>
      </div>
	</div>
</template>
<style>
#contt{
    display: flex;
    flex-wrap: wrap;
}
.font-weight-medium{
  text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
width:200px; 
}
#item{
  display: flex;
  justify-content: center;
}
@media (min-width: 416px) and (max-width: 430px) {
  #contt{
    margin-left: 3.7vw;
    justify-content: center;

  }
#item{
  width: 27rem;
  height: 34rem;
}
#ddd{
  max-height: 440px;
  /* max-width: 260px; */
}
}
@media (min-width: 380px) and (max-width: 420px) {
#ddd{
  max-height: 440px;
  /* max-width: 260px; */
}
}
@media (min-width: 430px) and (max-width: 600px) {
  #contt{
    justify-content: space-around;
    margin-left: 10vw;

  }
#item{
  width: 27rem;
  height: 34rem;
}
#ddd{
  max-height: 440px;
  /* max-width: 260px; */
}
}
@media (min-width: 600px) and (max-width: 800px) {
  #contt{
    justify-content: space-around;
  }
#item{
  width: 27rem;
  height: 34rem;
}
#ddd{
  max-height: 440px;
  /* max-width: 260px; */
}
}
@media (max-width: 380px) and (min-width: 335px) {
  #contt{
    display: block;
  }
  #contt{
    margin-left: 0px;
}
#item{
  width: 92vw;
  height: 30rem;
}
#ddd{
  max-height: 440px;
  max-width: 313px;
}
}
@media (max-width: 335px) and (min-width: 300px) {
  #contt{
    display: block;
  }
  #contt{
    margin-left: 0px;
}
#item{
  width: 91vw;
  height: 27rem;
}
#ddd{
  max-height: 390px;
  /* max-width: 260px; */
}
}
@media (max-width: 300px) and (min-width: 0px) {
  #contt{
    display: block;
    justify-content: left;
  }
  #contt{
    margin-left: 0px;
}
#item{
  width: 89vw;
  height: 27rem;
}
#ddd{
  max-height: 380px;
  /* max-width: 20rem; */
}
}
@media  (min-width: 1230px)  {
   #contt{
    margin-left: 90px;
}
#item{
  width: 17rem;
  height: 23rem;
}
#ddd{
  max-height: 320px;
  /* max-width: 260px; */
}
}
@media (max-width:1230px) and (min-width: 1000px) {
  #item{
    width: 27vw;
    height: 24rem;
}
#ddd{
  max-height: 320px;
  /* max-width: 260px; */
}
}
@media (min-width:800px) and (max-width: 900px) {
  #contt{
    justify-content: space-around;
}
  #item{
    width: 38vw;
    height: 30rem;
}
#ddd{
  max-height: 380px;
  /* max-width: 260px; */
}
}
@media (min-width:900px) and (max-width: 1000px) {
  #contt{
    justify-content: space-around;
}
  #item{
    width: 35vw;
    height: 28rem;
}
#ddd{
  max-height: 380px;
  /* max-width: 260px; */
}
}
/* @media screen  (min-width: ){
  
} */
</style>
<script>
// import Slick from "vue-slick";
import { mapGetters } from "vuex";
import department from "Api/department";
export default {
  props: ["secTitle"],
  computed: {
    ...mapGetters(["rtlLayout", "cart", "wishlist", "linksformbackend", "selectedLocale"]),
    // produc () {
    //   return this.$store.state.products
    // }
  },
  components: {
    // Slick
  },
  data() {
    return {
      selectedTab: 0,
      activeTab: null,
      slickOptions: {
        autoplay: true,
        slidesToShow: 5,
        infinite: false,
        arrows: false,
        dots: true,
        rtl: this.rtlLayout,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: false
            }
          }
        ]
      },
      products: [],
      page:1,
      produ: [],
      length: 0,
      totalVisible:0
    };
  },
  methods: {
    /**
     * method for adding item to cart
     */
    addProductToCart(newItem) {
      this.$snotify.success("Product adding to the cart", {
        closeOnClick: false,
        pauseOnHover: false,
        timeout: 1000
      });
      setTimeout(() => {
        this.$store.dispatch("addProductToCart", newItem);
      }, 100);
    },
    /**
     * method for to change item
     */
    onTabChange(key) {
      this.selectedTab = key;
    },
    /**
     * method for checking if item exists in cart
     */
    ifItemExistInCart(result) {
      let exists = false;
      for (let item of this.cart) {
        if (item.id == result.objectID) {
          exists = true;
        }
      }
      return exists;
    },
    // this method is use to add a product in wishlist
    addItemToWishlist(item) {
      if (this.ifItemExistInWishlist(item)) {
        this.$snotify.error("Product already exist in the wishlist", {
          showProgressBar: false
        });
      } else {
        this.$snotify.success("Product adding to the wishlist", {
          closeOnClick: false,
          pauseOnHover: false,
          timeout: 1000,
          showProgressBar: false
        });
        setTimeout(() => {
          this.$store.dispatch("addItemToWishlist", item);
        }, 2000);
      }
    },
    /**
     * This Function Is use to check weather the product exist in the wishlist
     * Return boolean
     */
    ifItemExistInWishlist(result) {
      let exists = false;
      for (let item of this.wishlist) {
        if (item.id == result.objectID) {
          exists = true;
        }
      }
      return exists;
    }
  },
  async mounted () {
    try {
      const res= await department.getDepartmentall()
      // console.log(res)
      if (this.selectedLocale === 'French') {
        res.data.data.forEach(el => {
        // console.log(el)
        el.categories.forEach(pro =>{
          pro.products.forEach(prdata =>{
            this.products.push({
               objectID: prdata._id,
               type: el.name.fr,
               image:this.linksformbackend+prdata.pictures.pic1,
               price: prdata.price,
               name: prdata.name.fr,
               rate: 3,
               image_gallery: [
                  this.linksformbackend+prdata.pictures.pic1,
                  this.linksformbackend+prdata.pictures.pic2,
                  this.linksformbackend+prdata.pictures.pic3,
                  this.linksformbackend+prdata.pictures.pic4
               ],
               description: prdata.description.fr,
               category: pro.name.fr
             })
            //  console.log(prdata.name)
            //  console.log(this.selectedLocale)
          })
        })
      });
      } else {
        res.data.data.forEach(el => {
        // console.log(el)
        el.categories.forEach(pro =>{
          pro.products.forEach(prdata =>{
            this.products.push({
               objectID: prdata._id,
               type: el.name.en,
               image:this.linksformbackend+prdata.pictures.pic1,
               price: prdata.price,
               name: prdata.name.en,
               rate: 3,
               image_gallery: [
                  this.linksformbackend+prdata.pictures.pic1,
                  this.linksformbackend+prdata.pictures.pic2,
                  this.linksformbackend+prdata.pictures.pic3,
                  this.linksformbackend+prdata.pictures.pic4
               ],
               description: prdata.description.en,
               category: pro.name.en
             })
            //  console.log(prdata.name)
            //  console.log(this.selectedLocale)
          })
        })
      });
      }
      // console.log()
      this.produ = this.products.slice(0, 20)
      this.length = Math.ceil(this.products.length / 20)
    } catch (err) {
      console.log(err)
    }
  },
  watch:{
    page: function () {
      // console.log(this.page, 'hello')
      this.produ= []
      const trimeStart = (this.page-1) * 20
      const trimeEnd = trimeStart + 20
      this.produ = this.products.slice(trimeStart,trimeEnd)
      // for (let i = trimeStart; i < trimeEnd; i++) {
      //   this.produ.push(this.products[i]);
        
      // }
      console.log(this.produ)
      console.log(trimeStart)
    }
  }
};
</script>



