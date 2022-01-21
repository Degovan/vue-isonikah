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
          <div class="card" v-for="product in products" v-bind:key="product.id">
            <img :src="`https://backend.Spillmoment.id/api/product${product.photos}`" alt="" />
            
            <!-- bagian content card -->
            <div class="content-card">
              <h1>{{product.name}}</h1>
              <h2>{{product.price}}</h2>
              <p>{{product.category.name}}</p>
            </div>
            <div class="footer-card">
              <a href="#"
                ><fa :icon="['fas', 'map-marker-alt']" /><span
                  >{{product.vendor.address}}</span
                ></a
              >
              <a href="#"><fa :icon="['fas', 'heart']" /><span>100</span></a>
              <a href="#"><fa :icon="['fas', 'star']" /><span>5.0</span></a>
            </div>
          </div>
    

          <!-- {{products}} -->
          <!-- <ul >
            <li> id: {{product.name}}</li>
          </ul> -->


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
import axios from 'axios'

export default {
  components: {
    Header,
    carousel,
    Footer,
  },

  data() {
    return {
      products: []
    }
  },

  mounted() {
    axios
      .get("https://backend.isonikah.id/api/product")
      .then(response => {
          this.products = response.data.data.product
      })
      .catch(err => {
          console.log(err);
      })
  },
};
</script>
