<template>
   <div class="emb-shop-card section-gap  page-title-bar" style="padding: 0">
      <div style="background-color: rgba(	0, 53, 102,.6); padding: 7rem 0 ">
         <div class="container">
            <h1 class="mb-4"> {{heading}}</h1>
            <p style="color: #fff" class="font-weight-regular"> {{subHeading}} </p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props:['heading','subHeading']
}
</script>