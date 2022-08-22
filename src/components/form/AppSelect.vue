<template>
  <Listbox as="div" :model-value="modelValue" @update:model-value="(value) => emits('update:modelValue', value)">
    <div class="mt-1 relative">
      <ListboxButton
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <span class="flex items-center">
          <slot name="selected" :item="modelValue">{{ modelValue }}</slot>
        </span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="(item, index) in items"
            :key="index"
            :value="item"
            as="template"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-blue-600' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <slot
                  name="item"
                  :selected="selected"
                  :active="active"
                  :item="item"
                  >{{ item }}</slot
                >
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-blue-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import SelectorIcon from "@heroicons/vue/solid/SelectorIcon";
import CheckIcon from "@heroicons/vue/solid/CheckIcon";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

interface Props {
  items: (string | number | Record<string, any>)[];
  modelValue?: string | number | Record<string, any>;
}

defineProps<Props>();

const emits = defineEmits(['update:modelValue'])

</script>
