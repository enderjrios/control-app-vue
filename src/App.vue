<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useDark, useTitle,useToggle } from "@vueuse/core";
import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), ' HH:mm:ss YYYY-MM-DD')
// is user prefers dark theme
const isDark = useDark()
const toggleDark = useToggle(isDark)

useTitle(() => (isDark.value ? "🌙 Good evening!" : "☀️ Good morning!"));
</script>

<template>
  <div>
    <nav>
      <RouterLink decoration-none m1 dark:color-white to="/">Home</RouterLink>
      <RouterLink decoration-none m1 dark:color-white to="/servicios">Servicios</RouterLink>
      <RouterLink decoration-none m1 dark:color-white to="/about">About</RouterLink>
      <RouterLink decoration-none m1 dark:color-white to="/contactos">Contactos</RouterLink>
      <Button dark:bg-black @click="toggleDark()">
        {{ isDark ? "🌙 " : "☀️ "}}
      </Button>

     <i i-carbon-time >Date</i> {{ formatted }}
    </nav>
  </div>
  <div >
    <RouterView />
  </div>
</template>


