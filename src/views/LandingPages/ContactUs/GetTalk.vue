<template>
  <div>
    <div class="video-wrapper">
      <!-- Display the result video -->
      <video :src="resultUrl" controls></video>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  props: {
    talkId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const resultUrl = ref("");

    // Fetch the talk data and retrieve the result URL
    const fetchTalk = () => {
      const pause = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 4000);
      });

      pause.then(() => {
        const options = {
          method: "GET",
          url: `https://api.d-id.com/talks/${props.talkId}`,
          headers: {
            accept: "application/json",
            authorization:
              "Basic Y2xheTAwMDA5NUBnbWFpbC5jb20:4yWtUQuGpXwh1MF5cGF2z",
          },
        };

        axios
          .request(options)
          .then((response) => {
            console.log(response.data);
            resultUrl.value = response.data.result_url;
            console.log(resultUrl.value);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    };
    onMounted(fetchTalk);

    return {
      resultUrl,
      // downloadVideo,
    };
  },
};
</script>

<style>
.video-wrapper {
  position: absolute;
  width: 350px;
  height: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>
