<template>
  <div>
    <h1>Oops!</h1>
    <h3>The event you're looking for is not here.</h3>
    <router-link :to="{ name: 'Main'}">Back to your home page</router-link>
  </div>
</template>

<script>
export default {
}
</script>