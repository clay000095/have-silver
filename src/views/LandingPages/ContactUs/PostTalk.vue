<template>
  <div>
    <!-- Input field for the user message -->
    <div class="mb-3">
      <label for="userMessage" class="form-label d-flex justify-content-center"
        >想說的話</label
      >
      <input
        class="form-group d-flex justify-content-center custom-input"
        type="text"
        id="userMessage"
        v-model="userMessage"
      />
    </div>

    <!-- Button to trigger video rendering -->
    <div class="d-flex justify-content-center">
      <button class="btn btn-danger custom-button" @click="createTalk">
        想好來按我吧
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup(_, context) {
    const userMessage = ref("");

    const createTalk = () => {
      const options = {
        method: "POST",
        url: "https://api.d-id.com/talks",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Basic Y2xheTAwMDA5NUBnbWFpbC5jb20:4yWtUQuGpXwh1MF5cGF2z",
        },
        data: {
          script: {
            type: "text",
            provider: { type: "microsoft", voice_id: "zh-TW-YunJheNeural" },
            ssml: false,
            input: userMessage.value,
          },
          source_url:
            "https://create-images-results.d-id.com/google-oauth2%7C117380509640710001512/upl_e7dA7E5I4A6lMtZ_Lg8ip/image.jpeg",
          driver_url: "bank://lively",
          webhook: "https://host.domain.tld/to/webhook",
        },
      };

      axios
        .request(options)
        .then((response) => {
          const talkId = response.data.id;
          // Emit the talkCreated event with the talkId
          context.emit("talkCreated", talkId);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      userMessage,
      createTalk,
    };
  },
};
</script>

<style>
.custom-input {
  display: block;
  margin: 0 auto;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-bottom: 10px;
}

.custom-button {
  background-color: #c9290d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
