<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import kevin from "@/assets/img/kevin.jpg";
import yolanda from "@/assets/img/yolanda1.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">執行團隊</h3>
          <p class="text-white opacity-8 mb-0">共同打造有銀某平台</p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="kevin"
            :profile="{ name: '趙威凱', link: 'javascript:;' }"
            :position="{ label: '小弟', color: 'warning' }"
            description="創造有銀某有你有我"
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="yolanda"
            :profile="{ name: '蔡苡彤', link: 'javascript:;' }"
            :position="{ label: '老大', color: 'warning' }"
            description="終於把有銀某搞出來了"
          />
        </div>
      </div>
      <!-- <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="kevin"
            :profile="{ name: 'Ivana Flow', link: 'javascript:;' }"
            :position="{ label: 'Athlete', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="kevin"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div> -->
    </div>
  </section>
</template>
