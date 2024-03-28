<template>
  <q-page class="q-pa-md">
    <div
      class="grid gap-4"
      :class="isLargerScreen ? 'grid-cols-4' : 'grid-cols-1'"
    >
      <div
        v-for="item in items"
        :key="item.sub"
        :class="item.sub"
        class="flex col gap-4"
      >
        <img
          :src="item.img"
          :alt="item.sub"
          class="w-full rounded-2xl md:h-[40%]"
        />
        <div class="flex justify-between items-center gap-3 p-1">
          <q-icon class="h-20 w-auto">
            <img :src="item.profile" class="rounded-full"
          /></q-icon>
          <div class="">
            <p class="font-bold text-2xl">{{ item.title }}</p>
            <p class="text-gray-500 text-xl">{{ item.sub }}</p>
            <p class="text-gray-500 text-xl">{{ item.like }}</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// import '.

import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const isLargerScreen = computed(() => $q.screen.gt.sm);

const items = [
  {
    img: '/mountains.jpg',
    sub: 'hire me',
    title: 'How to get the best dev',
    like: '10k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/quasar.jpg',
    sub: 'Best of the best',
    title: 'Can you guess who it is?',
    like: '12.5k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/parallax1.jpg',
    sub: 'youtube project',
    title: '30 hours of fun',
    like: '500k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/mountains.jpg',
    sub: 'hire me',
    title: 'how to get the best dev',
    like: '10k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/mountains.jpg',
    sub: 'hire me now',
    title: 'how to get the best dev',
    like: '10k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/mountains.jpg',
    sub: 'hire me',
    title: 'how to get the best dev',
    like: '10k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/mountains.jpg',
    sub: 'hire me',
    title: 'how to get the best dev',
    like: '10k',
    profile: '/ebuka.jpg',
  },
  {
    img: '/mountains.jpg',
    sub: 'hire me',
    title: 'how to get the best dev',
    like: '10k',
    profile: '/ebuka.jpg',
  },
];

defineOptions({
  name: 'IndexPage',
});
</script>
