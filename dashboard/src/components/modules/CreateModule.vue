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
        <label for="subtitle" class="form-label">Key Outcomes</label>
        <textarea
          class="form-control"
          id="subtitle"
          v-model="formdata.subtitle"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Industry Type</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="formdata.industry_type"
        >
          <option selected>Select Industry Type</option>
          <!--option value="-1">Not Applicable</option-->
          <option value="E">Engineering</option>
          <option value="H">Healthcare</option>
          <option value="M">Management</option>
        </select>
      </div>
      <div class="col-12">
        <div
          class="d-flex justify-space-between mb-3"
          style="flex-direction: row; justify-content: space-between"
        >
          <label for="content" class="form-label">Introduction content</label>
          <button @click="AddInputFields">Add</button>
        </div>
        <div
          class="row"
          v-for="(item, index) in formdata.introduction_content"
          v-bind:key="index"
        >
          <div class="col-2">
            <input
              type="text"
              class="form-control my-2"
              v-model="item.time"
              placeholder="Time"
            />
          </div>
          <div class="col-10">
            <textarea
              type="text"
              class="form-control my-2"
              placeholder="Content"
              v-model="item.content"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <label for="videoURL" class="form-label">Introduction video URL</label>
        <input
          type="text"
          class="form-control"
          id="videoURL"
          v-model="formdata.introduction_video_url"
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
        introduction_content: [{ time: "", content: "" }],
        introduction_video_url: "",
        industry_type: "",
        key_outcomes: "",
      },
    };
  },
  methods: {
    AddInputFields() {
      this.formdata.introduction_content.push({ time: "", content: "" });
    },
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
