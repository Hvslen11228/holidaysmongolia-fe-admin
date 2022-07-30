<template>
  <div id="app">
    <div v-if="loading">loading</div>
    <div v-else>
      <Header :logOut="logOut" />
      <router-view />
      <div class="p-1"></div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import { setCookie, getCookie } from "./functions/cookie";
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";
import axios from "axios";
export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return { loading: true };
  },
  methods: {
    async logOut() {
      // await axios.post(`users/logout`);
      await setCookie("token", "null", 3);
      this.$store.dispatch("user", []);
      this.$store.dispatch("token", null);
      Swal.fire({
        title: "Амжилттай",
        text: "Бүртгэлээс гарлаа",
        icon: "success",
        confirmButtonText: "Ойлголоо"
      }).then(() => {
        this.$router.push("/login");
      });
    }
  },
  mounted: function() {
    axios
      .get("verify_token", {})
      .then(res => {
        if (res.data.success) {
          this.$store.dispatch("user", res.data.data);
          this.$store.dispatch("token", getCookie("token"));
        }
        this.loading = false;
      })
      .catch(() => {
        this.$store.dispatch("user", []);
        this.$store.dispatch("token", null);
        this.loading = false;
      });
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@font-face {
  font-family: "Mogul-Avante";
  src: local("Manrope"),
    url("./assets/fonts/Mogul_Avante.woff2") format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url("./assets/fonts/Mogul_Avante.woff") format("woff"),
    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      url(./assets/fonts/Mogul-Avante.ttf) format("truetype");
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Mogul-Avante";
}
*::-webkit-scrollbar {
  display: none !important;
}
* {
  font-family: "Mogul-Avante";
}
:root {
  --background-color: #bbdefb;
  --blue-50: #e3f2fd;
  --blue-100: #bbdefb;
  --blue-A700: #2962ff;
  --green-50: #e8f5e9;
  --green-100: #c8e6c9;
  --green-A700: #00c853;
  --purple-50: #f3e5f5;
  --purple-100: #e1bee7;
  --purple-A700: #aa00ff;
  --orange-50: #fff3e0;
  --orange-100: #ffe0b2;
  --orange-A700: #ff6d00;
  --orange-700: #f57c00;
  --grey-900: #212121;
  --white: #ffffff;
  --round-button-active-color: #212121;
  --translate-main-slider: 100%;
  --main-slider-color: #e3f2fd;
  --translate-filters-slider: 0;
  --filters-container-height: 3.8rem;
  --filters-wrapper-opacity: 1;
}

html {
  font-size: 62.5%;
}

html,
body {
  height: 100%;
  font-family: "Mogul-Avante";
}

body {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;*/
  transition: background-color 0.4s ease-in-out;
  /* background-color: var(--background-color); */
  background-color: #f9f9f9;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.user_card {
  background-color: #fff;
  padding: 25px;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 1px rgba(140, 140, 140, 0.15);
  margin-bottom: 10px;
}
.card-form__inner {
  background: #fff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  padding: 20px;
}
.card-input {
  margin-bottom: 20px;
}
.card-input__label {
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #1a3b5d;
  width: 100%;
  display: block;
  user-select: none;
}
.card-input__input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  padding: 5px 15px;
  background: none;
  color: #1a3b5d;
}
.card-input__input:hover,
.card-input__input:focus {
  border-color: #3d9cff;
}
.card-input__input:focus {
  box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
}
.button_row {
  padding: 35px;
}
.card-form__button {
  width: 100%;
  height: 55px;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.user_button_0 {
  height: 55px;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.user_button_1 {
  width: 100%;
  height: 33px;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 500;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .card-form__button {
    font-size: 10px;
  }
}
.card-form__row {
  display: flex;
  align-items: flex-start;
}

.card-form__col_1 {
  flex: auto;
  margin-right: 10px;
}
.card-form__col_2 {
  flex: auto;
  margin-left: 10px;
}
.pass_errors {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
}
.field-icon {
  float: right;
  margin-left: -35px;
  margin-top: -35px;
  margin-right: 10px;
  position: relative;
  z-index: 2;
}
</style>
