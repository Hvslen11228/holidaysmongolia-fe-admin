<template>
  <div>
    <div v-if="!loading">
      <div v-for="(data, index) of orders" :key="index" class="item_wallet">
        <div class="row justify-content-between item_wallet_">
          <div class="pl-5 col-8">
            <div class="icon_img">
              <img :src="data.logo_1" alt />
              <div style=" margin-left: 5px;">
                {{data.order_name}}
                <br />
                <span style="color:#ff6d00">{{data.name}}</span>
              </div>
            </div>

            <p>
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
                {{ data.order_date }}
              </span>
            </p>
          </div>
          <div class="col-4 text-right align-self-center pr-5">
            <router-link
              tag="button"
              :to="'order/' + data.order_rand_id"
              type="button"
              class="user_button_1"
              style="background-color: #ab2642"
            >Дэлгэрэнгүй</router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="count == 0" class="d-flex justify-content-center">ДАТА АЛГА</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "index",
  components: {},
  data() {
    return { keyword: "", orders: {}, loading: true, count: null };
  },
  methods: {},
  computed: {
    filterOrders() {
      const { service, keyword } = this;

      return service.filter(({ name }) => name.includes(keyword));
    }
  },
  created: function() {
    axios.get("order/0").then(res => {
      this.orders = res.data.data;
      this.count = res.data.count;
      this.loading = false;
    });
  }
};
</script>

