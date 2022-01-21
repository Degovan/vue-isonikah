<template>
  <div class="detail-product">
    <Header />
    <div class="box-v1">
      <div class="container">
        <div class="wrapper-video">
        <div class="plyr__video-embed" id="player">
        <iframe
    src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    allowfullscreen
    allowtransparency
    allow="autoplay"
     ></iframe>
</div>
        </div>
      </div>
    </div>
    <div class="box-v2">
      <div class="container">
        <div class="grid-container">
          <div class="col-grid">
            <div class="profile-wrapper">
            <div class="avatar-profile profile-info">
              <img src="../assets/img/women1.jpg" alt="profile picture">
            </div>
            <div class="profile-info">
              <h2>Makeup Natural & Modern</h2>
              <p>Sari Salon</p>
              <br>
              <h2>Rp 500.000 - 1.500.000</h2>
              <br>
               <label for="">Makeup</label><label for=""><fa :icon="['fas','map-marker-alt']" class="map-icon"/> <span class="text">Tenggarang</span></label><label for=""><fa :icon="['fas','star']" class="star-icon" /> <span class="text">5.0</span></label>
               <br> <br>
               <div class="insight-wrap">
                 <div class="col-insight">
                   <p>600</p>
                   <p>Love</p>
                 </div>
                 <div class="col-insight">
                   <p>600</p>
                   <p>View</p>
                 </div>
                 <div class="col-insight">
                   <p>600</p>
                   <p>Preview</p>
                 </div>
               </div>
            </div>
            </div>
          </div>
          <div class="col-grid">
            <button>Pesan Sekarang</button>
          </div>
        </div>
        <div id="tab-on-dp">
      <TabNav :tabs="['Koleksi','Ulasan', 'Tentang']" :selected="selected" @selected="setSelected">
        <br><br>
        <div class="line"></div>
        <br>
      <Tab :isSelected="selected === 'Koleksi'">
        <div id="collection">
          <p>Menampilkan 100 dari semua hasil</p>
        <br><br>
        <div class="wrapper-collection">
          <div class="col-collect">
           <div class="body-collect">
              <div class="content-collect">
                <h2>Hello</h2>
              </div>
            </div>
          <button class="btn-play"><fa :icon="['fas','play']" /></button>
             <img src="../assets/img/dt-card.jpg" alt="">
          </div>
        </div>
        </div>
        
      </Tab>
      <Tab :isSelected="selected === 'Ulasan'">
        <p>Ulasan</p>
      </Tab>
      <Tab :isSelected="selected === 'Tentang'">
        <p>Tentang</p>
      </Tab>
    </TabNav>
      </div>
      </div>
      
    </div>
   
  </div>
</template>

<script>
import Plyr from "plyr";
import Header from "../components/Header.vue";
import TabNav from '../components/TabNav.vue';
import Tab from '../components/Tab.vue';
export default {
  components: {
    Header,
    TabNav,
    Tab,

  },
  mounted() {
    const player = new Plyr("#player");
  },
  data(){
    return{
      selected: 'Koleksi'
    }
  },
  methods:{
    setSelected(tab){
      this.selected = tab;
    }
  }
};
</script>
