<template>
  <div class="container p-5">
    <b-row>
      <b-col
        ><b-card title="Ангилал нэмэх" sub-title="">
          <b-card-text>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <ImageUpload :form="form" />

              <b-form-group
                id="input-group-1"
                label="Ангилалын Нэр:"
                label-for="input-1"
                description="Монгол хэлийг сонгоцон байхд харагдах нэр"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.title"
                  type="text"
                  placeholder="Нэр"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Ангилалын Нэр:"
                label-for="input-1"
                description="Гадаад хэлийг сонгоцон байхд харагдах нэр"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.title_en"
                  type="text"
                  placeholder="Name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Нэмэх</b-button>
            </b-form>
          </b-card-text>
        </b-card></b-col
      >
      <b-col><Category /></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import ImageUpload from "../components/image_upload.vue";
import Category from "../components/category.vue";
export default {
  data() {
    return {
      form: {
        title: "",
        title_en: "",
        image: null,
      },
      show: true,
    };
  },
  components: {
    ImageUpload,
    Category,
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await axios
        .post("/categories", this.form)
        .then(async (res) => {
          console.log(res);
          if (res.data.success) {
            this.$router.push("/categories/" + res.data.data);
            alert("Амжилттай");
            this.onReset();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onReset() {
      this.form.title = "";
      this.form.title_en = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
