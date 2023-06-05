<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import USDailyStock from "./Sections/USDailyStock.vue";
import TWDailyStock from "./Sections/TWDailyStock.vue";

// sections
// import Footer from "./Sections/AuthorFooter.vue";
// import Profile from "./Sections/AuthorProfile.vue";
// import Posts from "./Sections/AuthorPosts.vue";
// import Contact from "./Sections/AuthorContact.vue";

// image
import image from "@/assets/img/stock.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <TWDailyStock />
    <USDailyStock />
    <Profile />
    <Posts />
  </div>
  <Contact />
  <Footer />
</template>
