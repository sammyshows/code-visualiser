<template>
  <div class="h-full flex text-slate-400">
    <div class="w-80 h-full pt-6">
      <h2 class="pl-6">Sam McCarthy</h2>

      <div class="flex flex-col gap-1 mt-6 pl-6">
        <p class="max-w-min py-0.5 px-3 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200/70 duration-300">Settings</p>
        <p class="max-w-min py-0.5 px-3 rounded-lg cursor-pointer bg-slate-100 hover:bg-slate-200/70 duration-300">Repositories</p>
      </div>

      <div class="flex flex-col mt-6 pl-6">
        <div v-for="file in projectFiles">
          <div class="flex items-center gap-2">
            <IconsChevron @click="file.showChildren = !file.showChildren" :class="[{ 'invisible': file.type != 'directory' }, file.showChildren ? 'rotate-0' : '-rotate-90']" class="w-4 h-4 cursor-pointer" />
            <p>{{ file.name + file?.showChildren?.value }}</p>
          </div>


        </div>
      </div>
    </div>

    <div class="flex flex-col grow">
      <div class="h-16 bg-purple-500">

      </div>

      <div class="grow bg-orange-500">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

  const projectFiles = [
    {
      name: 'assets',
      type: 'directory',
      children: [
        { name: 'main.css', type: 'css' },
        { name: 'background.png', type: 'png' },
      ],
      showChildren: ref(false)
    },
    {
      name: 'composables',
      type: 'directory',
      children: [
        { name: 'firebase.ts', type: 'typeScript' },
        { name: 'formatDate.ts', type: 'typeScript' },
      ]
    },
    {
      name: 'pages',
      type: 'directory',
      children: [
        { name: 'Home.vue', type: 'vue' },
        { name: 'Index.vue', type: 'vue' },
        { name: 'Project.vue', type: 'vue' },
        {
          name: '[Project]',
          type: 'directory',
          children: [
            { name: 'LetterLock.vue', type: 'vue' },
            { name: 'Stockwise.vue', type: 'vue' }
          ]
        }
      ]
    },
    {
      name: 'stores',
      type: 'directory',
      children: [
        { name: 'ads.ts', type: 'typeScript' },
        { name: 'game.ts', type: 'typeScript' },
      ]
    },
    { name: 'nuxt.config.ts', type: 'typeScript' },
    { name: 'tsconfig.json', type: 'json' },
    { name: 'package.json', type: 'json' },
    { name: 'package-lock.json', type: 'json' },
    { name: 'tailwind.config.js', type: 'javaScript' },
    { name: '.gitignore', type: 'gitIgnore' },
    { name: 'README.md', type: 'markDown' },
  ]
</script>