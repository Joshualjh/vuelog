<template>
  <div v-for="(a, i) in blogle" :key="a">
    <h4 @click="$router.push(`/detail/${i}`)">{{ blogle[i].title }}</h4>
    <p>{{ blogle[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: "list_S",

  props: {
    blogle: Array,
  },
};
</script>

<style>
</style>