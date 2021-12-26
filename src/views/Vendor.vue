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
           <!-- Vendor Card -->
           <VendorCard v-for="job in jobs" :key="job.id" :job="job"/>
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
import VendorCard from "@/components/VendorCard.vue";
import JobService from '@/services/JobService.js';



export default {
  components: {
    Header,
    carousel,
    Footer,
    VendorCard
  },
  data(){
    return {
      jobs: []
    }
  },
  created(){
    JobService.getJobs()
      .then(response => {
        this.jobs = response.data
      })
      .catch(error => {
        console.log("there was an error:" + error.response);
      })
  }
  
};
</script>
