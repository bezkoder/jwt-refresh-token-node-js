<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>

      <li
        class="breadcrumb-item active"
        aria-current="page"
        v-for="item in bcm_list"
      >
        {{ item }}
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  props: {
    bcm_list: Array,
  },
};
</script>
