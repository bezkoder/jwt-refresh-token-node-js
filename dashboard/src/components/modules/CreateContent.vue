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
        <label for="type" class="form-label">Type</label>
        <select class="form-select" v-model="formdata.type" id="type">
          <option selected>Select Content Type</option>
          <option value="Read">Read</option>
          <option value="Listen">Listen</option>
          <option value="Speak">Speak</option>
          <option value="Write">Write</option>
        </select>
      </div>
      <div class="col-12">
        <label for="content_html" class="form-label">Content HTML</label>
        <textarea
          class="form-control"
          id="content_html"
          v-model="formdata.content_html"
        />
      </div>
      <div class="col-12">
        <label for="content_style" class="form-label">Content Style</label>
        <textarea
          class="form-control"
          id="content_style"
          v-model="formdata.content_style"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" @click="SaveContent">
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
        type: "",
        content_html: "",
        content_style: "",
        topicid: this.$route.params.id,
      },
    };
  },
  methods: {
    SaveContent() {
      var _self = this;
      this.axios
        .post("/api/content", this.formdata)
        .then((response) => {
          console.log(response);

          this.$modal.show("dialog", {
            title: "Add Content",
            text: "Successfully Added Content ! ",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push(
                    "/topics/" + _self.$route.params.id + "/contents"
                  );
                },
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
          this.$modal.show("dialog", {
            title: "Add Content",
            text: "Error in Adding Content. Retry Again",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push(
                    "/topics/" + _self.$route.params.id + "/contents"
                  );
                },
              },
            ],
          });
        });
    },
  },
};
</script>
