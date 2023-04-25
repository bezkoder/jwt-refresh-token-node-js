<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ title }}
    </button>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" :href="item.link" v-for="item in menuItems">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DropDown",
  props: {
    title: String,
    menuItems: Array,
  },
};
</script>
