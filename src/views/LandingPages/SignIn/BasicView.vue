<script setup>
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import AuthPage from "./AuthPage/index.vue";
import ChatsPage from "./ChatsPage/index.vue";
</script>

<template>
  <DefaultNavbar transparent />
  <div>
    <AuthPage v-if="!user" @onAuth="handleAuth" />
    <ChatsPage
      v-else
      v-bind:username="user.username"
      v-bind:secret="user.secret"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: undefined,
    };
  },
  methods: {
    handleAuth(user) {
      this.user = user;
    },
  },
};
</script>
