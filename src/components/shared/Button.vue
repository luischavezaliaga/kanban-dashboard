<template>
  <button type="button" class="btn" :class="color">
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: () => 'btn-primary'
    },
  },
});
</script>

<style lang="pcss" scoped>
.btn {
  @apply inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
}

.btn-primary {
  @apply text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500
}

.btn-secondary {
  @apply text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500
}

.btn-error {
  @apply text-white bg-red-600 hover:bg-red-700 focus:ring-red-500
}
</style>
