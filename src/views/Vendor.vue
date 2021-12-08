<template>
  <div class="vendor">
    <Header />
    <div class="box-v1">
      <div class="head-box">
        <div class="container">
          <h2>Vendor Pernikahan</h2>
          <p>Kamu ingin mencari vendor impian seperti apa?</p>
        </div>
      </div>
      <div class="container">
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
                <option value="default">Kategori</option>
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
        <div class="wrapper-card">
          <div class="card">
            <img src="../assets/img/makanan4.jpg" alt="" />
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
            <img src="../assets/img/makeup3-vendor.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Makeup Pernikahan</h1>
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
            <img src="../assets/img/dekorasi2.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Dekorasi Pernikahan</h1>
              <h2>Rp 11.500.000</h2>
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
            <img src="../assets/img/bayi1.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Sewa fotografer</h1>
              <h2>Rp 3.500.000</h2>
              <p>Fotografer</p>
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
            <img src="../assets/img/gaun2-vendor.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Gaun Pernikahan</h1>
              <h2>Rp 1.500.000</h2>
              <p>Gaun nikah & Tunangan</p>
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
            <img src="../assets/img/makanan1.jpg" alt="" />
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
            <img src="../assets/img/makanan2.jpg" alt="" />
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
            <img src="../assets/img/makanan3.jpg" alt="" />
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
            <img src="../assets/img/dekorasi1.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Dekorasi Modern</h1>
              <h2>Rp 14.500.000</h2>
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
            <img src="../assets/img/bayi3.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Fotografer Profesioanal</h1>
              <h2>Rp 4.500.000</h2>
              <p>Fotografer</p>
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
            <img src="../assets/img/bayi2.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Weeding Fotografer</h1>
              <h2>Rp 1.500.000</h2>
              <p>Fotografer</p>
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
            <img src="../assets/img/bayi5.jpg" alt="" />
            <!-- bagian content card -->
            <div class="content-card">
              <h1>Fotografer bayi</h1>
              <h2>Rp 3.500.000</h2>
              <p>Fotografer</p>
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
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import carousel from "vue-owl-carousel";
const axios = require("axios");
export default {
  data() {},
  methods: {},
  components: {
    Header,
    carousel,
    Footer,
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};
</script>
