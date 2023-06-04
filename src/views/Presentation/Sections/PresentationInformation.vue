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
              description="旁邊是我們的主要功能們，可以看看有什麼喜歡的"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1569181665281-bc67a5e74dc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              title="要什麼有什麼"
              description="多種願望一次滿足"
              :action="[
                {
                  route: 'https://www.cwb.gov.tw/V8/C/W/County/index.html',
                  label: '會不會下雨啊今天',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="安全狀態鈕一鍵發送"
              description="透過【有銀某】平台提供的安全狀態鈕，可讓使用者迅速發送安全訊息"
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="年長者交友社群建置"
              description="根據年長者的興趣和喜好提供不同社團，以促進他們之間的交流和社交活動。"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="AI自動推播交友"
              description="透過這項功能，我們能根據使用者註冊時填寫的區域資訊，以及他們所在地區的年長者們"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="各社區群組 - 厝邊消息不漏接"
              description="此功能會在用戶註冊時一併加入，旨在促進使用者參與社區活動，和增進社區互動的功能。"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
