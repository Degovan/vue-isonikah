<template>
    <div id="event-detail">
        <div class="box-v1">
            <div class="container">
                <div class="flex-w-1">
                    <div class="col-flex">
                         <div class="image-wrapper">
                                <img src="" alt="">
                            </div>
                        <section class="body-box">
                            <div class="title-event">
                                <h2>Membahas Spill Pernikahan</h2>
                            </div>
                            <div class="badge-wrap">
                      <!-- Note kasik condition if apabila event nya masih belum dimulai -->
                      <button class="badge">
                          <fa :icon="['fas', 'stopwatch']" /> <label>Belum dimulai</label>
                      </button>
                      <!-- Note kasik condition if apabila eventnya dimulai -->
                        <!-- <button class="badge started">
                        <p>Telah dimulai</p>
                      </button> -->
                      <!-- Note kasik condition if apabila event nya berbayar -->
                       <button class="badge paid">
                          <fa :icon="['fas', 'wallet']" /> <label>Berbayar</label>
                      </button>
                         <!-- Note kasik condition if apabila event nya berbayar -->
                       <!-- <button class="badge ended">
                          <fa :icon="['fas', 'calendar-check']" /> <label>Sudah berakhir</label>
                      </button> -->
                      </div>
                      <br><br>
                      <div class="event-description">
                          <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos ea natus maxime reiciendis consequuntur quasi porro exercitationem assumenda, quidem debitis rerum odit sed nemo eveniet blanditiis harum esse odio.
                          </p>
                      </div>
                        </section>
                    </div>
                    <div class="col-flex">
                        <div class="body-box">
                            <div class="auth-info">
                            <h2>Pendaftaran</h2>
                            <br>
                            <button class="btn-required">Anda Belum login</button>
                        </div>
                        <br><br>
                        <div class="detail-event">
                            <h2>Detail Event</h2>
                            <br><br>
                            <!-- tipe event -->
                            <label for=""><span><fa :icon="['fas', 'hashtag']" /></span> Tipe Event</label>
                            <p>Event berbayar & E-Sertifikat</p>
                            <br>
                            <!-- partner -->
                            <label for=""><span><fa :icon="['fas', 'handshake']" /></span> Partner</label>
                            <p>Spillmoment & Degovan</p>
                            <br>
                            <!-- mulai event -->
                            <label for=""><span><fa :icon="['fas', 'calendar-alt']" /></span> Mulai</label>
                            <p>Rabu, 26 januari 2022 : 20.00</p>
                            <br>
                            <!-- harga dan certificate -->
                             <label for=""><span><fa :icon="['fas', 'certificate']" /></span> Harga Event + Sertifikat</label>
                            <p>Rp. 50.000</p>
                            <br>
                            <!-- kuota -->
                            <label for=""><span><fa :icon="['fas', 'users']" /></span> Kuota tersisa</label>
                            <p>3000 orang</p>
                            <br>
                            <!--  -->
                            <label for=""><span><fa :icon="['fas', 'user']" /></span> Mengikuti</label>
                            <p>789 orang</p>
                            <br>
                            <label for=""><span><fa :icon="['fas', 'info-circle']" /></span> Status</label>
                            <p>Belum mulai</p>
                            <br>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
</script>