<script>
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { applyReactInVue } from "veaury";
//example components
// import NavbarDefault from "C:/Users/Kevin/Desktop/programs/vue_test/silver/src/examples/navbars/NavbarDefault.vue";

export default {
  data() {
    return {
      projectId: import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
    };
  },
  components: {
    PrettyChatWindow: applyReactInVue(PrettyChatWindow),
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <!-- <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div> -->
  <div style="height: 100vh">
    <PrettyChatWindow
      :projectId="projectId"
      :username="username"
      :secret="secret"
    />
  </div>
</template>

<style>
.ce-new-chat-button {
  width: 32px;
  position: relative;
  bottom: 22px;
}
</style>
