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
                    id="nama"
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
                    id="email"
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
                    id="phone"
                    placeholder="contoh: +6208974xxxx"
                    required
                  />
                </div>
                <br />
                <p>Jenis kelamin</p>
                <div class="auth-input-box">
                  <div class="flex-input">
                    <select name="" id="select-input gender">
                      <option value="Pria">Pria</option>
                      <option value="Wanita">Wanita</option>
                    </select>
                    <button>
                      <fa :icon="['fas', 'caret-down']" />
                    </button>
                  </div>
                </div>
                <br />
                <p>Tanggal lahir</p>
                <div class="auth-input-box">
                  <input
                    type="date"
                    name=""
                    id="born_date"
                    placeholder=""
                    required
                  />
                </div>
                <br />
                <p>Buat Kata sandi</p>
                <div class="auth-input-box">
                  <div class="input-box-password">
                    <input
                      type="password"
                      name="katasandi"
                      placeholder=""
                      v-on:keyup="isGood(this.value)"
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
                <small id="password-text"></small>
              </div>
              <div class="wrap-button">
                <br />
                <router-link to="/forgot-password"
                  >Lupa kata sandi?</router-link
                >
                <button @click="reg">Lanjutkan</button>
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
import axios from "axios";
export default {
  data: {},
  methods: {
    isGood: function (password) {
      var password_strength = document.getElementById("password-text");

      //TextBox left blank.
      if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
      }

      //Regular Expressions.
      var regex = new Array();
      regex.push("[A-Z]"); //Uppercase Alphabet.
      regex.push("[a-z]"); //Lowercase Alphabet.
      regex.push("[0-9]"); //Digit.
      regex.push("[$@$!%*#?&]"); //Special Character.

      var passed = 0;

      //Validate for each Regular Expression.
      for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
          passed++;
        }
      }

      //Display status.
      var strength = "";
      switch (passed) {
        case 0:
        case 1:
        case 2:
          strength =
            // "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
            alert("weak");
          break;
        case 3:
          strength =
            // "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
            alert("Medium");
          break;
        case 4:
          strength = alert("Strong");
          // "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
          break;
      }
      password_strength.innerHTML = strength;
    },
    reg: function () {
      var name = document.querySelector("#nama").value;
      var email = document.querySelector("#email").value;
      var phone = document.querySelector("#phone").value;
      var password = document.querySelector("#passwordInput").value;
      var gender = document.querySelector("#gender").value;
      var borndate = document.querySelector("#born_date").value;
      const options = {
        method: "POST",
        // ubah url API ke public
        url: "http://localhost:8000/api/auth/register",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: {
          name: name,
          email: email,
          photo: "noimage.png",
          phone: phone,
          password: password,
          gender: gender,
          born_date: borndate,
          role: "user",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          alert("Register response (200) OK");
          var json3 = JSON.stringify(response.data);
          document.querySelector("#getrespon").innerHTML = json3;
        })
        .catch(function (error) {
          console.error(error);
          alert("Register response failure");
          var json4 = JSON.stringify(error);
          document.querySelector("#getrespon").innerHTML = json4;
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
