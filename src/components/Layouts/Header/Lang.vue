<template>
	<div class="lang-menu">
		<v-menu transition="scale-transition" :nudge-width="40">
			<template v-slot:activator="{ on }">
				<v-toolbar-title v-on="on">
					<a v-if="selectedLocale.name" href="javascript:void(0)" class="white--text font-weight-regular">{{selectedLocale.name}}</a>
					<a  v-if="!selectedLocale.name" href="javascript:void(0)" class="white--text font-weight-regular">{{specialLang}}</a>
					<!-- <span id="span">{{specialLang}}</span> -->
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
				langPage: '',
				specialLang: ''
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
				// localStorage.removeItem('lang')
				// localStorage.removeItem('current')
				// localStorage.setItem('lang', JSON.stringify(language))
				const rote = this.$route.path.split(`/`)
				let currentRoute = ''
				rote.forEach(el => {
					if (el !== 'en' &&  el !== 'kiny' && el !== 'fr' && el !== '') {
						currentRoute = currentRoute + '/' + el
					}
				});
				// localStorage.setItem('current', currentRoute)
				console.log(rote, this.$route.path)
				this.langPage = language.lang
				// const lang = JSON.parse(localStorage.getItem('lang'))
				// const current = localStorage.getItem('current')
				// this.$router.push(`/${lang.locale}${current}`)
				// location.reload();
				// location.assign('#')
				location.assign(`/#/${this.$i18n.locale}${currentRoute}`)
				location.reload(true)

				// location.l
				
			}
		},
		// watch:{
		// 	langPage: function () {
		// 		console.log('hello')
		// 	}
		// },
		mounted() {
			// let lang = JSON.parse(localStorage.getItem('lang'))
			// const current = localStorage.getItem('current')
			// if (!lang) {
			// 	lang= {
			// 		name: "English",
			// 		locale: "en"
			// 		}
				// localStorage.setItem('lang',JSON.)
			// }
			// console.log(this.$route.params)
			// if (current) {
			// this.$store.dispatch("changeLanguage", lang.name);
			// this.$i18n.locale = lang.locale;
			// this.$router.push(`/${lang.locale}${current}`)
			// this.$i18n.locale = lang.locale;
			// this.$store.dispatch("changeLanguage", lang.name);
			// this.specialLang=lang.name
			// }else{
				// this.$router.push(`/${lang.locale}/home`)
				// this.$store.dispatch("changeLanguage", {name: "English", locale: "en"});
			// }
			if (this.$route.params.lang === 'fr') {
				this.$store.dispatch("changeLanguage", {name: "French", locale: "fr"});
				this.$i18n.locale= 'fr'
				// console.log('sdajhskajhjkashjk')
			}else{
				this.$store.dispatch("changeLanguage", {name: "English", locale: "en"});
				this.$i18n.locale= 'en'
			}		
		}
	}
</script>