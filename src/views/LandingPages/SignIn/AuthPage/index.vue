<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
// import MaterialInput from "@/components/MaterialInput.vue";
// import MaterialSwitch from "@/components/MaterialSwitch.vue";
// import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1536408157291-aef6d736e2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1268&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    登入
                  </h4>
                </div>
              </div>
              <div class="card-body">
                <form @submit.prevent="login" role="form" class="text-start">
                  <div class="d-flex justify-content-center">
                    <div class="title"></div>
                  </div>
                  <div class="form-group d-flex justify-content-center">
                    <input
                      class="input-group-text"
                      placeholder="Username"
                      type="text"
                      v-model="username"
                    />
                  </div>
                  <br />
                  <div class="form-group d-flex justify-content-center">
                    <input
                      class="input-group-text"
                      placeholder="Password"
                      type="password"
                      v-model="password"
                    />
                  </div>
                  <br />
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-success" type="submit">確定</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    還沒有帳號嗎？
                    <a
                      href="#"
                      class="text-success text-gradient font-weight-bold"
                      >註冊</a
                    >
                  </p>
                </form>
                <!-- <form @submit.prevent="login" role="form" class="text-start">
                  <div class="title"></div>
                  <input
                    placeholder="Username"
                    type="text"
                    v-model="username"
                  />
                  <br />
                  <input
                    placeholder="Password"
                    type="password"
                    v-model="password"
                  />
                  <br />
                  <button class="btn btn-success" type="submit">Login</button>
                  <p class="mt-4 text-sm text-center">
                    還沒有帳號嗎？
                    <a
                      href="#"
                      class="text-success text-gradient font-weight-bold"
                      >註冊</a
                    >
                  </p>
                </form> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}, made by Havesliver
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>

<script>
import { loginRest, signupRest } from "./api";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
  },
  methods: {
    login() {
      loginRest(this.username, this.password)
        .then((response) =>
          this.$emit("onAuth", { ...response.data, secret: this.password })
        )
        .catch((error) => console.log("Login error", error));
    },
    signup() {
      signupRest(
        this.username,
        this.password,
        this.email,
        this.first_name,
        this.last_name
      )
        .then((response) =>
          this.$emit("onAuth", { ...response.data, secret: this.password })
        )
        .catch((error) => console.log("Sign up error", error));
    },
  },
};
</script>
