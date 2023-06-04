<template>
  <div>
    <!-- Display the result video -->
    <video :src="resultUrl" controls></video>
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
            "Basic Y2xpY2sxNzY0ODNAZ21haWwuY29t:j2UZILw9dfIuFz3IAE5rk",
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
