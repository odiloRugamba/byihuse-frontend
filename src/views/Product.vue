<template>
	<div class="feature-product-wrap section-gap title-gap">
		<div class="containevr">
			<!-- <div class="sec-title">
				<h2>{{secTitle}}</h2>
			</div> -->
			<div id="contt" class="tab-content">
				<template v-for="(tab,title) in products">
					<!-- <div v-if="index == selectedTab" :key="index"> -->
						<!-- <slick  :options="slickOptions" :key="title"> -->
							<div
								v-for="(cateogary,subindex) in products[title]"
								:key="subindex"
								class="tab-item"
							>
								<div class="emb-card">
									<div class="thumb-wrap">
										<router-link :to="'/products/'+title+'/'+cateogary.category+'/'+cateogary.objectID">
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
										</router-link>
										<div class="wishlist-icon">
											<v-btn v-if="ifItemExistInWishlist(cateogary)" @click="addItemToWishlist(cateogary)" icon >
												<v-icon  class="black--text">favorite</v-icon>
											</v-btn>
											<v-btn v-else @click="addItemToWishlist(cateogary)" icon >
												<v-icon class="grey--text">favorite</v-icon>
											</v-btn>
										</div>
										<div class="add-to-cart">
											<v-btn v-if="ifItemExistInCart(cateogary,cart)" to="/cart" class="accent" icon absolute bottom>
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
				</template>	
			</div>	
		</div>
	</div>
</template>
<style>
#contt{
    display: flex;
    flex-wrap: wrap;
}
@media (min-width: 1200px) {
  #ddd{
    width: 17rem;
}
}
/* @media (max-width: 550px) {
  .containevr{

  }
} */
/* @media (min-width: 380px) and (max-width: 480px) {
  #contt{
    justify-content: space-around;
    /* margin-left: 5vw; */
    /* margin-left: 2rem; */
    /* justify-content: center; */

  /* } */
  /* #contt{
    margin-top: 20px;
} */
/* #ddd{
  width: 27rem;
  height: 34rem;
} */
/* }  */
@media (min-width: 380px) and (max-width: 430px) {
  #contt{
    /* display: flex; */
    justify-content: space-around;
    margin-left: 5vw;
    /* margin-left: 2rem; */
    /* justify-content: center; */

  }
  /* #contt{
    margin-top: 20px;
} */
#ddd{
  width: 27rem;
  height: 34rem;
}
}
@media (min-width: 420px) and (max-width: 600px) {
  #contt{
    /* display: flex; */
    justify-content: space-around;
    margin-left: 10vw;
    /* margin-left: 2rem; */
    /* justify-content: center; */

  }
  /* #contt{
    margin-top: 20px;
} */
#ddd{
  width: 27rem;
  height: 34rem;
}
}
@media (min-width: 600px) and (max-width: 800px) {
  #contt{
    justify-content: space-around;
  }
  /* #contt{
    margin-top: 20px;
} */
#ddd{
  width: 27rem;
  height: 34rem;
}
}
@media (max-width: 380px) and (min-width: 0) {
  #contt{
    /* justify-content: space-around; */
    display: block;
  }
  #contt{
    margin-left: 0px;
}
#ddd{
  width: 25rem;
  height: 30rem;
}
}
@media  (min-width: 1200px) {
   #contt{
    margin-left: 90px;
}
}
@media (max-width:1230px) and (min-width: 1200px) {
  #ddd{
    width: 27vw;
}
}
@media (min-width:800px) and (max-width: 1200px) {
  
  #ddd{
    width: 45vw;
}
}
</style>
<script>
// import Slick from "vue-slick";
import { mapGetters } from "vuex";

export default {
  props: ["secTitle"],
  computed: {
    ...mapGetters(["rtlLayout", "cart", "wishlist", "products"]),
    produc () {
      return this.$store.state.products
    }
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
      }
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
  mounted () {
    // this.$store.dispatch("changeSelectedProduct", cateogary);
    this.$store.dispatch('getproducts')
    console.log(this.products)
  }
};
</script>


