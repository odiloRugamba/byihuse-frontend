<template>
  <div class="feature-product-wrap section-gap title-gap">
    <div class="containevr">
      <!-- <div class="sec-title">
				<h2>{{secTitle}}</h2>
			</div> -->
      <div v-if="produ.length">
        <div id="contt" class="tab-content">
          <!-- <template v-for="(tab,title) in products"> -->
          <!-- <div v-if="index == selectedTab" :key="index"> -->
          <!-- <slick  :options="slickOptions" :key="title"> -->

          <div v-for="(cateogary,subindex) in produ" :key="subindex" class="tab-item">
            <div class="emb-card">
              <div class="thumb-wrap">
                <router-link :to="'/en/products/'+title+'/'+cateogary.category+'/'+cateogary.objectID">
                  <div class="product-image-placeholder">
                    <img alt="feature product image" :src="cateogary.image">
                  </div>
                </router-link>
                <div class="wishlist-icon">
                  <v-btn v-if="ifItemExistInWishlist(cateogary)" @click="addItemToWishlist(cateogary)" icon>
                    <v-icon class="black--text">favorite</v-icon>
                  </v-btn>
                  <v-btn v-else @click="addItemToWishlist(cateogary)" icon>
                    <v-icon class="grey--text">favorite</v-icon>
                  </v-btn>
                </div>
                <div class="add-to-cart">
                  <v-btn v-if="ifItemExistInCart(cateogary,cart)" to="/en/cart" class="accent" icon absolute bottom>
                    <v-icon>remove_red_eye</v-icon>
                  </v-btn>
                  <v-btn v-else @click="addProductToCart(cateogary)" class="accent" icon>
                    <v-icon>shopping_cart</v-icon>
                  </v-btn>
                </div>
            </div>
            <div class="emb-card-content pa-4">
              <h5 class="font-weight-medium" v-text="cateogary.name"></h5>
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
      </div>
      <div class="pagination text-center">
        <v-pagination class="my-4" v-model="page" :length="length" :totalVisible="totalVisible"></v-pagination>
      </div>
      <div v-if="!pageProductsLoaded">
        <h3>Loading...</h3>
        <!-- <v-btn block class="accent" to="/products">Shop</v-btn> -->
      </div>
      <!-- </template>	 -->
    </div>
    <div v-if="pageProductsLoaded && !products.length">
      <h3 class="pl-15">No Product Found</h3>
      <!-- <button block id="btn" class="accent" to="/products">Shop</v-btn> -->
    </div>
  </div>
  </div>
</template>
<style>
  .pagination {
    display: flex;
    justify-content: center;
    /* margin-left: 300px; */
  }

  .thumb-wrap{
    height: 380px;
    width: 300px;
  }

  .thumb-wrap .product-image-placeholder{
    height: 380px;
    overflow: hidden;
  }

  .font-weight-medium {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 260px;
  }
</style>
<script>
  // import Slick from "vue-slick";
  import {
    mapGetters
  } from "vuex";
  import departments from "Api/department";
  export default {
    props: ["secTitle"],
    computed: {
      ...mapGetters(["rtlLayout", "cart", "wishlist", "linksformbackend"])
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
          pageProductsLoaded: false,
          responsive: [{
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
          ],

        },
        title: "",
        products: [],
        page: 1,
        produ: [],
        length: 7,
        totalVisible: 7
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
      },
      async getParametre() {
        try {
          this.title = this.$route.params.title
          // console.log(this.title)
          const rescategoies = await departments.getDepartmentall()
          rescategoies.data.data.forEach(el => {
            // console.log(el.name.en ,this.title)
            if (el.name.en === this.title) {
              el.categories.forEach(recat => {
                recat.products.forEach(pro => {
                  console.log(pro)
                  this.products.push({
                    objectID: pro._id,
                    price: pro.price,
                    name: pro.name.en,
                    image: this.linksformbackend + pro.pictures.pic1,
                    category: recat.name.en
                  })
                })
              })
            }
          });
          this.pageProductsLoaded = true
          this.length = this.products.length / 20
          this.produ = this.products.slice(0, 20)
        } catch (err) {
          console.log(err.message)
        }
      }
    },
    async created() {
      this.getParametre()
    },
    watch: {
      "$route"(to) {
        this.title = to.params.title
        this.id = to.params.id
        location.reload();
        this.getParametre();
      },
      page: function () {
        // console.log(this.page, 'hello')
        this.produ = []
        const trimeStart = (this.page - 1) * 20
        const trimeEnd = trimeStart + 20
        this.produ = this.products.slice(trimeStart, trimeEnd)
        // for (let i = trimeStart; i < trimeEnd; i++) {
        //   this.produ.push(this.products[i]);

        // }
        console.log(this.produ)
        console.log(trimeStart)
      }
    }
  }
</script>
