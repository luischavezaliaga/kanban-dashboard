<template>
  <div class="flex flex-col w-full md:w-1/4 lg:w-1/5">
    <div class="flex items-center justify-between">
      <h2 class="text-xs text-slate-600 uppercase">
        {{ bucket.name }}
      </h2>
      <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs">
        {{ count }}
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Bucket } from "../../models/board.models";

export default defineComponent({
  props: {
    bucket: {
      type: Object as PropType<Bucket>,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    }
  },
});
</script>
