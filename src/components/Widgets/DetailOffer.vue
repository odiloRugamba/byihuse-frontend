<template>
	<div class="emb-detailOffer-wrap">
		<div class="offer-list">
			<v-layout row wrap>
				<v-flex xs12 sm12 md12 lg4 xl4>
					<router-link to="/en/products">
						<div class="overlay-wrap">
							<a href="javascript:void(0)">
								<img alt="Sale Call In Action" class="w-100" src="/static/images/sale-1.jpg" width="640" height="430">
							</a>
							<div class="overlay-content primary-rgba">
								<div>
									<h2>{{$t(sale)}}</h2>
									<h5>{{$t(women)}}</h5>
									<h3>{{$t(discountNumber)}}</h3>
								</div>
							</div>
					  </div>
					</router-link>
				</v-flex>
				<v-flex xs12 sm12 md12 lg4 xl4>
					<router-link to="/en/products">
						<div class="overlay-wrap">
								<a href="javascript:void(0)">
									<img alt="Sale Call In Action" class="w-100" src="/static/images/sale-2.jpg" width="640" height="430">
								</a>
								<div class="overlay-content black-rgba">
									<div>
										<h6 class="">{{$t(arrivalTitle)}}</h6>
										<h2 class="font-weight-regular">{{$t(flat)}}</h2>
										<h5 class="">{{$t(discount)}}</h5>
									</div>
								</div>
						  </div>
					</router-link>
				</v-flex>
				<v-flex xs12 sm12 md12 lg4 xl4>
					<router-link to="/en/products">
						<div class="overlay-wrap">
								<a href="javascript:void(0)">
									<img alt="Sale Call In Action" class="w-100" src="/static/images/sale-3.jpg" width="640" height="430">
								</a>
								<div class="overlay-content pink-rgba">
									<div>
										<h2>{{$t(sale)}}</h2>
										<h5>{{$t(Mencollection)}}</h5>
										<h3>{{$t(off)}}</h3>
									</div>
								</div>
						  </div>
					</router-link>
				</v-flex>
			</v-layout>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return{
			sale: "message.sale",
			women: "message.Womencollection",
			discountNumber: "message.discountNumber",
			arrivalTitle: "message.arrivalTitle",
			flat: "message.flat",
			discount:"message.discount",
			Mencollection:"message.Mencollection",
			off: "message.off"
		}
	}
}
</script>
