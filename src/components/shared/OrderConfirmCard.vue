<template>
  <div class="flex flex-col bg-white rounded-xl shadow text-sm">
    <div class="flex-none mb-3">
      <img
        class="w-full rounded-t-xl"
        src="../assets/images/illustration-hero.svg"
        alt="Main Picture"
      />
    </div>
    <div class="flex-auto">
      <div class="flex flex-col space-y-4 text-center px-16 py-8">
        <h1 class="text-2xl font-bold text-slate-800">{{ title }}</h1>
        <p class="text-slate-500 text-sm">
          {{ description }}
        </p>
      </div>
      <div
        class="bg-indigo-50 flex space-x-4 text-xs mx-12 px-5 py-4 items-center rounded-lg"
      >
        <img class="h-10" src="../assets/images/icon-music.svg" alt="Icon" />
        <div class="flex flex-col flex-grow">
          <div class="text-slate-800 font-bold">{{ plan }}</div>
          <div class="text-slate-500">${{ price }}/{{ billingPeriod }}</div>
        </div>

        <a
          class="text-indigo-600 underline cursor-pointer hover:text-indigo-800"
        >
          Change
        </a>
      </div>
      <div class="flex flex-col px-16 py-8 space-y-4">
        <button
          class="bg-indigo-600 text-white px-4 py-3 rounded-lg focus:ring-indigo-700 hover:bg-indigo-700"
        >
          {{ confirmButtonText }}
        </button>
        <button
          class="text-slate-600 px-4 py-3 rounded-lg focus:ring-slate-700 hover:bg-slate-100"
        >
          {{ cancelButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  plan: string;
  price: number;
  billingPeriod: string;
  confirmButtonText: string;
  cancelButtonText: string;
}

const { title, description, plan, price, confirmButtonText, cancelButtonText } =
  defineProps<Props>();
</script>
<style scoped></style>
