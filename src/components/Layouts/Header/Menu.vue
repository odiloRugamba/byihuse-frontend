<template>
   <div class="navbar">
      <ul class="app-nav-list pl-0">
         <li class="app-nav-item" v-for="(menuItem , key) in menus" :key="key">
				<a  @click="changeOneRoute(menuItem.path)" >{{$t(menuItem.name)}}</a>
				<template v-if="menuItem.type === 'sub_menu'">
					<ul  class="sub-menu" v-if="menuItem.children && menuItem.children.length > 0">
						<li v-for="(subMenuItem , subMenuKey) in menuItem.children" :key="subMenuKey">
							<a @click="changeOneRoute(subMenuItem.path)"  :class="[ subMenuItem.type === 'sub_menu' ? 'menu-item-has-children':'']">{{subMenuItem.name}}</a>
							<ul class="sub-menu" v-if="subMenuItem.children_menus">
								<li  v-for="(childrenItem , childrenKey) in subMenuItem.children_menus" :key="childrenKey">
									<a @click="changeOneRoute(childrenItem.path)"  >{{childrenItem.name}}</a>
								</li>
							</ul>
						</li>
					</ul>
				</template>
				<template ref="dataplz"  v-if="menuItem.type === 'mega_menu'">
					<ul class="sub-menu mega">
						<li v-for="(megaitem,megaitemkey) in menuItem.children" :key="megaitemkey">
                     <a class="department" @click="changedepRoute(megaitemkey)">{{megaitemkey}}</a>
							<ul class="sub-menu">
								<li v-for="(submega,submegakey) in megaitem" :key="submegakey">
									<a  @click="changeRoute(megaitemkey,submega.name)">{{submega.name}}</a>
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
// :to="{name: 'Products', params: {title:megaitemkey}, query: {category: submega.path}}"
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
         console.log(megaitemkey,submega)
         // localStorage.removeItem('current')
         // const current = `/products/${megaitemkey}/${submega}`
         // localStorage.setItem('current', current)
         this.$router.push(`/${this.$i18n.locale}/products/${megaitemkey}/${submega}`)
         // location.replace(`/${this.$i18n.locale}/products/${megaitemkey}/${submega}`)
         // console.log('helo',megaitemkey, submega)
      },
      changedepRoute(megaitemkey) {
         console.log(megaitemkey)
         // localStorage.removeItem('current')
         // this.$router.push(`/${this.$i18n.locale}/products/${megaitemkey}`)
         // const current = `/products/${megaitemkey}`
         // localStorage.setItem('current', current)
         this.$router.push(`/${this.$i18n.locale}/products/${megaitemkey}`)
      },
      changeOneRoute(oneLink){
         console.log(oneLink)
         // localStorage.removeItem('current')
         // this.$router.push(`/${this.$i18n.locale}/${oneLink}`)
         // this.$router.push(`#/${this.$i18n.locale}/${oneLink}`)
         // const current = `/${oneLink}`
         // localStorage.setItem('current', current)
         // if (oneLink === 'products') {
         //    location.reload()
            // console.log(oneLink)
         // }
         // location.reload()
         // console.log('helo', oneLink)
         if (oneLink !== 'categoriesiii' && oneLink !== 'servicesTitle') {
            this.$router.push(`/${this.$i18n.locale}/${oneLink}`)
         }
      }
   },
data () {
return {
menus:  [
	{
   path: `home`,
    name: "message.home",
	icon: "home",
	type: "sub_menu",
	},
	 {
      path:`products`,
      name: "message.shop",
      icon: "pages",
      // type: "sub_menu",
	},
   {
      path:'categoriesiii',
      name:"message.categories",
      icon: 'party_mode',
      type: 'mega_menu',
      children: {}
   },
   {
      path:"servicesTitle",
      name: "message.services",
      icon: "pages",
      type: "sub_menu",
      children: [
         {
            name: 'byoroshye',
            children_menus:null,
            path: 'byoroshye'
         },
         {
            name: 'byizewe',
            children_menus:null,
            path: 'services'
         },
         {
            name: 'byiza',
            children_menus:null,
            path: 'byiza'
         }
      ]
   },
   {
      path:`rental`,
      name: "message.rental",
      icon: "pages",
      type: "sub_menu",
   },
   {
      name: "message.about",
      children_menus:null,
      path: `about`
   },
   {
      path: `contact`,
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
         if (this.selectedLocale.name === 'French') {
            this.resDept.data.data.forEach(dep =>{
			    this.resCat.data.data.forEach(el => {
					if (dep._id === el.department) {
					obj.push({
							path: `${el.name.fr}`,
							children_menus:null,
                            name: `${el.name.fr}`
						})
					}
            });
            arr[dep.name.fr] = {...obj}
            for (let i = 0; i < obj.length; i++) {
               delete obj[i]
            }
         })
         } else {
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
         }
			
         this.menus[2].children = arr
			// console.log(this.menus[3].children)
		} catch (err) {
			console.log(err.message)
		}
   },
   watch:{
      
   }
}
</script>

