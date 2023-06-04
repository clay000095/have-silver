<template>
  <div>
    <div class="video-wrapper">
      <!-- Display the result video -->
      <video :src="resultUrl" controls></video>
    </div>
    <!-- Download button for the video -->
    <button @click="downloadVideo">Download Video</button>
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
      const options = {
        method: "GET",
        url: `https://api.d-id.com/talks/${props.talkId}`,
        headers: {
          accept: "application/json",
          authorization:
            "Basic YmFybmVzMTg2MTM1QGdtYWlsLmNvbQ:xtLew1BjFCLOg5hVO6khd",
        },
      };

      axios
        .request(options)
        .then((response) => {
          resultUrl.value = response.data.result_url;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const downloadVideo = () => {
      // Create a link element
      const link = document.createElement("a");
      link.href = resultUrl.value;
      link.download = "video.mp4";

      // Simulate click event to trigger the download
      link.click();
    };

    onMounted(fetchTalk);

    return {
      resultUrl,
      downloadVideo,
    };
  },
};
</script>

<style>
.video-wrapper {
  position: relative;
  z-index: 9999;
}
</style>
