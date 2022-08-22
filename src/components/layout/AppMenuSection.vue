<template>
  <div class="flex flex-col">
    <h3 class="text-xs text-slate-500 uppercase mb-3">
      {{ title }}
    </h3>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
});
</script>
