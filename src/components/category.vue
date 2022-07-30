<template>
  <b-card title="Ангилалууд" sub-title="">
    <b-card-text>
      <b-list-group v-if="!loading">
        <b-list-group-item v-for="(data, index) of logs" :key="index" button
          ><router-link :to="`categories/${data.id}`"
            >{{ data.name }} / {{ data.name_en }}</router-link
          ></b-list-group-item
        >
      </b-list-group>
      <div v-else class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </b-card-text>
  </b-card>
</template>
<script>
import axios from "axios";
export default {
  name: "index",
  components: {},
  data() {
    return { keyword: "", logs: {}, loading: true };
  },
  methods: {},
  computed: {},
  created: function () {
    axios.get("categories").then((res) => {
      this.logs = res.data.data;
      this.loading = false;
    });
  },
};
</script>
<style scoped>
</style>
