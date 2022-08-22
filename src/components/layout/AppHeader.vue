<template>
  <header class="bg-blue-600">
    <div class="max-w-2xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <form class="group relative">
        <SearchIcon
          class="absolute left-3 top-1/2 -mt-2.5 text-slate-50 pointer-events-none group-focus-within:text-slate-400 h-5 w-5"
        ></SearchIcon>
        <input
          class="bg-transparent focus:bg-slate-50 placeholder-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 focus:text-slate-900 focus:placeholder-slate-400 rounded-xl py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Search"
          placeholder="Search"
        />
      </form>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchIcon from "@heroicons/vue/solid/SearchIcon";
</script>
