<script setup>
import CountTo from "vue-count-to/src";
</script>
<template>
  <div class="text-center">
    <h1 :class="`text-gradient text-${color ?? 'success'}`">
      <CountTo :start-val="0" :end-val="count" :duration="duration" />{{
        suffix
      }}
    </h1>
    <h5 class="mt-3">{{ title }}</h5>
    <p class="text-sm font-weight-normal">
      {{ description }}
    </p>
  </div>
  <hr :class="`${divider ? divider : ''} dark`" />
</template>
