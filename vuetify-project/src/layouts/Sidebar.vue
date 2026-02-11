<template>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <div>
    <v-navigation-drawer
      class="block h-screen overflow-y-auto"
      permanent
      width="280"
      style="background-color: black !important; border-right: 1px solid #1f2937;"
      theme="dark"
    >
      <div class="d-flex align-center pa-6">
        <v-icon class="ml-2" color="red-accent-4" size="large" style="transform: translateY(-4px)">
        <span class="material-symbols-outlined" style="font-size: 40px;">movie</span>
      </v-icon>
       <v-app-bar-title class="ml-2">
      <span class="text-white ml-1" style="font-family: 'Bebas Neue', cursive; font-size: 2rem; letter-spacing: 2px;">
        MOVIES RATING</span>
    </v-app-bar-title>
      </div>

    <v-list class="px-3" nav>
        <v-list-item
          v-for="(item, i) in navigation"
          :key="i"
          :value="item"
          color="white"
          rounded="lg"
          class="mb-1"
          :class="item.current ? 'bg-grey-darken-4' : 'text-grey-lighten-1'"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" size="small" :color="item.current ? 'white' : 'grey-lighten-1'"></v-icon>
          </template>
          <v-list-item-title :class="item.current ? 'text-white' : 'text-grey-lighten-1'">
            {{ item.name }}
          </v-list-item-title>
          <template v-slot:append v-if="item.count">
             <v-badge inline :content="item.count" color="black" class="font-weight-medium"></v-badge>
          </template>
        </v-list-item>
      </v-list>

      <v-list class="px-3" nav>
        <v-list-item
          v-for="(team, i) in teams"
          :key="i"
          :value="team"
          color="white"
          rounded="lg"
          class="mb-1 text-grey-lighten-1"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main class="bg-grey-lighten-4">
      <slot />
    </v-main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navigation = ref([
  { name: 'Dashboard', icon: 'mdi-home', current: true },
  { name: 'Team', icon: 'mdi-account-group', current: false },
])
</script>

<style scoped>
/* Custom overrides to match Tailwind colors exactly if needed */
.v-navigation-drawer {
    background-color: #111827 !important; /* gray-900 */
}
</style>
