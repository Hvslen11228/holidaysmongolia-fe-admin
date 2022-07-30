<template>
  <div class="mobile">
    <!-- 1 -->
    <form v-if="form.mail_sent == 1" @submit="onSubmit" class="card-form__inner">
      <h1 class="center">Нууц үг сэргээх</h1>
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Цахим хаяг</label>
        <input
          type="email"
          class="form-control card-input__input"
          data-ref="cardNumber"
          v-model="form.email"
        />
      </div>
      <button
        v-if="onSubmit_value"
        type="submit"
        class="btn card-form__button"
        style="background-color: #67d6c5"
        disabled
      >
        Түр хүлээнэ үү...
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </button>
      <button
        v-else
        type="submit"
        style="background-color: #67d6c5"
        class="btn card-form__button"
      >Батаглгаажуулах mail авах</button>
      <hr />
      <div class="card-form__row">
        <div class="card-form__col_1">
          <div class="card-form__group">
            <button
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
          <router-link class="card-form__button" to="/login" tag="button">Нэвтрэх</router-link>
        </div>
      </div>
    </form>
    <!-- 2 -->
    <form v-if="form.mail_sent == 2" @submit="onSubmit2" class="card-form__inner">
      <h1 class="center">Нууц үг сэргээх</h1>
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Цахим хаяг</label>
        <input
          type="email"
          class="form-control card-input__input"
          v-model="form.email"
          required
          disabled
        />
      </div>
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Батаглгаажуулах код</label>
        <input v-model="form.code" type="number" class="form-control card-input__input" required />
      </div>
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Нууц үг</label>
        <input
          v-model="form.password"
          class="form-control card-input__input"
          type="password"
          required
        />
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
      <div class="card-input">
        <label for="cardNumber" class="card-input__label">Нууц үг давтаж</label>
        <input
          v-model="form.password_2"
          class="form-control card-input__input"
          type="password"
          required
        />
      </div>
      <button
        v-if="onSubmit_value"
        type="submit"
        class="btn card-form__button"
        style="background-color: #67d6c5"
        disabled
      >
        Түр хүлээнэ үү...
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </button>
      <button
        v-else-if="form.password_2 == form.password && form.password_2"
        type="submit"
        style="background-color: #67d6c5"
        class="btn card-form__button"
      >Батаглгаажуулах mail авах</button>
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
  name: "request",
  data() {
    return {
      form: {
        email: "",
        mail_sent: 1,
        code: "",
        password: "",
        password_2: "",
        pass_token: ""
      },
      onSubmit_value: false
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.onSubmit_value = true;
      const data = {
        email: this.form.email
      };

      axios
        .post("users/forgot_password", data)
        .then(res => {
          this.onSubmit_value = false;
          if (res.data.success) {
            this.form.pass_token = res.data.token_pass;
            setCookie("token_pass", res.data.token_pass, 0.01);

            this.form.mail_sent = 2;
            Swal.fire({
              title: "Амжилттай",
              text: res.data.message,
              icon: "success",
              confirmButtonText: "Ойлголоо"
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
          Swal.fire({
            title: "Алдаа",
            text: err.data.message,
            icon: "error",
            confirmButtonText: "Ойлголоо"
          });
        });
    },
    onSubmit2(event) {
      event.preventDefault();
      this.onSubmit_value = true;
      const data = {
        password: this.form.password,
        code: parseInt(this.form.code),
        pass_token: this.form.pass_token
      };
      if (checkPass(this.form.password)) {
        axios
          .post("/users/forgot_password_ver", data)
          .then(res => {
            this.onSubmit_value = false;
            if (res.data.success) {
              setCookie("token_pass", null, 0.01);
              this.form.mail_sent = 1;
              Swal.fire({
                title: "Амжилттай",
                text: res.data.message,
                icon: "success",
                confirmButtonText: "Ойлголоо"
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
    }
  },
  async created() {
    const token = this.$store.getters.token;
    if (token) {
      this.$router.push("/");
    }
  }
};
</script>
