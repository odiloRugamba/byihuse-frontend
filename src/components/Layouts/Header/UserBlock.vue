<template>
	<div>
		<v-menu transition="scale-transition" offset-overflow nudge-bottom="30" nudge-right="20" min-width="200"
			max-width="200" class="userblock-dropdown" light>
			<template  v-slot:activator="{ on }">
				<v-btn fab small v-on="on">
					<img src="/static/images/user-3.jpg" width="40" height="40" class="v-btn--round">
				</v-btn>
			</template>
			<v-list class="user-dropdown-list">
				<v-list-item  :href="userLink.path" v-for="(userLink, key) in userLinks" :key="key">
					<v-icon class="mr-2">{{userLink.icon}}</v-icon>
					<span>{{userLink.title}}</span>
				</v-list-item>
				<v-list-item  @click="changePage('/session/signin')">
					<v-icon class="mr-2">power_settings_new</v-icon>
					<span v-if="!user">LogIn</span><span v-if="user">LogOut</span>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
	export default {
		// props: ['data'],
		methods: {
			changePage(page) {
				localStorage.clear()
				this.$router.push(page)
			}
		
		},
		data () {
			return {
				user: true,
			userLinks: [
				{
					icon:'account_circle',
					title: 'User Profile',
					path:"/account/profile"
				},
				{
					icon:'settings',
					title:'Account',
					path:"/account/profile"
				},
				{
					icon:'local_post_office',
					title:'Messages',
					path:"/account/profile"
				}
			],
			}
		},
	// 	mounted () {
	// 	const data =JSON.parse(localStorage.getItem('data'))
	// 	// console.log(data)
	// 	if (data) {
	// 		this.data = true
	// 	console.log('hhe')
	// 	}
	// 	this.data = true
	// 	console.log(this.firstName)
	// }
	}
</script>