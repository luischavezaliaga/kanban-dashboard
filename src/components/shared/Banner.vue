<template>
  <div v-if="active" class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="hidden md:inline"> 
              <slot></slot>
            </span>
          </p>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"> Learn more </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2" @click="onDismissAlert">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline"
import { ref } from 'vue'

const active = ref(true)

const onDismissAlert = () => active.value = !active.value

</script>