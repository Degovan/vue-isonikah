<template>
  <div class="kategory">

    <div class="box-v1">
      <div class="container">
        <div class="head-box">
          <h2>Kategori</h2>
          <p>Temukan kategori sesuai dengan keinginanmu.</p>
        </div>
        <div>
          <div class="wrapper-card">
            <div class="card">
              <router-link to="">
                <img src="../assets/img/kategori-1.jpg" alt="" />
                <div class="content-card">
                  <h2>Makanan & Minuman</h2>
                </div>
              </router-link>
            </div>
            <div class="card">
              <router-link to="/makeup">
                <img src="../assets/img/makeup-2.jpg" alt="" />
                <div class="content-card">
                  <h2>Make up</h2>
                </div>
              </router-link>
            </div>
            <div class="card">
              <router-link to="/gaunnikah">
                <img src="../assets/img/kategori-baju-adat.jpg" alt="" />
                <div class="content-card">
                  <h2>Gaun nikah & Tunangan</h2>
                </div>
              </router-link>
            </div>
            <div class="card">
              <router-link to="/fotografer">
                <img src="../assets/img/fotografer.jpg" alt="" />
                <div class="content-card">
                  <h2>Fotografer</h2>
                </div>
              </router-link>
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
              <router-link to="/dekorasi">
                <img src="../assets/img/gedung.jpg" alt="" />
                <div class="content-card">
                  <h2>Gedung & Dekorasi</h2>
                </div>
              </router-link>
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
    </div>

  </div>
</template>

