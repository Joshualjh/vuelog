<template>
  <div>
    <h4>상세 페이지</h4>
    <h5>{{ blogle[$route.params.id].title }}</h5>
    <p>{{ blogle[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blogle: Array,
  },
};
</script>

<style>
</style>