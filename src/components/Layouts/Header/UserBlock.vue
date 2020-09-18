<template>
	<div>
		<v-menu transition="scale-transition" offset-overflow nudge-bottom="30" nudge-right="20" min-width="200"
			max-width="200" class="userblock-dropdown" light>
			<template  v-slot:activator="{ on }">
				<v-btn fab small v-on="on">
					<img src="/static/images/logo/face.png" width="40" height="40" class="v-btn--round">
				</v-btn>
			</template>
			<v-list class="user-dropdown-list">
				<div  v-if="user">
				 <v-list-item  v-for="(userLink, key) in userLinks" :key="key">
					<router-link :to="userLink.path" >
					    <v-icon class="mr-2">{{userLink.icon}}</v-icon>
					    <span>{{userLink.title}}</span>	
					</router-link>
				 </v-list-item>
				</div>
				
				<v-list-item  @click="changePage('/session/signin')">
					<v-icon class="mr-2">power_settings_new</v-icon>
					<span v-if="!user">LogIn</span><span v-if="user">LogOut</span>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>
<style  scoped>
@media screen  and (max-width: 409px){
   .userblock-dropdown img{
      height: 20px;
   }
}
</style>
<script>
	export default {
		// props: ['data'],
		methods: {
			changePage(page) {
				localStorage.clear()
				this.$router.push(page)
				// location.replace(page)
				// location.reload(false)
				if (this.user) {
					this.user= false
					console.log('hel')
				}else{
					this.user= true
					console.log('hel0')
				}
			}
		
		},
		data () {
			return {
				user: false,
			userLinks: [
				{
					icon:'account_circle',
					title: 'User Profile',
					path:"/account/profile"
				},
				// {
				// 	icon:'settings',
				// 	title:'Account',
				// 	path:"/account/profile"
				// },
				// {
				// 	icon:'local_post_office',
				// 	title:'Messages',
				// 	path:"/account/profile"
				// }
			],
			data: ''
			}
		},
		mounted () {
		this.data =JSON.parse(localStorage.getItem('data'))
		// console.log(data)
		if (this.data) {
			this.user = true
		console.log('hhe')
		}
		// this.data = true
		// console.log(this.firstName)
	},
	// watch:{
	// 	data: function() {
	// 		console.log('jdshjdhfjdshjkdfjk')
	// 	}
	// }
	}
</script>