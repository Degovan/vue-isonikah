<template>
  <div class="home">
    <!-- ini adalah bagian box 1 -->
    <div class="box-p1">
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
          <img src="../assets/img/gambar1.jpeg" alt="Spillmoment picture" />
        </div>
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar2.jpeg" alt="Spillmoment picture" />
        </div>
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar1.jpeg" alt="Spillmoment picture" />
        </div>
        <div class="item-carousel">
          <div class="content-item">
            <h1>Buat Impian Pernikahanmu Menjadi Kenyataan</h1>
            <br /><br />
            <button>Pesan Sekarang</button>
          </div>
          <img src="../assets/img/gambar2.jpeg" alt="Spillmoment picture" />
        </div>
      </carousel>
    </div>
    <!-- akhir dari box 1 -->

    <!-- ini adalah bagian box 2 -->
    <div class="box-p2">
      <div class="container">
        <div class="option-menu-box">
          <h1>Vendor Terbaru</h1>
          <router-link to="/vendor" class="showall">Lihat Semua</router-link>
        </div>
        <div class="wrapper-card">
          <carousel
            :margin="20"
            :dots="true"
            :navText="['', '']"
            :loop="false"
            :responsive="{
              0: { items: 1, nav: false },
              1440: { items: 3, nav: true },
              1024: { items: 3, nav: true },
              780: { items: 3, nav: true },
            }"
          >
            <div class="card">
              <img src="../assets/img/makanan.jpg" alt="Spillmoment picture" />
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
              <img
                src="../assets/img/gaun2-vendor.jpg"
                alt="Spillmoment picture"
              />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Gaun Pernikahan</h1>
                <h2>Rp 500.000</h2>
                <p>Gaun nikah & Tunangan</p>
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
              <img src="../assets/img/bayi2.jpg" alt="Spillmoment picture" />
              <!-- bagian content card -->
              <div class="content-card">
                <h1>Sewa Fotografer</h1>
                <h2>Rp 1.500.000</h2>
                <p>Fotografer</p>
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
              <img
                src="../assets/img/makeup3-vendor.jpg"
                alt="Spillmoment picture"
              />
              <div class="content-card">
                <h1>Makeup modern</h1>
                <h2>Rp 800.000</h2>
                <p>Makeup</p>
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
    <div class="box-p3">
      <div class="container">
        <div class="option-menu-box">
          <h1>Promosi</h1>
          <router-link to="" class="showall">Lihat semua</router-link>
        </div>
        <div class="wrapper-card">
          <carousel
            :itmes="3"
            :margin="10"
            :dots="true"
            :navText="['', '']"
            :responsive="{
              0: { items: 1, nav: false },
              1440: { items: 3, nav: true },
              1024: { items: 3, nav: true },
              780: { items: 3, nav: true },
            }"
          >
            <div class="card">
              <!-- bagian image card -->
              <div class="shine">
                <img src="../assets/img/img-1.jpg" alt="Spillmoment.id" />
              </div>
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
                    <a href="#"
                      ><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a
                    >
                  </div>
                  <div class="col-card-ft">
                    <a href="#"
                      ><fa :icon="['fas', 'calendar']" />
                      <span> Desember 2021</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <!-- bagian image card -->
              <div class="shine">
                <img src="../assets/img/img-2.jpg" alt="Spillmoment.id" />
              </div>
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
                    <a href="#"
                      ><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a
                    >
                  </div>
                  <div class="col-card-ft">
                    <a href="#"
                      ><fa :icon="['fas', 'calendar']" />
                      <span> Desember 2021</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <!-- bagian image card -->
              <img src="../assets/img/img-3.jpg" alt="Spillmoment.id" />
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
                    <a href="#"
                      ><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a
                    >
                  </div>
                  <div class="col-card-ft">
                    <a href="#"
                      ><fa :icon="['fas', 'calendar']" />
                      <span> Desember 2021</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <!-- bagian image card -->

              <img src="../assets/img/img-1.jpg" alt="Spillmoment.id" />
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
                    <a href="#"
                      ><fa :icon="['fas', 'home']" /> <span>Sepatan</span></a
                    >
                  </div>
                  <div class="col-card-ft">
                    <a href="#"
                      ><fa :icon="['fas', 'calendar']" />
                      <span> Desember 2021</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </carousel>
          <div style="height: 100px"></div>
        </div>
      </div>
    </div>
    <!-- akhir dari box 3 -->

    <!-- ini adalah bagian box 4 -->
    <div class="box-p4">
      <div class="container">
        <div class="option-menu-box">
          <h1>Kategori</h1>
          <router-link to="/kategory" class="showall">Lihat semua</router-link>
        </div>
        <div class="wrapper-card">
          <carousel
            :items="3"
            :margin="20"
            :responsive="{
              0: { items: 1, nav: false },
              1440: { items: 3, nav: true },
              1024: { items: 3, nav: true },
              780: { items: 3, nav: true },
            }"
            :navText="['', '']"
          >
            <router-link to="/dekorasi">
              <div class="card">
                <img src="../assets/img/dekorasi4.jpg" alt="Spillmoment picture" />
                <div class="content-card">
                  <h2>Dekorasi</h2>
                </div>
              </div>
            </router-link>
            <router-link to="/makeup">
              <div class="card">
                <img
                  src="../assets/img/makeup3-vendor.jpg"
                  alt="Spillmoment picture"
                />
                <div class="content-card">
                  <h2>Make up</h2>
                </div>
              </div>
            </router-link>
            <div class="card">
              <router-link to="/gaunnikah">
                <img
                  src="../assets/img/gaun2-vendor.jpg"
                  alt="Spillmoment picture"
                />
                <div class="content-card">
                  <h2>Gaun nikah & Tunangan</h2>
                </div>
              </router-link>
            </div>
            <router-link to="/fotografer">
              <div class="card">
                <img src="../assets/img/bayi1.jpg" alt="Spillmoment picture" />
                <div class="content-card">
                  <h2>Fotografer</h2>
                </div>
              </div>
            </router-link>
          </carousel>
          <div style="height: 50px"></div>
        </div>
      </div>
    </div>
    <!-- akhir dari box 4 -->

    <!-- ini adalah bagian box 5 -->

    <div class="box-p5">
      <div class="container">
        <div class="title-box">
          <h1>Apa kata mereka</h1>
        </div>
        <div class="wrapper-rate">
          <carousel nav="false" items="1" autoplay="true">
            <!-- bagian rate -->
            <div class="rate-box">
              <div class="avatar-box">
                <div class="avatar-profile">
                  <div class="col-avatar">
                    <img
                      src="../assets/img/women1.jpg"
                      alt="Spillmoment picture"
                    />
                  </div>
                  <div class="col-avatar">
                    <h2>Nissa Sabyan</h2>
                    <p>Vendor Suplier</p>
                  </div>
                  <div class="col-avatar">
                    <div class="rate-star">
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-rate">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, doloribus impedit quisquam eius qui eaque hic vel,
                  nam ipsum sequi beatae, corporis delectus deleniti! Debitis,
                  fugiat. Quidem neque voluptate aliquam repudiandae, numquam
                  illo iste, labore maiores nisi impedit reiciendis sint nam
                  exercitationem, pariatur saepe. Placeat ratione dolorem iste
                  veniam recusandae neque tempore! Mollitia voluptatum quas ea,
                  et ducimus culpa.
                </p>
              </div>
              <div class="height"></div>
            </div>
            <div class="rate-box">
              <div class="avatar-box">
                <div class="avatar-profile">
                  <div class="col-avatar">
                    <img src="../assets/img/men1.jpg" alt="Spillmoment picture" />
                  </div>
                  <div class="col-avatar">
                    <h2>Jhon Doe</h2>
                    <p>Client Wedding</p>
                  </div>
                  <div class="col-avatar">
                    <div class="rate-star">
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                      <span class="star"><fa :icon="['fas', 'star']" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-rate">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, doloribus impedit quisquam eius qui eaque hic vel,
                  nam ipsum sequi beatae, corporis delectus deleniti! Debitis,
                  fugiat. Quidem neque voluptate aliquam repudiandae, numquam
                  illo iste, labore maiores nisi impedit reiciendis sint nam
                  exercitationem, pariatur saepe. Placeat ratione dolorem iste
                  veniam recusandae neque tempore! Mollitia voluptatum quas ea,
                  et ducimus culpa.
                </p>
              </div>
              <div class="height"></div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import carousel from "vue-owl-carousel";

const imgPrev = '<img src="../assets/img/arrow-left.png" />';
const imgNext = "<img src='../assets/img/arrow-right.png' />";

export default {
  name: "Home",
  components: {
    carousel,
  },
};
</script>
