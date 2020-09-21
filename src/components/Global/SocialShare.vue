<template>
   <div class="d-inline-block social-icons">
      <v-btn @click="shareFb" light icon class="primary">
         <v-icon light>fa-facebook</v-icon>
      </v-btn>
      <v-btn light icon class="primary">
         <v-icon light>fa-twitter</v-icon>
      </v-btn>
      <v-btn light icon class="primary">
         <v-icon light> fa-google-plus</v-icon>
      </v-btn>
      <!-- <v-btn light icon class="primary">
         <v-icon light>fa-instagram</v-icon>
      </v-btn> -->
      <a href="http://twitter.com/home?status=Currentlyreading <?php the_permalink(); ?>" title="Click to share this post on Twitter"><img src="ADD_IMAGE_URL_HERE" alt="Share on Twitter"></a>
      <a href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&source=ADD_YOUR_BLOG_URL_HERE"><img src="ADD_IMAGE_URL_HERE"></a>
   </div>
</template>
<script>
export default {
   methods:{
      shareFb (){
         const current = document.URL
         console.log(current)
         const yego = `https://wa.me/?text=${current}`
         console.log(yego)
         window.open(yego)
      }
   }
}
</script>