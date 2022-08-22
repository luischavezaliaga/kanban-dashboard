<template>
  <div class="flex flex-col h-full">
    <AppHeader></AppHeader>
    <div class="flex divide-x divide-slate-300 flex-grow">
      <AppNavbar></AppNavbar>
      <AppMenu></AppMenu>
      <main class="flex flex-col flex-grow px-10 py-8">
        <Board></Board>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

import AppHeader from "./components/layout/AppHeader.vue";
import AppNavbar from "./components/layout/AppNavbar.vue";
import AppMenu from "./components/layout/AppMenu.vue";
import Board from "./pages/Board.vue";

</script>
