<template>
  <div id="footer">
    <footer class="footer">
      <div class="container">
        <div class="footer-body">
          <div class="flex-footer">
            <div class="col-footer">
              <img src="../assets/img/logo-with-name.png" alt="logo isonikah" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sint quibusdam officia ut necessitatibus aperiam eveniet, quasi
                sapiente temporibus cupiditate?
              </p>
            </div>
            <div class="col-footer">
              <div class="menu-footer">
                <h2>Menu</h2>
                <br />
                <router-link to="">Vendor</router-link>
                <router-link to="">Promo & Acara</router-link>
                <router-link to="">Paket Spesial</router-link>
                <router-link to="">Event</router-link>
                <router-link to="">Undangan Online</router-link>
              </div>
            </div>
            <div class="col-footer">
              <div class="menu-footer">
                <h2>About</h2>
                <br />
                <router-link to="">Tentang</router-link>
                <router-link to="">Galeri</router-link>
                <router-link to="">Kebijakan & Privasi</router-link>
                <router-link to="">Testimonial</router-link>
              </div>
            </div>
            <div class="col-footer">
              <div class="menu-footer">
                <h2>Follow us</h2>
                <br />
                <div class="menu-social">
                  <div class="item">
                    <a href=""><fa :icon="['fab', 'instagram']" /></a>
                  </div>
                  <div class="item">
                    <a href=""><fa :icon="['fab', 'facebook-square']" /></a>
                  </div>
                  <div class="item">
                    <a href=""><fa :icon="['fab', 'whatsapp']" /></a>
                  </div>
                  <div class="item">
                    <a href=""><fa :icon="['fab', 'twitter']" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="small-footer">
      <p>&copy; Isonikah.id 2021 Allright Reserved</p>
    </div>
  </div>
</template>
