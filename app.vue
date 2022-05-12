<script setup lang="ts">

let clientClicks = $ref(0);
let globalClicks = $ref(0);

const postClick = async () => {
  clientClicks++;
  const clickData = await $fetch('/api/click', {
    method: 'POST'
    // body: data
  });
  globalClicks = clickData.globalClicks;
};

</script>

<template>
  <div class="grid place-items-center h-screen bg-emerald-100">
    <div class="w-52 h-52 bg-green-800 rounded-full" @click="postClick" />
    <div class="text-center">
      <p class="font-sans text-6xl">
        Your taps {{ clientClicks }}
      </p>
      <p class="font-sans text-6xl">
        Global taps {{ globalClicks }}
      </p>
    </div>
  </div>
</template>
