<template>
  <div class="home">
   <Header/>
   <div class="box-v1">  
     <carousel autoplayHoverPause="true" :items="1" :margin="0" :nav="false" :animateOut="slideOutUp" :dots="true" :autoplaySpeed="1000" :animateIn="fadeIn" :autoplay="true" :autoplayTimeout="8000">
     <!-- 
       jika ingin pakai dinamis gambanya pake code ini 
       :style="{ backgroundImage: `url(${require(background)})` }" 
     -->
     <div class="item-carousel">
       <div class="content-item">
         <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
         <br><br>
         <button>Pesan Sekarang</button>
       
       </div>
         <img src="../assets/img/gambar1.jpeg" alt="">
     </div>
     <div class="item-carousel">
       <div class="content-item">
           <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
         <br><br>
         <button>Pesan Sekarang</button>
         
       </div>
       <img src="../assets/img/gambar2.jpeg" alt="">
     </div> 
       <div class="item-carousel">
       <div class="content-item">
           <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
         <br><br>
         <button>Pesan Sekarang</button>
        
       </div>
        <img src="../assets/img/gambar1.jpeg" alt="">
     </div> 
       <div class="item-carousel">
       <div class="content-item">
           <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
         <br><br>
         <button>Pesan Sekarang</button>
        
       </div>
        <img src="../assets/img/gambar2.jpeg" alt="">
     </div> 
     
   </carousel>
     </div>
     </div>
 
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import carousel from 'vue-owl-carousel2'
export default {
  name: 'Home',
  components: {
    Header,
    carousel,

  }
}
</script>
