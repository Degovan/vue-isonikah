<template>
  <div class="kategory">
    <Header />
    <div class="box-v1">
      <div class="head-box">
        <div class="container">
          <h2>Kategori</h2>
          <p>Temukan kategori sesuai dengan keinginanmu.</p>
        </div>
      </div>
      <div class="container">
        <div class="wrapper-card">
          <div class="card">
            <img src="../assets/img/kategori-1.jpg" alt="" />
            <div class="content-card">
              <h2>Makanan & Minuman</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/makeup-2.jpg" alt="" />
            <div class="content-card">
              <h2>Make up</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/kategori-baju-adat.jpg" alt="" />
            <div class="content-card">
              <h2>Baju Adat</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/fotografer.jpg" alt="" />
            <div class="content-card">
              <h2>Fotografer</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/aksesoris.jpg" alt="" />
            <div class="content-card">
              <h2>Aksesoris</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/honeymoon.jpg" alt="" />
            <div class="content-card">
              <h2>Wisata & Hotel Bulan Madu</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/gedung.jpg" alt="" />
            <div class="content-card">
              <h2>Gedung & Dekorasi</h2>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/hantaran.jpg" alt="" />
            <div class="content-card">
              <h2>Hantaran & Souvenir</h2>
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
export default {
  components: {
    Header,
    Footer
  },
};
</script>
