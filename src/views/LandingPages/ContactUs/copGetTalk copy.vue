<template>
  <div>
    <!-- Display the result video -->
    <video :src="resultUrl" controls></video>
    <a :href="resultUrl" download>下載影片</a>
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

    onMounted(fetchTalk);

    return {
      resultUrl,
    };
  },
};
</script>
