<template>
  <nav class="flex justify-end py-1 px-4 gap-4">
    <a href="" target="_blank" v-for="social in socialMedias" :key="social.name">
      <NuxtImg :src="`/assets/icons/${social.icon}.png`" :alt="social.name" width="18" height="18" />
    </a>
  </nav>
</template>

<script setup>
  const config = useRuntimeConfig()
  const socialMedias = config.public.socialNetworks.filter(social => social.url != '')
</script>