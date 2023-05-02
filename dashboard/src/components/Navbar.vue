<template>
  <nav class="navbar navbar-light bg-light p-3">
    <div
      class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between"
    >
      <a class="navbar-brand" href="#"> Fluenc </a>
      <button
        class="navbar-toggler d-md-none collapsed mb-3"
        type="button"
        data-toggle="collapse"
        data-target="#sidebar"
        aria-controls="sidebar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div
      class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0"
    >
      <drop-down :title="currentLoggedInUsername" :menuItems="menu" />
    </div>
  </nav>
</template>
<script>
import DropDown from "./DropDown.vue";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  components: {
    DropDown,
  },
  computed: {
    ...mapGetters(["currentLoggedInUsername"]),
  },
  data() {
    return {
      menu: [
        {
          name: "Profile",
          link: "#",
        },
        {
          name: "Sign Out",
          link: "/#/logout",
        },
      ],
    };
  },
};
</script>
