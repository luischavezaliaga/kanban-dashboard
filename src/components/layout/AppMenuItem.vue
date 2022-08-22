<template>
  <a
    class="flex items-center text-slate-600 px-4 py-3 rounded-lg focus:ring-blue-700 hover:text-blue-700 hover:bg-blue-100 cursor-pointer"
  >
    <component :is="icon" class="h-4 w-4 mr-2" />
    <slot></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: String,
    icon: Function,
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
