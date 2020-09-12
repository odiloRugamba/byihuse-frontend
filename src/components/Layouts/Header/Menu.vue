<template>
   <div class="navbar">
      <ul class="app-nav-list pl-0">
         <li class="app-nav-item" v-for="(menuItem , key) in menus" :key="key">
				<a  @click="changeOneRoute(menuItem.path)" >{{$t(menuItem.name)}}</a>
				<template v-if="menuItem.type === 'sub_menu'">
					<ul  class="sub-menu" v-if="menuItem.children && menuItem.children.length > 0">
						<li v-for="(subMenuItem , subMenuKey) in menuItem.children" :key="subMenuKey">
							<router-link :to="'/en'+subMenuItem.path" :class="[ subMenuItem.type === 'sub_menu' ? 'menu-item-has-children':'']">{{$t(subMenuItem.name)}}</router-link>
							<ul class="sub-menu" v-if="subMenuItem.children_menus">
								<li  v-for="(childrenItem , childrenKey) in subMenuItem.children_menus" :key="childrenKey">
									<a @click="changeOneRoute(childrenItem.path)"  >{{$t(childrenItem.name)}}</a>
								</li>
							</ul>
						</li>
					</ul>
				</template>
				<template ref="dataplz"  v-if="menuItem.type === 'mega_menu'">
					<ul class="sub-menu mega">
						<li v-for="(megaitem,megaitemkey) in menuItem.children" :key="megaitemkey">
                     <router-link :to="'/en/products/'+megaitemkey">{{$t(megaitemkey)}}</router-link>
							<ul class="sub-menu">
								<li v-for="(submega,submegakey) in megaitem" :key="submegakey">
									<a  @click="changeRoute(megaitemkey,submega.name)">{{$t(submega.name)}}</a>
								</li>
								
							</ul>
						</li>
					</ul>
				</template>
         </li>
      </ul>
   </div>
