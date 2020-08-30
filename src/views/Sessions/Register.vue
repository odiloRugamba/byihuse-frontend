<template>
	<div class="emb-register-wrap section-gap">
		<div class="container py-0">
			<v-layout row wrap align-center justify-center>
				<v-flex sm12 md12 lg8 xl7>
					<v-layout row mx-sm-0 mx-3  wrap align-center justify-center>
						<v-flex sm6 md7 lg6 xl6 hidden-sm-and-down>
							<div class="form-img register-image"></div>
						</v-flex>
						<v-flex sm10 md5 lg6 xl6>
							<div class="emb-card sign-in-form form-margin d-block white pa-6">
								<h4>Enter Your Details</h4>
								<v-form ref="form" v-model="valid">
									<v-text-field
										type="text"
										placeholder="First Name*"
										v-model="firstName"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										type="text"
										v-model="lastName"
										placeholder="Last Name*"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										type="email"
										v-model="email"
										placeholder="Email*"
										:rules="emailRules"
									>
									</v-text-field>
									<!-- <v-select
									:items="items"
									label="Role"
									v-model="role"
									dense
									></v-select> -->
									<v-text-field
										type="password"
										placeholder="Enter Password*"
										v-model="password"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-text-field
										class="mb-4"
										type="password"
										placeholder="confrim Password*"
										v-model="repassword"
										:rules="inputRules.basictextRules"
									>
									</v-text-field>
									<v-btn class="accent mx-0 mb-4" large  @click.stop.prevent="saveDetails">
										Sign Up
									</v-btn>
									<p>Already have account? then<router-link to="/session/signin" class="accent--text"> Sign In</router-link></p>
								</v-form>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</div>
   </div>
</template>
	
<script>
import auth from "Api/auth";
// import department from "Api/department";
	export default{
   	data () {
      	return {
			  Departments: [],
			  items: ['SUPER-ADMIN', 'DEPARTMENT-ADMIN', 'CASHIER', 'AGENT', 'CLIENT'],
			  firstName: '',
			  lastName: '',
			  email: '',
			  role: 'CLIENT',
			  password: '',
			  repassword: '',
			  data: '',
         	valid: false,
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+/.test(v) || 'E-mail must be valid'
      		],
          	inputRules: {
			   basictextRules: [v => !!v || 'This field should not be empty'],
            }
         }
      },
      methods: {
         saveDetails(){
				this.$refs.form.validate();
				if(this.valid == true){
					this.signup()
					console.log('askjhaskj')
					this.$router.push('/session/signin');
            }	
			},
		 async signup () {
           try {
			//    if (this.password === this.repassword) {
				const res = await auth.signup({
                   firstName: this.firstName,
                   lastName: this.lastName,
                    email: this.email,
                    role: this.role,
                    password: this.password
			})   
			console.log(res)
			//    } else {
			// 	   this.password= ''
			// 	   this.repassword= ''
			//    }
               
			// console.log(res.data)
			} catch (err) {
				console.log(err)
			}
		}
	},
	// async mounted () {
	// 		try {
	// 			const res = await department.getDepartment()
	// 			this.data = await res.data.data
	// 			this.data.forEach(el => {
	// 				this.Departments.push(el.name.kiny)
	// 			});
	// 		} catch (err) {
	// 			console.log(err.message)
	// 		}
	// 	}
	}
</script>