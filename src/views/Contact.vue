<template>
   <div class="emb-contact-wrap">
		<emb-page-title
			heading="Contact Us"
			subHeading="Share your feedback with us."
		>
		</emb-page-title>
		<div class="emb-contact-content">
         <!-- <div class="Contact-page">
            <div class="contact-map">
					<emb-google-map></emb-google-map>
            </div>
			</div> -->
			<div class="contact-info-wrapper">
				<v-container grid-list-xl py-0>
					<div class="section-gap">
						<v-layout row wrap>
							<v-flex sm12 md12 lg5 xl5>
								<div class="sec-title">
									<h2 class="v-layout justify-start align-center">Contact Info</h2>
									<h5 class="font-italic mb-6">Sales team</h5> 
								</div>
								<!-- {{contactInfo.info}} -->
								<div class="mb-6">
									<h3>Call</h3>
									<a href="tel:+250784481653" class="color-inherit">
										+250 784 481 653</a>
								</div>
								<div class="mb-6">
									<h3>Mail</h3>
									<a href="mailto:info@byihuse.rw" class="color-inherit">info@byihuse.rw</a>
								</div>
								<div class="mb-6">
									<h3>Address</h3>
									<p>KN2 ave opposite MIC building</p>
								</div>
							</v-flex>
							<v-flex sm12 md12 lg7 xl7>
								<div class="sec-title">
									<h2>Write to Us</h2>
								</div>
								<v-form  ref="form" v-model="valid">
									<v-text-field v-model="fristName" type="text" placeholder="First Name" :rules="inputRules.basictextRules"></v-text-field>
									<v-text-field v-model="lastName"	type="text"	placeholder="Last Name" :rules="inputRules.basictextRules"></v-text-field>
									<v-text-field v-model="email" type="email" placeholder="Email"></v-text-field>
									<v-text-field v-model="subject"	type="text"	placeholder="Subject" :rules="inputRules.basictextRules"></v-text-field>
									<v-textarea v-model="message" rows="2" label="Leave a Message" :rules="inputRules.basictextRules"></v-textarea>
									<v-btn :loading="loading" class="accent mx-0 mt-4" large @click.stop.prevent="getContactInfo">	Send Message</v-btn>
								</v-form>
							</v-flex>
						</v-layout>
					</div>
				</v-container>
			</div>
		</div>
   </div>
</template>

<script>
import contact from "Api/contact";

export default {
  data() {
    return {
	loading: false,
	  fristName:'',
	  lastName: '',
	  email: '',
	  subject: '',
	  message: '',
      valid: false,
      contactInfo: "",
      inputRules: {
        basictextRules: [v => !!v || "This field should not be empty"]
	  },
    };
  },
  methods: {
    async getContactInfo() {
		this.loading=true
      try {
		  const res = await contact.postMessage({
			   firstName: this.fristName,
			   lastName: this.lastName,
			   email:this.email,
			   subject: this.subject,
			   message: this.message
			   })
		//   console.log()
		  this.$snotify.success(`${res.data.message}`,{
                    closeOnClick: false,
                    pauseOnHover: false,
                    timeout: 1000,
					showProgressBar:false,
				});
				this.loading=false
	  } catch (err) {
		  console.log(err)
		//   this.$snotify.error(`${err}`,{
        //             closeOnClick: false,
        //             pauseOnHover: false,
        //             timeout: 1000,
		// 			showProgressBar:false,
		// 		});
		  this.loading=false
	  }
    },
    saveDetails() {
      this.$refs.form.validate();
    }
  }
};
</script>

