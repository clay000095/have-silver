<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "@/examples/Header.vue";

//material components
// import MaterialInput from "@/components/MaterialInput.vue";
// import MaterialTextArea from "@/components/MaterialTextArea.vue";
// import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

// Invoke the setMaterialInput function on mounted
onMounted(() => {
  setMaterialInput();
});
</script>

<script>
import PostTalk from "./PostTalk.vue";
import GetTalk from "./GetTalk.vue";

export default {
  components: {
    PostTalk,
    GetTalk,
  },
  data() {
    return {
      talkId: "",
    };
  },
  methods: {
    setTalkId(id) {
      this.talkId = id;
    },
  },
};
</script>

<template>
  <DefaultNavbar transparent />
  <Header>
    <video
      autoplay
      loop
      muted
      class="video-bg"
      style="position: absolute; width: 100%; height: 100%"
    >
      <source src="../../../assets/video/virtualbg2.mp4" type="video/mp4" />
    </video>
    <div
      class="page-header align-items-start min-vh-100"
      style="position: relative; display: flex; justify-content: center"
    >
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-warning shadow-warning border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    AI 專屬助理
                  </h4>
                </div>
              </div>
              <div class="card-body">
                <!-- Import and use the PostTalk component -->
                <PostTalk @talkCreated="setTalkId" />

                <!-- Import and use the GetTalk component -->
                <GetTalk v-if="talkId" :talkId="talkId" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}, made by Havesliver
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Header>
</template>

<style scoped>
.video-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
