<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useDark, useTitle} from '@vueuse/core'


    // is user prefers dark theme
    const isDark = useDark()

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

   


</script>

<template>
  <div>
    <nav>
      <RouterLink decoration-none m1 to="/">Home</RouterLink>
      <RouterLink decoration-none m1 to="/about">About</RouterLink>
     
    </nav>
  </div>

  <RouterView />
</template>

<style></style>
