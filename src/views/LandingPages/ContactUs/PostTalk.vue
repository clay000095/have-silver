<template>
  <div>
    <!-- Input field for the user message -->
    <div class="mb-3">
      <label for="userMessage" class="form-label">User Message</label>
      <input
        class="form-control"
        type="text"
        id="userMessage"
        v-model="userMessage"
      />
    </div>

    <!-- Button to trigger video rendering -->
    <button class="btn btn-primary" @click="createTalk">Render Video</button>
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
            "Basic Y2xpY2sxNzY0ODNAZ21haWwuY29t:j2UZILw9dfIuFz3IAE5rk",
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
