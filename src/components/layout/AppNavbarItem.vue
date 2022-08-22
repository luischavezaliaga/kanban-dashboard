<template>
  <a
    :class="[
      active ? 'text-blue-600' : 'text-slate-600',
      'flex flex-col justify-between items-center text-sm',
    ]"
    :href="to"
  >
    <div
      :class="[
        active ? 'bg-blue-100 border-blue-600' : 'bg-slate-200',
        'rounded-2xl border-2 w-fit h-fit p-3 mb-2',
      ]"
    >
      <component :is="icon" class="h-7 w-7"></component>
    </div>
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
