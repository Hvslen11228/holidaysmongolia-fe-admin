import axios from "axios";

function upload(formData, id) {
  const url = `/media/${id}/all`;
  return (
    axios
      .post(url, formData)
      // get data
      .then((x) => x.data.urls)
  );
}

export { upload };
