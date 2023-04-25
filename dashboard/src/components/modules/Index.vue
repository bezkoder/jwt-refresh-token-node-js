<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">App Content</li>
      </ol>
    </nav>

    <Modules />
  </div>
</template>
<script>
import Modules from "./ModulesList.vue";
import Topics from "./TopicsList.vue";
export default {
  components: {
    Modules,
    Topics,
  },
};
</script>
