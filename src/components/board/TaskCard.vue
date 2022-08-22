<template>
  <div
    class="flex flex-col justify-between rounded-md border border-slate-200 h-32 px-4 py-3"
  >
    <h4 class="text-xs text-slate-500 uppercase">
      {{ task.title }}
    </h4>
    <h3 class="text-sm font-semibold">{{ task.description }}</h3>

    <div class="flex text-sm items-center">
      <img
        class="rounded-full w-9 h-9 mr-2"
        :src="task.user?.profileImageUrl"
        alt="Profile Pic"
      />
      <span class="text-slate-400 text-xs">{{ task.points }} pt</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Task } from "../../models/board.models";

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },
});
</script>
