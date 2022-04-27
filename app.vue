<script setup>
  const { data } = await useFetch('/api/hello')
</script>

<template>
  <div> Current Date {{data?.currentDate}}</div>
  <div>
    <NuxtWelcome />
  </div>
</template>
