<template>
   <div class="emb-shop-card section-gap title-gap">
     <div class="container">
			<div class="sec-title">
				<h2>{{secTitle}}</h2>
			</div>
			<slick ref="carousel" class="shop-card-slider" :options="slickOptions">
				<div v-for="(brand,key) in data" :key="key" class="text-center slick-item">
					<router-link to="/en/products">
						<img alt="client-logo" :src="brand.image" width="250" height="50">
					</router-link>
				</div>
			</slick>
     </div>
   </div>
</template>
<style  scoped>
.shop-card-slider{
  display: flex;
  justify-content: space-between;
}
</style>
<script>
import Slick from "vue-slick";
import { mapGetters } from "vuex";
import Company from "Api/company.js";
export default {
  props: [ "secTitle"],
  computed: {
    ...mapGetters(["rtlLayout","linksformbackend"])
  },
  components: { Slick },
  async mounted() {
    try {
      const res = await Company.getCompany()
      console.log(res)
      res.data.data.forEach(el => {
        console.log(el)
        this.data.push({
          image:this.linksformbackend+el.logo
          // image:'https://byihuse.rw/1598890724471.jpg'
          // image:'/static/images/client-logo-1.png'
        })
        console.log(this.data)
      });
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      data: [],
      slickOptions: {
        rtl: this.rtlLayout,
        slidesToShow: 5,
        infinite: true,
        swipe: true,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
             slidesToShow: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
      }
    };
  }
};
</script>