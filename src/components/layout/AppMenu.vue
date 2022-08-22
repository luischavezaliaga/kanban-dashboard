<template>
  <aside
    class="flex flex-col space-y-6 bg-slate-100 text-sm p-4 w-1/6 max-w-md"
  >
    <AppMenuSection title="Boards">
      <AppSelect v-model="selectedBoard" :items="['Phoenix Board', 'Lima Board']">
        <template #selected="{ item }">
          <span
            :class="[
              'bg-yellow-400',
              'flex-shrink-0 inline-block h-2 w-2 rounded-full',
            ]"
            aria-hidden="true"
          />
          <span class="ml-3 block truncate">
            {{ item }}
          </span>
        </template>
        <template #item="{ selected, active, item }">
          <span
            :class="[
              'bg-yellow-400',
              'flex-shrink-0 inline-block h-2 w-2 rounded-full',
            ]"
            aria-hidden="true"
          />
          <span
            :class="[
              selected ? 'font-semibold' : 'font-normal',
              'ml-3 block truncate',
            ]"
          >
            {{ item }}
          </span>
        </template>
      </AppSelect>
    </AppMenuSection>

    <AppMenuSection title="Menu">
      <AppMenuItem :icon="ViewBoardsIcon"> Active Sprint </AppMenuItem>
      <AppMenuItem :icon="ClipboardListIcon"> Backlog </AppMenuItem>
      <AppMenuItem :icon="LightningBoltIcon"> Releases </AppMenuItem>
    </AppMenuSection>
  </aside>
</template>

<script setup lang="ts">
import ViewBoardsIcon from "@heroicons/vue/solid/ViewBoardsIcon";
import ClipboardListIcon from "@heroicons/vue/solid/ClipboardListIcon";
import LightningBoltIcon from "@heroicons/vue/solid/LightningBoltIcon";
import AppMenuSection from "./AppMenuSection.vue";
import AppMenuItem from "./AppMenuItem.vue";
import AppSelect from "../form/AppSelect.vue";

import { ref } from 'vue'

const selectedBoard = ref('Phoenix Board');
</script>
