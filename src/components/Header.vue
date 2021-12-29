<template>
  <div id="header">
    <header class="header">
      <div>
        <div class="flex-header">
          <div class="col-head">
            <div class="title-brand-icons">
              <router-link to="/">
                <span>
                  <img
                    src="../assets/img/logo-isonikah.png"
                    alt="logo isonikah"
                  />
                </span>
              </router-link>
            </div>
          </div>
          <div class="col-head" id="searchbox">
            <div class="closebar" v-on:click="searchHide">
              <a href="javascript:void(0)"
                ><fa :icon="['fas', 'angle-up']"
              /></a>
            </div>
            <form action="" method="">
              <div class="input-search">
                <input
                  type="text"
                  placeholder="Temukan vendor pernikahamu...."
                  aria-autocomplete="off"
                  autocomplete="off"
                  name="search"
                />
                <button><fa :icon="['fas', 'search']" /></button>
              </div>
            </form>
          </div>
          <div class="col-head">
            <div class="auth-link">
              <router-link to="/login">Gabung anggota?</router-link
              >|<router-link to="/register">
                Apakah anda seorang vendor?</router-link
              >
            </div>
          </div>
          <div class="col-head">
            <div class="bar">
              <a href="#" v-on:click="searchVisible" style="margin: 0 2rem"
                ><fa :icon="['fas', 'search']"
              /></a>
              <a href="#" v-on:click="barVisible"
                ><fa :icon="['fas', 'bars']"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="small-header">
      <div class="closebar" v-on:click="barHide">
        <a href="javascript:void(0)"><fa :icon="['fas', 'times']" /></a>
      </div>
      <div class="menu-bar">
        <router-link to="/vendor">Vendor</router-link>
        <router-link to="/undanganonline">Undangan Online</router-link>
        <router-link to="/paketspesial">Paket Spesial</router-link>
        <router-link to="/promosi">Promosi & Acara</router-link>
        <router-link to="/galeri">Galeri</router-link>
        <router-link to="/event">Event</router-link>
        <router-link to="/about">Tentang</router-link>
        <div class="menu-auth">
          <br /><br />
          <a href=""><button>Masuk</button></a>
          <a href=""><button>Mendaftar</button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    barVisible: function () {
      document.querySelector(".small-header").style.display = "block";
      document.querySelector(".small-header").style.animation =
        "slideInRight 0.2s cubic-bezier(0.33, 0.67, 0.83, 0.67)";
    },
    barHide: function () {
      document.querySelector(".small-header").style.animation =
        "slideOutRight 0.5s cubic-bezier(0.33, 0.67, 0.83, 0.67)";
      setTimeout(function () {
        document.querySelector(".small-header").style.display = "none";
      }, 480);
    },
    searchVisible: function () {
      document.querySelector("#searchbox").style.display = "block";
      document.querySelector("#searchbox").style.animation =
        "slideInDown 0.4s ease-in";
    },
    searchHide: function () {
      document.querySelector("#searchbox").style.animation =
        "slideOutUp 0.4s ease-out";
      setTimeout(function () {
        document.querySelector("#searchbox").style.display = "none";
      }, 380);
    },
  },
  mounted() {},
};
</script>
