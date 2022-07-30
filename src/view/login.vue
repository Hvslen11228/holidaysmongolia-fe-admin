<template>
  <div class="mobile">
    <form @submit="onSubmit" class="card-form__inner">
      <h1 class="center">Нэвтрэх</h1>
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Цахим хаяг</label>
        <input
          type="email"
          class="form-control card-input__input"
          data-ref="cardNumber"
          v-model="form.email"
        />
      </div>
      <div class="card-input">
        <label for="cardName" class="card-input__label">
          Нууц үг
          <router-link to="/forgot">мартсан</router-link>
        </label>
        <input
          :type="pass_show ? 'text' : 'password'"
          class="form-control card-input__input"
          v-model="form.password"
        />
        <span class="field-icon" @click="show_pass">
          <img v-if="!pass_show" src="https://www.svgrepo.com/show/309610/eye-show.svg" alt />
          <img v-else src="https://www.svgrepo.com/show/309609/eye-hide.svg" alt />
        </span>
        <div class="pass_errors" v-if="form.password" id="cheke_console" style>
          <div v-if="form.password.length >= 5" style="color: green">
            <img src="https://www.svgrepo.com/show/157817/success.svg" alt width="10" />
            <span>Урт нь 5-аас их.</span>
          </div>
          <div v-else style="color: tomato">
            <img src="https://www.svgrepo.com/show/13658/error.svg" alt width="10" />
            <span>Урт нь 5-аас их.</span>
          </div>
          <div v-if="form.password.length <= 15" style="color: green">
            <img src="https://www.svgrepo.com/show/157817/success.svg" alt width="10" />
            <span>Урт нь 15-аас бага.</span>
          </div>
          <div v-else style="color: tomato">
            <img src="https://www.svgrepo.com/show/13658/error.svg" alt width="10" />
            <span>Урт нь 15-аас бага.</span>
          </div>
          <div v-if="form.password.match(/[0-9]/i)" style="color: green">
            <img src="https://www.svgrepo.com/show/157817/success.svg" alt width="10" />
            <span>Тоон тэмдэгт агуулдаг.</span>
          </div>
          <div v-else style="color: tomato">
            <img src="https://www.svgrepo.com/show/13658/error.svg" alt width="10" />
            <span>Тоон тэмдэгт агуулдаг.</span>
          </div>
          <div v-if="form.password.match(/[^A-Za-z0-9-' ']/i)" style="color: green">
            <img src="https://www.svgrepo.com/show/157817/success.svg" alt width="10" />
            <span>Тусгай тэмдэгт агуулдаг.</span>
          </div>
          <div v-else style="color: tomato">
            <img src="https://www.svgrepo.com/show/13658/error.svg" alt width="10" />
            <span>Тусгай тэмдэгт агуулдаг.</span>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fesports.mn.platform&width=108&layout=button_count&action=like&size=large&share=false&height=21&appId=521290251871606"
        width="108"
        height="35"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <button v-if="onSubmit_value" type="submit" class="btn card-form__button" disabled>
        Түр хүлээнэ үү...
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </button>
      <button v-else type="submit" class="btn card-form__button">Нэвтрэх</button>
      <hr />
      <div class="card-form__row">
        <div class="card-form__col_1">
          <div class="card-form__group">
            <button
              type="button"
              onclick="location.href='https://api.togtokh.dev/e-sports/users/auth/facebook/';"
              class="card-form__button"
              style="background-color: #8950fc"
            >
              <img src="../assets/svg/facebook.svg" alt width="30" />
              Facebook ээр үргэлжилүүлэх
            </button>
          </div>
        </div>
        <div class="card-form__col_2">
          <router-link
            class="card-form__button"
            to="/request"
            tag="button"
            style="background-color: #67d6c5"
          >Бүртгүүлэх</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { setCookie } from "../functions/cookie";
import axios from "axios";
function checkPass(password) {
  if (!password) {
    return false;
  }
  let s1 = null;
  let s2 = null;
  let s3 = null;
  let s4 = null;
  if (password >= 5) {
    s1 = true;
  } else {
    s1 = false;
  }
  if (password <= 15) {
    s2 = true;
  } else {
    s2 = false;
  }

  if (password.match(/[0-9]/i)) {
    s3 = true;
  } else {
    s3 = false;
  }

  if (password.match(/[^A-Za-z0-9-' ']/i)) {
    s4 = true;
  } else {
    s4 = false;
  }
  if ((s1, s2, s3, s4)) {
    return true;
  } else {
    false;
  }
}
export default {
  name: "login",
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      onSubmit_value: false,
      pass_show: false
    };
  },
  methods: {
    async onSubmit(event) {
      this.onSubmit_value = true;
      event.preventDefault();
      if (checkPass(this.form.password)) {
        await axios
          .post("users/login", {
            email: this.form.email,
            password: this.form.password
          })
          .then(async res => {
            this.onSubmit_value = false;
            if (res.data.success) {
              await setCookie("token", res.data.token, 3);
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.token;
              await this.$store.dispatch("token", res.data.token);
              await this.$store.dispatch("user", res.data.data);
              Swal.fire({
                title: "Амжилттай",
                text: res.data.message,
                icon: "success",
                confirmButtonText: "Ойлголоо"
              }).then(() => {
                this.$router.push("/");
              });
            } else {
              Swal.fire({
                title: "Алдаа",
                text: res.data.message,
                icon: "error",
                confirmButtonText: "Ойлголоо"
              });
            }
          })
          .catch(err => {
            this.onSubmit_value = false;
            alert(err.data.message);
          });
      } else {
        this.onSubmit_value = false;
        Swal.fire({
          title: "Алдаа",
          text: "Нууц үг шаардлага хангахгүй",
          icon: "error",
          confirmButtonText: "Ойлголоо"
        });
      }
    },
    show_pass() {
      if (this.pass_show == true) {
        this.pass_show = false;
      } else {
        this.pass_show = true;
      }
    }
  },
  mounted: function() {},
  async created() {
    const token = this.$store.getters.token;
    if (token) {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
</style>
