<template>
   <div class="emb-shop-card section-gap  page-title-bar">
      <div class="container">
         <h1 style="color: #003566;" class="mb-4"> {{heading}}</h1>
         <p style="color:#003566;" class="font-weight-regular"> {{subHeading}} </p>
      </div>
   </div>
</template>

<script>
export default {
   props:['heading','subHeading']
}
</script>