</template>
<style >
#meunstar{
	display: flex;
	flex-wrap: wrap;
}
</style>
<script>
// :to="{name: 'Products', params: {title:$t(megaitemkey)}, query: {category: submega.path}}"
// let godplz = document.getElementById('dataplz')
import categories from "Api/categories";
import departments from "Api/department";
import { mapGetters } from 'vuex';
export default {
   computed:{
		...mapGetters(["selectedLocale"]),
   },
   methods: {
      changeRoute(megaitemkey, submega) {
         // :to="''++'/'+"
         // this.$router.push('/')
         this.$router.push(`/${this.$i18n.locale}/products/${megaitemkey}/${submega}`)
         console.log('helo')
      },
      changeOneRoute(oneLink){
         this.$router.push(`/${this.$i18n.locale}${oneLink}`)
         // location.reload()
         // console.log('helo', oneLink)
      }
   },
data () {
return {
menus:  [
	{
   path: `/home`,
    name: "message.home",
	icon: "home",
	type: "sub_menu",
	},
	 {
      path:`/products`,
      name: "message.shop",
      icon: "pages",
      // type: "sub_menu",
	},
	// {
   //    path: '/products/ACCESSORIES',
   //    name:"message.accessories",
   //    icon: 'party_mode',
   //    children: null
   // },
   {
      path: '',
      name:"message.categories",
      icon: 'party_mode',
      type: 'mega_menu',
      children: {}
   },
      // {
      // path:'',
      // name: "message.shop",
      // icon: "pages",
      // type: "sub_menu",
      // children: [
		// 	{
		// 		name: "message.productDetails",
		// 		children_menus:null,
      //       path: "/products/men/102"
		// 	},
		// 	{
		// 		name: "message.cart",
		// 		children_menus:null,
      //       path: "/cart"
		// 	},
		// 	{
		// 		name: "message.checkout",
		// 		children_menus:null,
      //       path: "/checkout",
		// 	},
		// 	{
		// 		name: "message.payment",
		// 		children_menus:null,
      //       path: "/checkout/payment"
      //    }
      // ]
   // },
   {
      path:`/services`,
      name: "message.services",
      icon: "pages",
      type: "sub_menu",
      children: [
         {
            name: "message.byiza",
            children_menus:null,
            path: "/about"
         },
         {
            name: 'message.byoroshye',
            children_menus:null,
            path: '/term-condition'
         },
         {
            name: 'message.byizewe',
            children_menus:null,
            path: '/services'
         },
      ]
	},
   //  {
   //    path: '',
   //    name:"message.service",
   //    icon: 'party_mode',
   //    type: 'mega_menu',
   //    children: {
   //       'message.men': [
   //          {
   //             path: 'T-shirt',
   //             children_menus:null,
   //             name: 'message.tShirt'
   //          },
   //          {
   //             path: 'Shirt',
   //             children_menus:null,
   //             name: 'message.shirt'
   //          },
   //          {
   //             path: 'Jeans',
   //             children_menus:null,
   //             name: 'message.jean'
   //          },
   //          {
   //             path: 'Jackets',
   //             children_menus:null,
   //             name: 'message.jackets'
   //          },
   //       ],
   //       'message.women': [
   //          {
   //             path: 'Dresses',
   //             children_menus:null,
   //             name: 'message.dresses'
   //          },
   //          {
   //             path: 'Jean',
   //             children_menus:null,
   //             name: 'message.jean'
   //          },
   //          {
   //             path: 'Shirt',
   //             children_menus:null,
   //             name: 'message.shirt'
   //          },
   //          {
   //             path: 'Jackets',
   //             children_menus:null,
   //             name: 'message.jackets'
   //          },
   //       ],
   //       'message.gadgets': [
   //          {
   //             path: 'Headphone',
   //             children_menus:null,
   //             name: 'message.headphone'
   //          },
   //          {
   //             path: 'Smartphone',
   //             children_menus:null,
   //             name: 'message.smartphone'
   //          },
   //          {
   //             path: 'Watch',
   //             children_menus:null,
   //             name: 'message.watch'
   //          },
   //          {
   //             path: 'Speaker',
   //             children_menus:null,
   //             name: 'message.speaker'
   //          },
   //       ],
   //       'message.accessories': [
   //          {
	// 				path: 'Laptop',
	// 				children_menus:null,
   //             name: 'message.laptopAccessories'
   //          },
   //          {
   //             path: 'Belts',
   //             children_menus:null,
   //             name: 'message.belts'
   //          },
   //          {
   //             path: 'Jewellery',
   //             children_menus:null,
   //             name: 'message.jewellery'
   //          },
   //          {
   //             path: 'Purse',
   //             children_menus:null,
   //             name: 'message.purse'
   //          }
   //       ]
   //    }
   // },
   {
      name: "message.about",
      children_menus:null,
      path: `/about`
   },
   // {
   //    path: "",
   //    name: "message.pages",
   //    icon: "pages",
   //    type: "sub_menu",
   //    children: [
   //       {
   //          name: 'message.termAndCondition',
   //          children_menus:null,
   //          path: '/term-condition'
   //       },
         // {
         //    name: 'message.privacyPolicy',
         //    children_menus:null,
         //    path: '/privacy-policy'
         // },
         // {
         //    name: 'message.blogDetail',
         //    children_menus:null,
         //    path: '/blog-detail/1'
         // },
         // {
         //    name: 'message.faq',
         //    children_menus:null,
         //    path: '/faq'
         // },
      // ]
   // },
   {
      path: `/contact`,
      name:"message.contactUs",
      icon: 'perm_contact_calendar',
      children: null
   },
	],
	resCat: '',
   resDept: '',
}
},
// mounted () {
// 	console.log(this.$refs.dataplz)
// },
	async created () {
		try {
			this.resCat = await categories.getCategories()
         this.resDept = await departments.getDepartment()
			var obj = []
			var arr = {}
			this.resDept.data.data.forEach(dep =>{
			    this.resCat.data.data.forEach(el => {
					if (dep._id === el.department) {
					obj.push({
							path: `${el.name.en}`,
							children_menus:null,
                            name: `${el.name.en}`
						})
					}
            });
            arr[dep.name.en] = {...obj}
            for (let i = 0; i < obj.length; i++) {
               delete obj[i]
            }
         })
         this.menus[2].children = arr
			console.log(this.menus[3].children)
		} catch (err) {
			console.log(err.message)
		}
   },
   watch:{
      
   }
}
</script>

