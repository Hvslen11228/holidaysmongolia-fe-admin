<template>
  <div class="row_con">
    <div v-if="!loading">
      <div v-for="(data, index) of logs" :key="index" class="item_wallet">
        <div class="row justify-content-between">
          <div class="col-8">
            <h4>{{ data.dans }}</h4>
            <h5>
              <span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V13"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 2H15"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ data.date_l }}
              </span>
            </h5>
          </div>
          <div class="col-4 text-right">
            <h3 v-if="data.money > 0" class="text-success">+{{ data.money }}</h3>
            <h3 v-else class="text-danger">{{ data.money }}</h3>
            <span>{{ data.id }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
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
  created: function() {
    axios.get("wallet/log").then(res => {
      this.logs = res.data.data;
      this.loading = false;
    });
  }
};
</script>
<style scoped>
.row_con {
  margin-top: 50px;
  margin-left: 5%;
  margin-right: 10%;
  width: 90%;
}
.item_wallet {
  width: 100%;
  background-color: #fff;
  padding: 5px 10px 5px 10px;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 1px rgba(140, 140, 140, 0.15);
  margin-bottom: 10px;
}
</style>
