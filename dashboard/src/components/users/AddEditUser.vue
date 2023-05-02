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
    <h1 class="h2">Add User</h1>
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
        <label class="form-label">Institution</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="formdata.institution"
        >
          <option selected>Select Institute</option>
          <!--option value="-1">Not Applicable</option-->
          <option v-for="item in institutions" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      
      <div class="col-12">
        <label class="form-label">Role</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="formdata.role"
        >
          <option selected>Select Role</option>
          <!--option value="-1">Not Applicable</option-->
          <option v-for="item in roles" :value="item.id">
            {{ item.name }}
          </option>
        </select>
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
          <option v-for="(item, index) in city(formdata.state)" :value="item">
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
        <button type="submit" class="btn btn-primary" @click="SaveUser">
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
  name: "AddEditUser",
  computed: {
    ...mapGetters(["institutions", "states", "city", "roles"]),
  },
  data() {
    return {
      formdata: {
        name: "",
        phone: "",
        email: "",
        institution: "",
        city: "",
        state: "",
        pincode: "",
        role:""
      },
    };
  },
  mounted() {
    var _self = this;
    if(this.$route.params.id) {
      this.axios.get("/api/users/"+this.$route.params.id)
      .then(response => {
        _self.formdata = response.data.message;
      }).catch(error => {
        
      });
    }
  },
  methods: {
    SaveUser() {
      var _self = this;
      
      if(! this.$route.params.id) {
      this.axios
        .post("/api/users", this.formdata)
        .then((response) => {
          console.log(response);

          this.$modal.show("dialog", {
            title: "Add User",
            text: "Successfully Added User ! ",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/users");
                },
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
          this.$modal.show("dialog", {
            title: "Add User",
            text: "Error in Adding User. Retry Again",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/users");
                },
              },
            ],
          });
        });
      }
      
      else {
        this.axios.put("/api/users/"+this.$route.params.id , this.formdata)
        .then( response => {
          console.log(resposne)
          this.$modal.show("dialog", {
            title: "Edit User",
            text: "Successfully user information Edited ! ",
            buttons: [
              {
                title: "Close",
                handler: () => {
                  this.$modal.hide("dialog");
                  _self.$router.push("/users");
                },
              },
            ],
          });
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
  },
};
</script>
