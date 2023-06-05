<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="warning"
                title="年長者"
                description="有多少年長者住在一個里裡呢"
                :count="1500"
                suffix="+"
                :duration="2500"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="warning"
                title="全台年長者"
                description="50歲以上好多人喔"
                :count="9141897"
                suffix="+"
                :duration="2500"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="warning"
                title="年長科技仔"
                description="有行動裝置的科技銀髮族們"
                :count="8410545"
                suffix="+"
                :duration="2500"
                divider="vertical"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
