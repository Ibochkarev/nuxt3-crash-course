<template>
  <div>
    <h1>About</h1>
    {{ data }}
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: { age: 30 }
  // })

  const { data } = await useFetch('/api/ninja')
</script>

<style scoped>

</style>