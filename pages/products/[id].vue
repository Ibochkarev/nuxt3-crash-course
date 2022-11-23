<template>
  <div>
    <h1>Product detail {{ id }}</h1>
  </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>