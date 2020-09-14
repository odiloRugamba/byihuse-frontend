<template>
	<div class="feature-product-wrap section-gap title-gap">
		<div class="container">
			<div class="sec-title">
				<h2>{{$t(name)}}</h2>
			</div>
			<div class="tab-bar-wrap  text-center">
				<div v-for="(tab,key, index) in featured" :key="key" class="tab-bar d-inline-block">
					<v-btn class="d-inline-block" @click="onTabChange(index)" :text="index === selectedTab">{{key}}</v-btn>
				</div>	
			</div>
			<div class="tab-content">
				<template v-for="(tab,title, index) in featured">
					<div v-if="index == selectedTab" :key="index">
						<slick id="contt" ref="carousel" :options="slickOptions" :key="title">
							<div
								v-for="(cateogary,subindex) in featured[title]"
								:key="subindex"
								class="tab-item"
							>
								<div class="emb-card">
									<div   class="thumb-wrap">
										<router-link  :to="'/en/products/'+title+'/'+cateogary.category+'/'+cateogary.objectID">
                    <!-- <div id="ddd"> -->
                      <img 
												alt="feature product image"
												:src="cateogary.image"
												width="626"
												height="800"
                        id="ddd"
											>
                      <!-- <img id="ddd" alt="product"
												src="/static/images/logo/p.png"
												
											> -->
                      <!-- <img id="ddd" alt="product"
												src="/static/images/logo/data1.jpg"
												
											> -->
                    <!-- </div> -->
                      <!-- <img 
												alt="feature product image"
												src="http://162.243.173.84:4000/1598520712511.jpg"
												width="626"
												height="800"
                        id="mmm"
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
											<v-btn v-if="ifItemExistInCart(cateogary,cart)" to="/en/cart" class="accent" icon absolute bottom>
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
							</div>
						</slick>
					</div>
				</template>	
			</div>	
		</div>
	</div>
</template>
<style scoped>
/* #ddd{
  height: 240px;
} */
.emb-card{
  max-width: 300px;
  /* max-height: 100px; */
}
.font-weight-medium{
  text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
width:200px; 
}
.thumb-wrap img{
  height: 380px; 
  max-width: 300px;
}
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
#contt{
    /* justify-content: space-around; */
    margin-left: 10vw;

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
.thumb-wrap #ddd{
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
/* #ddd img{
  width: 100%;
  height: 100%;
} */
</style>
<script>
import Slick from "vue-slick";
import { mapGetters } from "vuex";

export default {
  props: ["secTitle"],
  computed: {
    ...mapGetters(["rtlLayout", "cart", "wishlist", "featured"]),
  },
  components: {
    Slick
  },
  data() {
    return {
      name: 'message.NewArrival',
      selectedTab: 0,
      activeTab: null,
      slickOptions: {
        autoplay: true,
        slidesToShow: 4,
        infinite: true,
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
    console.log(this.featured)
  }
};
</script>


