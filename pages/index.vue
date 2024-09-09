<template>
  <div class="h-full flex text-slate-400">
    <div class="w-80 h-full pt-6">
      <h2 class="pl-6">Sam McCarthy</h2>

      <div class="flex flex-col gap-1 mt-6 pl-6 pr-2">
        <p class="py-0.5 px-3 rounded cursor-pointer hover:bg-slate-100 duration-300">Settings</p>
        <p class="py-0.5 px-3 rounded cursor-pointer hover:bg-slate-100 duration-300">Repositories</p>
      </div>

      <div class="flex flex-col mt-6 pl-6 pr-2">
        <div v-for="menuItem in projectFiles">
          <MenuItem :menuItem />
        </div>
      </div>
    </div>

    <div class="flex flex-col h-full grow">
      <div class="h-16 bg-purple-500"></div>

      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/stores/project'

const { projectFiles } = useProjectStore()
</script>