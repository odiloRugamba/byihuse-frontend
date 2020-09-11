<template>
	<div class="lang-menu">
		<v-menu transition="scale-transition" :nudge-width="40">
			<template v-slot:activator="{ on }">
				<v-toolbar-title v-on="on">
					<a href="javascript:void(0)" class="white--text font-weight-regular">{{selectedLocale.name}}</a>
					<v-icon dark>arrow_drop_down</v-icon>
				</v-toolbar-title>
			</template>
			<v-list id="button" class="py-0">
				<v-list-item v-for="(language,key) in languages" :key="key" @click="changeLanguage(language)">
					<span id="span">{{language.name}}</span>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>
<style  scoped>
.lang-menu #span{
	font-size: 11px;
}
</style>
<script>
	import { mapGetters } from "vuex";

	export default {
		data() {
			return{
				langPage: ''
			}
		},
		computed: {
			...mapGetters(["selectedLocale", "languages"])
		},
		methods: {
			    changeLanguage(language) {
				this.$i18n.locale = language.locale;
				this.$store.dispatch("changeLanguage", language);
				// this.pageRoute = this.$route.params
				localStorage.removeItem('lang')
				localStorage.removeItem('current')
				localStorage.setItem('lang', JSON.stringify(language))
				const rote = this.$route.path.split(`/`)
				let currentRoute = ''
				rote.forEach(el => {
					if (el !== 'en' &&  el !== 'kiny' && el !== 'fr' && el !== '') {
						currentRoute = currentRoute + '/' + el
					}
				});
				localStorage.setItem('current', currentRoute)
				console.log(currentRoute)
				// location.reload();
				this.langPage = language.lang
				const lang = JSON.parse(localStorage.getItem('lang'))
				const current = localStorage.getItem('current')
				this.$router.push(`/${lang.locale}${current}`)
				
			}
		},
		// watch:{
		// 	langPage: function () {
		// 		console.log('hello')
		// 	}
		// },
		// created() {
			// const lang = JSON.parse(localStorage.getItem('lang'))
			// this.$store.dispatch("changeLanguage", lang.name);
			// this.$i18n.locale = lang.locale;
			// const current = localStorage.getItem('current')
			// this.$router.push(`/${lang.locale}${current}`)
			// this.$i18n.locale = lang.locale;
			// console.log(current)
			// this.$store.dispatch("changeLanguage", lang.name);
			// console.log(lang)
			// console.log( current)
		// }
	}
</script>