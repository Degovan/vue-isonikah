<template>
  <div class="home">
    <Header />
        <!-- ini adalah bagian box 1 -->
    <div class="box-v1">
      <carousel
        autoplayHoverPause="true"
        :items="1"
        :margin="0"
        :nav="false"
        :animateOut="slideOutUp"
        :dots="true"
        :autoplaySpeed="1000"
        :animateIn="fadeIn"
        :autoplay="true"
        :autoplayTimeout="8000"
      >
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar1.jpeg" alt="" />
        </div>
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar2.jpeg" alt="" />
        </div>
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar1.jpeg" alt="" />
        </div>
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar2.jpeg" alt="" />
        </div>
      </carousel>
    </div>
    <!-- akhir dari box 1 -->



        <!-- ini adalah bagian box 2 -->
    <div class="box-v2">
      <div class="container">
        <div class="option-menu-box">
          <h1>Vendor Terbaru</h1>
          <router-link to="" class="showall">Lihat Semua</router-link>
        </div>
        <div class="wrapper-card">
          <carousel
            :margin="20"
            :dots="true"
            :navText="['','']"
            :loop="true"
            :responsive="{
              0:{ items: 1, nav: false },
              1440:{ 
                items: 3, 
                nav: true,
              },
              1024:{ 
                items: 3, 
                nav: true,
              },
               768:{ 
                items: 2, 
                nav: true,
              },
            }"
          >
            <div class="card">
              <img src="../assets/img/makanan.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Prasmanan Rendang & Sambal kentang</h1>
                <h2>Rp 1.500.000</h2>
                <p>Makanan</p>
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
              <!-- bagian image card  -->
              <img src="../assets/img/makanan.jpg" alt="" />
                 <!-- bagian content card -->
              <div class="content-card">
                <h1>Prasmanan Rendang & Sambal kentang</h1>
                <h2>Rp 1.500.000</h2>
                <p>Makanan</p>
              </div>
               <!-- bagian rate product card  -->
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
                   <!-- bagian image card  -->
              <img src="../assets/img/makanan.jpg" alt="" />
                 <!-- bagian content card -->
              <div class="content-card">
                <h1>Prasmanan Rendang & Sambal kentang</h1>
                <h2>Rp 1.500.000</h2>
                <p>Makanan</p>
              </div>
                   <!-- bagian rate product card  -->
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
                   <!-- bagian image card  -->
              <img src="../assets/img/makanan.jpg" alt="" />
              <div class="content-card">
                <h1>Prasmanan Rendang & Sambal kentang</h1>
                <h2>Rp 1.500.000</h2>
                <p>Makanan</p>
              </div>
               <!-- bagian rate product card  -->
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
          </carousel>
          <div style="height: 100px"></div>
        </div>
      </div>
    </div>
