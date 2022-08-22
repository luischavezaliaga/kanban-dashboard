<template>
  <div class="flex flex-col flex-grow space-y-5 my-6">
    <slot v-for="(task, index) in tasks" :key="index" :task="task"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Task } from "../../models/board.models";

export default defineComponent({
  inheritAttrs: true,
  props: {
    tasks: {
      type: Object as PropType<Task[]>,
      required: true,
    },
  },
});
</script>
