<template>
    <div id="subkategory">
        <Header />
        <div class="box-v1">
        <div class="container">
            <div class="head-box">
          <h2>Kategori : Make up</h2>
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
              <img src="../../assets/img/riastangan.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Rias Tangan Pengantin</h1>
                <h2>Rp 80.000 - 240.000 </h2>
                <p>Makeup</p>
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
              <img src="../../assets/img/makeup1.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Modern Make Up</h1>
                <h2>Rp 1.500.000</h2>
                <p>Makeup</p>
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
              <img src="../../assets/img/makeup2.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Makeup pengantin</h1>
                <h2>Rp 1.299.999</h2>
                <p>Makeup</p>
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
              <img src="../../assets/img/makeup3.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>MakeUp Pengantin</h1>
                <h2>Rp 2.200.000</h2>
                <p>Makeup</p>
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
              <img src="../../assets/img/makeup4.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Makeup wajah pengantin</h1>
                <h2>Rp 7.500.000</h2>
                <p>Makeup</p>
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
              <img src="../../assets/img/makeup5.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Makeup pengantin</h1>
                <h2>Rp 3.500.000</h2>
                <p>Makeup</p>
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
              <img src="../../assets/img/makeup5.jpg" alt="" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Makeup pengantin</h1>
                <h2>Rp 3.500.000</h2>
                <p>Makeup</p>
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
