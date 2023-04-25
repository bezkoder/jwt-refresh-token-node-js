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
    <h1 class="h2">Add Institution</h1>
    <form class="row g-3" @submit.prevent="">
      <div class="col-12">
        <label for="name" class="form-label">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formdata.name"
        />
      </div>
      <div class="col-12">
        <label for="phone" class="form-label">Contact Number</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          v-model="formdata.phone"
        />
      </div>
      <div class="col-12">
        <label for="email" class="form-label">Contact Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formdata.email"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Addresss"
          v-model="formdata.address"
        />
      </div>
      <div class="col-md-6">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select" v-model="formdata.state">
          <option v-for="(state, index) in states" :value="index">
            {{ state }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="inputCity" class="form-label">City</label>
        <select id="inputCity" class="form-select" v-model="formdata.city">
          <option v-for="(item, index) in city(formdata.state)" :value="index">
            {{ item }}
          </option>
      </div>

      <div class="col-md-2">
        <label for="inputZip" class="form-label">Pincode</label>
        <input
          type="text"
          class="form-control"
          id="inputZip"
          v-model="formdata.pincode"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" @click="SaveInsitution">
          Save
        </button>
      </div>
    </form>
    <v-dialog />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UsersList",
  computed: {
    ...mapGetters([ "states", "city"]),
  },
  mounted() {
    console.log(this);
  },
  data() {
    return {
      formdata: {
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      },
    };
  },
  methods: {
    SaveInsitution() {
      var _self = this;
      this.axios
        .post("/api/institution/", this.formdata)
        .then((response) => {
          console.log(response);

          this.$modal.show("dialog", {
            title: "Add Institution",
            text: "Successfully Added Institution ! ",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/institutions");
                },
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
          this.$modal.show("dialog", {
            title: "Add Institution",
            text: "Error in Adding Institution. Retry Again",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/institutions");
                },
              },
            ],
          });
        });
    },
  },
};
</script>
