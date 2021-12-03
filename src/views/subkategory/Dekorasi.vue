<template>
    <div id="subkategory">
        <Header />
        <div class="box-v1">
        <div class="container">
            <div class="head-box">
          <h2>Kategori : Dekorasi</h2>
          <p>Temukan kategori sesuai dengan keinginanmu.</p>

          <div class="select-box">
                    <div class="flex">
                        <div class="col">
                             <select name="" id="">
                        <option value="default">Provinsi</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                        </div>
                        <div class="col">
                             <select name="" id="">
                        <option value="default">Harga</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                        </div>
                        <div class="col">
                            <button>Cari vendor</button>
                        </div>
                    </div>
          </div>
            </div>
            <div class="wrapper-card">
    <div class="card">
         <img src="../../assets/img/dekorasi1.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
           <h1>Dekorasi Modern</h1>
           <h2>Rp 17.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
       <div class="card">
         <img src="../../assets/img/dekorasi2.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
           <h1>Dekorasi Modern</h1>
           <h2>Rp 20.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
       <div class="card">
         <img src="../../assets/img/dekorasi3.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
            <h1>Wedding Modern</h1>
           <h2>Rp 25.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
       <div class="card">
         <img src="../../assets/img/dekorasi4.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
           <h1>Dekorasi Modern</h1>
           <h2>Rp 19.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
           <div class="card">
         <img src="../../assets/img/dekorasi6.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
           <h1>Dekorasi Modern</h1>
           <h2>Rp 18.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
           <div class="card">
         <img src="../../assets/img/dekorasi7.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
          <h1>Dekorasi Modern</h1>
           <h2>Rp 20.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
        <div class="card">
         <img src="../../assets/img/dekorasi8.jpg" alt="" />
         <!-- bagian content card -->
         <div class="content-card">
          <h1>Dekorasi Modern</h1>
           <h2>Rp 29.000.000</h2>
           <p>Dekorasi</p>
         </div>
         <div class="footer-card">
           <a href="#"
             ><fa :icon="['fas', 'map-marker-alt']" /><span
               >Tenggarang</span
             ></a
           >
           <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
           <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
         </div>
       </div>
      </div>
        </div>
        </div>
          <br>
          
        <Footer />
    </div>
</template>
<style scoped>

</style>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
};
</script>
