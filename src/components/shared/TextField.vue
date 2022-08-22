<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :value="modelValue || $attrs.value"
        @input="(element) => $emit('update:modelValue', (element.target as HTMLInputElement).value)"
        v-bind="$attrs"
        class="block form-control"
        :class="!hasError ? 'form-control-primary' : 'form-control-error'"
      />
      <div
        v-if="hasError"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <ExclamationCircleIcon
          class="h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>
    <p v-if="hasError" class="mt-2 text-sm text-red-600" id="email-error">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
export default defineComponent({
  components: { ExclamationCircleIcon },
  inheritAttrs: false,
  props: {
    modelValue: [String, Number],
    label: String,
    placeholder: String,
    errorMessage: String,
  },
  computed: {
    hasError(): boolean {
      return !!this.errorMessage;
    },
  },
});
</script>
<style lang="pcss">

.form-control {
  @apply focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 rounded-md px-4 py-2 ring-1 shadow-sm
}
.form-control-primary {
  @apply focus:ring-indigo-500 focus:border-indigo-500  ring-slate-200 
}

.form-control-error {
  @apply  ring-red-400 text-red-700 placeholder-red-300 focus:ring-red-500 focus:border-red-500
}
</style>
