<template>
  <div>
    <div @click="toggleChildrenVisibility" class="group flex items-center gap-1 px-2 cursor-pointer select-none rounded hover:bg-slate-100 duration-100">
      <IconsChevron :class="[{ 'text-transparent': menuItem.type !== 'directory' }, menuItem.showChildren ? 'rotate-0' : '-rotate-90']" class="w-4 h-4 duration-150 invisible group-hover:visible" />
      <p>{{ menuItem.name }}</p>
    </div>
    <!-- Recursive part: render this component for each child if exists and is shown -->
    <div v-if="menuItem.showChildren && menuItem.children" class="pl-3">
      <MenuItem 
        v-for="child in menuItem.children" 
        :key="child.id" 
        :menuItem="child" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  menuItem: Object
})

const toggleChildrenVisibility = () => {
  props.menuItem.showChildren = !props.menuItem.showChildren
}
</script>
