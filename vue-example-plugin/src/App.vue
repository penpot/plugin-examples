<script setup lang="ts">
import { onMounted } from 'vue';
import { signal } from 'vue-signals';

const theme = signal<string | null>(null);

onMounted(() => {
  const url = new URL(window.location.href);

  const initialTheme = url.searchParams.get('theme');

  if (initialTheme) {
    theme.set(initialTheme as string);
  }

  window.addEventListener('message', (event) => {
    if (event.data.type === 'theme') {
      theme.set(event.data.content);
    }
  });
});
</script>

<template>
  <main :data-theme="theme()">Welcome to your plugin!</main>
</template>
