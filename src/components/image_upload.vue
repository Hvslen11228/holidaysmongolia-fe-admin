<template>
  <div>
    <form action="" enctype="multipart/form-data">
      <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Файл сонгох эсвэл энд буулгана уу..."
        drop-placeholder="Файлыг энд буулгана уу..."
        @change="onSubmit"
      ></b-form-file>
      <div class="mt-3">Сонгосон файл: {{ file1 ? file1.name : "" }}</div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    form: Array,
  },
  data() {
    return {
      file1: null,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      await axios
        .post("/media", formData)
        .then(async (res) => {
          console.log(res);
          this.form.image = res.data.url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.name_en = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
