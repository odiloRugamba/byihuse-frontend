<template>
	<div class="day-deal-wrap white section-gap">
		<v-container grid-list-xl pb-0>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg6 xl6>
					<router-link to="/en/services">
						<v-img
							alt="deal of the day"
							:src="selectedPreviewImage"
							aspect-ratio="1"
							max-width="900"
							max-height="500"
						/>
					</router-link>
				</v-flex>
				<v-flex xs12 sm12 md6 lg6 xl6 pl-5 deal-content>
					<div class="day-deal-content"> 
						<div class="mb-12">
							<h2 class="font-weight-regular mb-6">
								{{$t(`${data.sectitle}`)}}
							</h2>
							<h5 class="font-weight-regular">
								{{$t(`${data.subtitle}`)}}
							</h5>
							<p class="accent--text d-inline-block sec-content">
								{{$t(`${data.metaainfo}`)}}
								 <emb-currency-sign class="accent--text"></emb-currency-sign> 1000
							</p>
							<p>{{$t(data.paragraph)}}</p>
							<h4>Call us on +250 784 481 653</h4>
							
						</div>
						<v-layout row wrap cmx-0>
							<v-flex xs4 sm4 md4 lg4 xl4
								class="product-gallery" 
								v-for="(productImage,key) in productGallery"
								:key="key"
								@click="togglePreviewImage(productImage)"
							>
								<a href="javascript:void(0)">
									<v-img
										alt="deal of the day"
										class="emb-card"
										:src="productImage"
										aspect-ratio="0.8"
										max-width="217"
										max-height="217"
									/>
								</a>
							</v-flex>
						</v-layout>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	// props:['data'],
	data(){
		return{
			selectedPreviewImage:'',
			data:{
				sectitle: "message.sectitle",
                subtitle: "message.subtitle",
                // metainfo: "message.metainfo",
                metaainfo: "message.metaainfo",
                paragraph: "message.paragraph",
			},
			productGallery: [
					"/static/images/men/dry-clean.jpg",
					"/static/images/men/dry-clean-2.jpg",
					"/static/images/men/dry-clean-3.jpg"
				]
		}
	},
	methods: {
		/**
		 * method to toggle the image
		*/
		togglePreviewImage(image) {
			this.selectedPreviewImage = image;
		}
	},
	mounted () {
		this.selectedPreviewImage= this.productGallery[0]
	}
}
</script>
