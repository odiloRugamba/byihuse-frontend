<template>
	<v-app>		
		<router-view></router-view>
	    <div class="rtl-layout" @click="toggleRTLLayout">
	      <!-- <a class="text-xl" href="javascript:void(0);">RTL</a> -->
	    </div>
		<emb-subscribe
				heading="Byihuse is here for all your shoping needs"
				description="Our first mission and priority is to satisfy customer needs with good and quick services">
			</emb-subscribe>	
	</v-app>
</template>

<script>
import Subscribe from "Components/Widgets/Subscribe";
import { mapGetters } from "vuex";
import axios from 'axios'
export default {
	computed: {
		...mapGetters(["rtlLayout"]),
		mobileMenu: {
			get() {
				return this.$store.getters.sidebarOpen;
			},
			set(val) {
				this.$store.dispatch("toggleSidebar", val);
			}
		}
	},
	components:{
		embSubscribe: Subscribe,
	},
	/**
	 * Method To set the Rtl While page is opened
	*/
	mounted() {
		if(this.rtlLayout) {
			this.$vuetify.rtl = this.rtlLayout;
		}
		const token = sessionStorage.getItem('token')
		console.log(token)
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		const cart = JSON.parse(localStorage.getItem('cart'))
		if (cart) {
		console.log(cart)
		this.$store.commit({
			type:'onAddProductToC', 
			dart:cart 
		})
		}
		const wishlist = JSON.parse(localStorage.getItem('wishlist'))
		if (wishlist) {
			this.$store.commit({
			type:'onAddItemToWish', 
			wishlist:wishlist 
		})
		}
		// this.$store.commit({
		// 	type:'tryyyy'
		// })
	},
	methods: {
		/**
		 * Method To Toggle The RTL Layout
		 */
		toggleRTLLayout() {
			this.$vuetify.rtl = !this.rtlLayout;
			this.$store.dispatch("changeRtlLayout");
		},
	}
}
</script>


