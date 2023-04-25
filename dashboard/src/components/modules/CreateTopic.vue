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
    <h1 class="h2">Add Topic</h1>
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
        <label for="subtitle" class="form-label">subtitle</label>
        <textarea
          class="form-control"
          id="subtitle"
          v-model="formdata.subtitle"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" @click="SaveTopic">
          Save
        </button>
      </div>
    </form>
    <v-dialog />
  </div>
</template>

<script>
export default {
  name: "AddTopic",
  mounted() {
    console.log(this);
  },
  data() {
    return {
      formdata: {
        title: "",
        subtitle: "",
        module: this.$route.params.id,
      },
    };
  },
  methods: {
    SaveTopic() {
      var _self = this;
      this.axios
        .post("/api/topic", this.formdata)
        .then((response) => {
          console.log(response);

          this.$modal.show("dialog", {
            title: "Add Topic",
            text: "Successfully Added Topic ! ",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/topics/" + _self.$route.params.id);
                },
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
          this.$modal.show("dialog", {
            title: "Add Topic",
            text: "Error in Adding Topic. Retry Again",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/topics/" + _self.$route.params.id);
                },
              },
            ],
          });
        });
    },
  },
};
</script>
