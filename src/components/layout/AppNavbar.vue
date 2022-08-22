<template>
  <nav class="flex flex-col space-y-4 w-fit p-4 bg-slate-100">
    <AppNavbarItem to="#" active :icon="HomeIcon"> Home </AppNavbarItem>
    <AppNavbarItem to="#" :icon="FlagIcon"> Sprints </AppNavbarItem>
    <AppNavbarItem to="#" :icon="CalendarIcon"> Calendar </AppNavbarItem>
    <AppNavbarItem to="#" :icon="CogIcon"> Settings </AppNavbarItem>
  </nav>
</template>

<script setup lang="ts">
import HomeIcon from "@heroicons/vue/solid/HomeIcon";
import FlagIcon from "@heroicons/vue/solid/FlagIcon";
import CalendarIcon from "@heroicons/vue/solid/CalendarIcon";
import CogIcon from "@heroicons/vue/solid/CogIcon";
import AppNavbarItem from "./AppNavbarItem.vue";
</script>
