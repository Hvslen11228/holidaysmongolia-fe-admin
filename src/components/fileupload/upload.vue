<template>
  <div>
    <div>
      <!--UPLOAD-->
      <form
        enctype="multipart/form-data"
        novalidate
        v-if="isInitial || isSaving"
      >
        <div class="dropbox">
          <input
            type="file"
            multiple
            :name="uploadFieldName"
            :disabled="isSaving"
            @change="
              filesChange($event.target.name, $event.target.files);
              fileCount = $event.target.files.length;
            "
            accept="image/*"
            class="input-file"
          />
          <p v-if="isInitial">
            Зураг оруулахын тулд файл(ууд)аа энд чирнэ үү
            <br />эсвэл товшино уу
          </p>
          <p v-if="isSaving">Байршуулж байна {{ fileCount }} файлууд....</p>
        </div>
      </form>
      <!--SUCCESS-->
      <div v-if="isSuccess">
        <h2>{{ uploadedFiles.length }} файлыг амжилттай байршууллаа.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Дахин байршуулах</a>
        </p>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Байршуулж чадсангүй.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Дахин оролд</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
// swap as you need
import { upload } from "./file-upload.service"; // real service
import { wait } from "./utils";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
export default {
  name: "app",
  props: {
    chapter_id: String,
    data: Array,
  },
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "photos",
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      upload(formData, this.chapter_id)
        .then(wait(1500)) // DEV ONLY: wait for 1.5s
        .then((x) => {
          console.log(x);
          this.uploadedFiles = [].concat(x);
          this.uploadedFiles.forEach((el) => {
            this.data.push({
              id: null,
              galleryImgs_id: this.chapter_id,
              galleryImgs_urls: el,
            });
          });
          this.currentStatus = STATUS_INITIAL;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      if (!fileList.length) return;
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });
      // save it
      this.save(formData);
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style >
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: #0f1c2f;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
