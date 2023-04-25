<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Add</li>
      </ol>
    </nav>
    <h1 class="h2">Add Module</h1>
    <form class="row g-3" @submit.prevent="">
      <div class="col-12">
        <label for="name" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formdata.title"
        />
      </div>
      <div class="col-12">
        <label for="phone" class="form-label">subtitle</label>
        <textarea class="form-control" id="phone" v-model="formdata.subtitle" />
      </div>
      <div class="col-12">
        <label for="content" class="form-label">Introduction content</label>
        <textarea
          class="form-control"
          id="content"
          v-model="formdata.introduction_content"
        />
      </div>
      <div class="col-12">
        <label for="style" class="form-label">Introduction style</label>
        <textarea
          class="form-control"
          id="style"
          v-model="formdata.introduction_style"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" @click="SaveModule">
          Save
        </button>
      </div>
    </form>
    <v-dialog />
  </div>
</template>

<script>
export default {
  name: "AddModule",
  mounted() {
    console.log(this);
  },
  data() {
    return {
      formdata: {
        title: "",
        subtitle: "",
        introduction_content: "",
        introduction_style: "",
      },
    };
  },
  methods: {
    SaveModule() {
      var _self = this;
      this.axios
        .post("/api/module", this.formdata)
        .then((response) => {
          console.log(response);

          this.$modal.show("dialog", {
            title: "Add Module",
            text: "Successfully Added Module ! ",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/modules");
                },
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
          this.$modal.show("dialog", {
            title: "Add Module",
            text: "Error in Adding Module. Retry Again",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/modules");
                },
              },
            ],
          });
        });
    },
  },
};
</script>
