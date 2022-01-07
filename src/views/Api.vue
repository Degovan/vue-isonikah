<template>
  <div id="api">
    <h2>Login</h2>
    <input type="text" name="" id="nama" placeholder="email" /><br />
    <input type="text" name="" id="password" placeholder="password" /><br />
    <button @click="send" type="button">Send request</button>
    <br /><br />
    <h2>Register</h2>
    <input type="text" name="" id="name" placeholder="Nama" /><br />
    <input type="text" name="" id="email" placeholder="email" /><br />
    <input type="text" name="" id="phone" placeholder="phone" /><br />
    <input type="text" name="" id="katasandi" placeholder="katasandi" /><br />
    <select name="" id="gender">
      <option value="male">Male</option>
      <option value="famale">Female</option>
    </select>
    <input type="date" id="born_date" />
    <button @click="reg" type="button">Send request</button>
    <br /><br />
    <h2>Api response :</h2>
    <p id="getrespon">no execute api</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {},
  methods: {
    send: function () {
      var user = document.querySelector("#nama").value;
      var pass = document.querySelector("#password").value;

      const options = {
        method: "POST",
        url: "https://backend.isonikah.id/api/auth/login",
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
          alert("response 200 OK");
          var json = JSON.stringify(response.data);
          document.querySelector("#getrespon").innerHTML = json;
        })
        .catch(function (error) {
          console.error(error);
          alert("response failure check devtools");
          var json2 = JSON.stringify(error);
          document.querySelector("#getrespon").innerHTML = json2;
        });
    },
    reg: function () {
      var name = document.querySelector("#name").value;
      var email = document.querySelector("#email").value;
      var phone = document.querySelector("#phone").value;
      var password = document.querySelector("#katasandi").value;
      var gender = document.querySelector("#gender").value;
      var borndate = document.querySelector("#born_date").value;
      const options = {
        method: "POST",
        url: "https://backend.isonikah.id/api/auth/register",
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
  async mounted() {},
};
</script>