<!-- akhir dari box 2 -->



    <!-- ini adalah bagian box 3 -->
    <div class="box-v3">
      <div class="container">
         <div class="option-menu-box">
        <h1>Promosi & Acara</h1>
        <router-link to="" class="showall">Lihat semua</router-link>
      </div>
      <div class="wrapper-card">
        <carousel
        :itmes="3"
        :margin="10"
        :dots="true"
        :navText="['','']"
        :responsive="{ 0:{items: 1, nav: false}, 1440:{items: 3, nav: true}, 780:{items: 2, nav: false},}"
        >
        <div class="card">
             <!-- bagian image card -->
          <img src="../assets/img/img-1.jpg" alt="isonikah.id">
             <!-- bagian content card -->
          <div class="content-item">
            <div class="flex-card">
              <div class="col-card">
                <h2>Pernikahan Mewah Lisa & Bejo</h2>
              </div>
               <div class="col-card">
                 <button>Detail</button>
              </div>
            </div>
            
            <!-- 
              sediakan if else disini ini adalah element untuk promosi card 
              <div class="cost">
              <h2>Rp. 559.999</h2>
               <h2><strike>Rp. 1.200.000 </strike></h2>
            </div>
             -->
             <div class="event">
               <h2>Acara</h2>
             </div>
          </div>
              <div class="footer-card">
                <div class="flex-footer-card">
                  <div class="col-card-ft">
                         <a href="#"><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a>
                  </div>
                     <div class="col-card-ft">
                <a href="#"><fa :icon="['fas', 'calendar']" /> <span> Desember 2021</span></a>
                         
                  </div>
                </div>
          
             </div>
        </div>
        <div class="card">
             <!-- bagian image card -->
          <img src="../assets/img/img-2.jpg" alt="isonikah.id">
             <!-- bagian content card -->
          <div class="content-item">
            <div class="flex-card">
              <div class="col-card">
                <h2>Sewa Semalaman Hotel Yellow Be</h2>
              </div>
               <div class="col-card">
                 <button>Detail</button>
              </div>
            </div>
            
             
              <div class="cost">
              <h2>Rp. 559.999</h2>
               <h2><strike>Rp. 1.200.000 </strike></h2>
            </div>
            
             <!-- <div class="event">
               <h2>Acara</h2>
             </div> -->
          </div>
              <div class="footer-card">
                <div class="flex-footer-card">
                  <div class="col-card-ft">
                         <a href="#"><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a>
                  </div>
                     <div class="col-card-ft">
                <a href="#"><fa :icon="['fas', 'calendar']" /> <span> Desember 2021</span></a>
                         
                  </div>
                </div>
          
             </div>
        </div>
        <div class="card">
             <!-- bagian image card -->
          <img src="../assets/img/img-3.jpg" alt="isonikah.id">
             <!-- bagian content card -->
          <div class="content-item">
            <div class="flex-card">
              <div class="col-card">
                <h2>Photografer keren</h2>
              </div>
               <div class="col-card">
                 <button>Detail</button>
              </div>
            </div>
            
            <!-- 
              sediakan if else disini ini adalah element untuk promosi card 
              <div class="cost">
              <h2>Rp. 559.999</h2>
               <h2><strike>Rp. 1.200.000 </strike></h2>
            </div>
             -->
             <div class="event">
               <h2>Acara</h2>
             </div>
          </div>
              <div class="footer-card">
                <div class="flex-footer-card">
                  <div class="col-card-ft">
                         <a href="#"><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a>
                  </div>
                     <div class="col-card-ft">
                <a href="#"><fa :icon="['fas', 'calendar']" /> <span> Desember 2021</span></a>
                         
                  </div>
                </div>
          
             </div>
        </div>     
         <div class="card">
             <!-- bagian image card -->
          <img src="../assets/img/img-1.jpg" alt="isonikah.id">
             <!-- bagian content card -->
          <div class="content-item">
            <div class="flex-card">
              <div class="col-card">
                <h2>Pernikahan Mewah Lisa & Bejo</h2>
              </div>
               <div class="col-card">
                 <button>Detail</button>
              </div>
            </div>
            
            <!-- 
              sediakan if else disini ini adalah element untuk promosi card 
              <div class="cost">
              <h2>Rp. 559.999</h2>
               <h2><strike>Rp. 1.200.000 </strike></h2>
            </div>
             -->
             <div class="event">
               <h2>Acara</h2>
             </div>
          </div>
              <div class="footer-card">
                <div class="flex-footer-card">
                  <div class="col-card-ft">
                         <a href="#"><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a>
                  </div>
                     <div class="col-card-ft">
                <a href="#"><fa :icon="['fas', 'calendar']" /> <span> Desember 2021</span></a>
                         
                  </div>
                </div>
          
             </div>
        </div>   
        </carousel>
      </div>
      </div>
    </div>
    <!-- akhir dari box 3 -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import carousel from "vue-owl-carousel";

const imgPrev =  '<img src="../assets/img/arrow-left.png" />';
const imgNext = "<img src='../assets/img/arrow-right.png' />";

export default {
  name: "Home",
  components: {
    Header,
    carousel,
  },
};
</script>
