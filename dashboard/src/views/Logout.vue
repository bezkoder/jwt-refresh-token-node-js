<template>Logging Out ...</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("logout");
    this.$router.push("/login");
  },
};
</script>
