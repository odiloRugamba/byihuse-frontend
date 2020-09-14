<template>
   <div>
      <div class="search-box">
        <v-btn  class="d-inline-block" fab dark v-if="isHidden"	color="accent" @click="search, isHidden = false">
            <v-icon>search</v-icon>
         </v-btn>
      </div>
      <div  class="search-form"  v-if="!isHidden">
        <div class="form">
          <input v-on:keyup.enter="search"  v-model="keyword" type="text" placeholder="Search Here">
            <v-btn class="close-btn white" @click="isHidden = !isHidden">
              <v-icon>close</v-icon>
            </v-btn>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data (){
         return{
            isHidden: true,
            keyword: ''
         }
      },
      methods: {
         search(){
         event.preventDefault();
         // console.log(this.$route)
         
         //   this.$router.push(`/en/search/${this.keyword}`)
           location.assign(`/#/en/search/${this.keyword}`)
      }
      },
   created(){
      this.keyword = this.$route.params.keyword
   }
   }
</script>
