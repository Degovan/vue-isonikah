<template>
  <div id="auth-login">
    <div class="box-v1">
      <div class="flex-box">
        <div class="col">
          <div class="col-body">
            <div class="auth-box">
              <div class="auth-icon-brand">
                <img src="../../assets/img/logo-isonikah.png" alt="" />
              </div>
              <div class="auth-title">
                <h2>Login</h2>
                <p>Masuk dengan akun yang sudah terdaftar.</p>
              </div>
              <div class="auth-body">
                <p>Email atau nomor ponsel</p>
                <div class="auth-input-box">
                  <input
                    type="text"
                    name=""
                    id="userphonemail"
                    placeholder=""
                    required
                  />
                </div>
                <br />
                <p>Kata sandi</p>
                <div class="auth-input-box">
                  <div class="input-box-password">
                    <input
                      type="password"
                      name="password"
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
                <button @click="logged">Masuk</button>
                <br /><br />
              </div>
              <p id="hint">
                Apakah akun mu belum terdaftar?<router-link to="/register"
                  ><b>Daftar Sekarang</b></router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {},
  methods: {
    logged: function () {
      var user = document.querySelector("#userphonemail").value;
      var pass = document.querySelector("#password").value;

      const options = {
        method: "POST",

        // ubah url API ke public
        url: "http://localhost:8000/api/auth/login",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: { credential: user, password: pass },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
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
