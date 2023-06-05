<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1527525591638-6fa607ae2f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
              icon="touch_app"
              title="主要功能"
              description="旁邊是我們的主要功能們，想的到想不到的都有"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1569181665281-bc67a5e74dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              title="隱藏功能"
              description="想知道嗎...有酷東西喔"
              :action="[
                {
                  route: 'https://www.cwb.gov.tw/V8/C/W/County/index.html',
                  label: '付費解鎖＄',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="安全狀態紐"
              description="供使用者迅速發送安全狀態通知。"
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="語音線上助手"
              description="對談不孤單，線上產品不再冷冰冰。"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="AI推播交友"
              description="依使用者區域資訊推播臨近使用者，促進社區交流。"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="興趣及社區社群"
              description="依使用者興趣喜好推薦加入興趣社群；同時每個社區都有社區官方社群促進好康資訊交流。"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
