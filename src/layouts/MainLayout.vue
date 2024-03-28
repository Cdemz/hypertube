<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-black flex py-2">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleDrawer" class="" />

        <img src="/YouTube logo.png" alt="" class="h-5" />

        <q-toolbar-title> YouTube</q-toolbar-title>
        <div
          class="w-[35%] p-1 rounded-xl border-gray-500 border-2 overflow-hidden flex justify-between items-center pl-2 put"
        >
          <input
            type="search"
            name=""
            id=""
            placeholder="hired.."
            class="pro"
          />

          <div class="bg-gray-300 rounded-full pro">
            <q-btn flat dense round icon="search" class="" />
          </div>
        </div>

        <q-btn flat dense round icon="mic" class="" />
        <q-space class="obj" />
        <q-btn flat dense round icon="apps" class="obj" />

        <div
          class="w-[14%] h-auto rounded-2xl border-blue-400 text-blue-400 flex gap=2 items-center p-1 border-2 mx-2"
        >
          <q-btn flat dense round icon="account_circle" class="ml-1" />
          <p class="obj">Hired</p>
        </div>
        <q-btn flat dense round icon="phone" class="obj" />
      </q-toolbar>
    </q-header>

    <div class="flex w-4">
      <q-drawer
        v-model="drawer"
        show-if-above
        class="bg-white"
        bordered
        :width="100"
      >
        <q-list>
          <q-item
            clickable
            v-ripple
            class="squ flex flex-col items-center text-center"
          >
            <q-item-section avatar>
              <q-icon name="home" class="mx-auto" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            class="squ flex flex-col items-center text-center"
          >
            <q-item-section avatar>
              <q-icon name="library_music" class="mx-auto" />
            </q-item-section>
            <q-item-section>Music</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="squ flex flex-col items-center text-center"
          >
            <q-item-section avatar>
              <q-icon name="video_library" class="mx-auto" />
            </q-item-section>
            <q-item-section>Videos</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="squ flex flex-col items-center text-center"
          >
            <q-item-section avatar>
              <q-icon name="live_tv" class="mx-auto" />
            </q-item-section>
            <q-item-section class="mx-autdo">TV</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            class="squ flex flex-col items-center text-center"
          >
            <q-item-section avatar>
              <q-icon name="history" class="mx-auto" />
            </q-item-section>
            <q-item-section>History</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

defineOptions({
  name: 'MainLayout',
});
</script>

<style scoped>
.obj {
  display: flex;

  /* Add your shared div styling here */
}
.squ {
  display: flex !important;
  flex-direction: column;

  align-content: center;
  gap: 5px;
  /* flex-wrap: wrap; */
  flex-wrap: wrap-reverse;
  text-align: center;
  justify-items: center;
}
@media (max-width: 600px) {
  .obj {
    display: none !important;
  }

  .put {
    width: 25%;
    display: flex;
    flex-wrap: nowrap;
    gap: 0;
  }
  .pro {
    flex: 1;
    width: 40%;
  }
}
</style>
