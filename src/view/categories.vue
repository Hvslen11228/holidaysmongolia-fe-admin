<template>
  <div class="container p-5">
    <b-row>
      <b-col
        ><b-card :title="data.name + `-д аялал нэмэх `" sub-title="">
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
                  v-model="form.name"
                  type="text"
                  placeholder="Нэр"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Ангилалын Нэр:"
                label-for="input-2"
                description="Гадаад хэлийг сонгоцон байхд харагдах нэр"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name_en"
                  type="text"
                  placeholder="Name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Өдөр :"
                label-for="input-3"
              >
                <b-form-datepicker
                  id="input-3"
                  v-model="form.date"
                  type="Date"
                  placeholder="Өдөрийн Мэдээлэл"
                  required
                ></b-form-datepicker>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Байрлал :"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="form.address"
                  type="text"
                  placeholder="address"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Үнэ :"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="form.price"
                  type="text"
                  placeholder="Нэг хүний үнэ"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Хүлээн авах хүн :"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="form.maxGuests"
                  type="number"
                  placeholder="Хүний тоо"
                  required
                ></b-form-input>
              </b-form-group>
              <div class="row">
                <div class="col">
                  <b-form-group
                    id="input-group-7"
                    label="LAT :"
                    label-for="input-7"
                  >
                    <b-form-input
                      id="input-7"
                      v-model="form.map.lat"
                      type="text"
                      placeholder="lat"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col">
                  <b-form-group
                    id="input-group-8"
                    label="LAG :"
                    label-for="input-8"
                  >
                    <b-form-input
                      id="input-8"
                      v-model="form.map.lng"
                      type="text"
                      placeholder="lag"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <b-form-group
                    id="input-group-9"
                    label="Насанд хүрэгчид :"
                    label-for="input-9"
                  >
                    <b-form-input
                      id="input-9"
                      v-model="form.amount_0"
                      type="number"
                      placeholder=""
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col">
                  <b-form-group
                    id="input-group-10"
                    label="Хүүхдүүд :"
                    label-for="input-10"
                  >
                    <b-form-input
                      id="input-10"
                      v-model="form.amount_1"
                      type="number"
                      placeholder=""
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col">
                  <b-form-group
                    id="input-group-11"
                    label="Нярай хүүхэд :"
                    label-for="input-11"
                  >
                    <b-form-input
                      id="input-11"
                      v-model="form.amount_2"
                      type="number"
                      placeholder=""
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <b-form-group
                id="input-group-12"
                label="Мэдээлэл :"
                label-for="input-12"
              >
                <b-form-textarea
                  id="input-12"
                  v-model="form.about"
                  type="textarea"
                  placeholder="About"
                  required
                ></b-form-textarea>
              </b-form-group>
              <b-button type="submit" variant="primary">Нэмэх</b-button>
            </b-form>
          </b-card-text>
        </b-card></b-col
      >
      <b-col><Tours /></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import ImageUpload from "../components/image_upload_tour.vue";
import Tours from "../components/tours.vue";
export default {
  data() {
    return {
      form: {
        name: "Турк Улсын 3 Хотын Аялал",
        name_en: "turk",
        cat_id: this.$route.params.id,
        authorId: "eGYlI0Mz9",
        date: null,
        listingCategoryId: this.$route.params.id,
        featuredImage: null,
        commentCount: null,
        viewCount: null,
        like: null,
        address: null,
        reviewStart: null,
        reviewCount: null,
        price: "$26",
        maxGuests: null,
        bedrooms: null,
        bathrooms: null,
        saleOff: null,
        isAds: null,
        tourcol: null,
        map: {
          lat: 55.2094559,
          lng: 61.5594641,
        },
        amount_0: 100,
        amount_1: 50,
        amount_2: 10,
        about: "medelelel",
      },
      show: true,
      data: null,
    };
  },
  components: {
    ImageUpload,
    Tours,
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await axios
        .post("/tour_", this.form)
        .then(async (res) => {
          console.log(res);
          if (res.data.success) {
            this.$router.push("/tour/" + res.data.data);
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
  created: function () {
    axios.get("categories/" + this.$route.params.id).then((res) => {
      this.data = res.data.data;
      this.loading = false;
    });
  },
};
</script>
