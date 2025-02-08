<template>
  <img :src="logo" :alt="config.public.appName" class="w-32" />
</template>

<script setup>
  import logo from '~/assets/logo.svg'
  const config = useRuntimeConfig()
</script>