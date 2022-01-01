<template>
  <div id="auth-register">
    <div class="box-v1">
      <div class="flex-box">
        <div class="col">
          <div class="col-body">
            <div class="auth-box">
              <div class="auth-icon-brand">
                <img src="../../assets/img/logo-isonikah.png" alt="" />
              </div>
              <div class="auth-title">
                <h2>Daftar</h2>
                <p>Daftarkan akun sebagai member dari kami.</p>
              </div>
              <div class="auth-body">
                <p>Masukan Nama</p>
                <div class="auth-input-box">
                  <input
                    type="text"
                    name=""
                    placeholder="nama kamu?"
                    required
                  />
                </div>
                <br />
                <p>Alamat Email</p>
                <div class="auth-input-box">
                  <input
                    type="email"
                    name=""
                    placeholder="Masukan alamat email yang ada"
                    required
                  />
                </div>
                <br />
                <p>Nomor Ponsel (opsional)</p>
                <div class="auth-input-box">
                  <input
                    type="number"
                    name=""
                    placeholder="contoh: +6208974xxxx"
                    required
                  />
                </div>
                <br />
                <p>Buat Kata sandi</p>
                <div class="auth-input-box">
                  <div class="input-box-password">
                    <input
                      type="password"
                      name=""
                      placeholder=""
                      id="passwordInput"
                      required
                    />
                    <label for="password-function" class="checkbox-pass">
                      <input type="checkbox" name="" id="password-function" />
                      <div class="icon-eye1 icon">
                        <fa :icon="['fas', 'eye-slash']" />
                      </div>
                      <div class="icon-eye2 icon">
                        <fa :icon="['fas', 'eye']" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="wrap-button">
                <br />
                <router-link to="/forgot-password"
                  >Lupa kata sandi?</router-link
                >
                <button>Lanjutkan</button>
                <br /><br />
              </div>
              <p id="hint">
                Sudah punya akun terdaftar?<router-link to="/login"
                  ><b>Masuk!</b></router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {},
  methods: {},
  mounted() {
    var showHidepass = document.querySelector("#password-function");
    var iconEyeOne = document.querySelector(".icon-eye1");
    var iconEyeTwo = document.querySelector(".icon-eye2");
    var passInput = document.querySelector("#passwordInput");
    showHidepass.addEventListener("click", function () {
      if (showHidepass.checked == true) {
        iconEyeOne.style.display = "none";
        iconEyeTwo.style.display = "block";
        passInput.type = "text";
      } else {
        iconEyeOne.style.display = "block";
        iconEyeTwo.style.display = "none";
        passInput.type = "password";
      }
    });
  },
};
</script>
