<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Institutions</li>
      </ol>
    </nav>
    <h1 class="h2">All Institutions</h1>

    <div class="d-flex flex-row-reverse">
      <div class="p-2">
        <router-link
          class="btn btn-primary"
          to="/institutions/add"
          role="button"
          >Create New
        </router-link>
      </div>
    </div>
    <!--select
      class="form-select"
      aria-label="Default select example"
      @change="SelectionChanged"
    >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select-->

    <table id="usersTable" class="display" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { mapGetters } from "vuex";

export default {
  name: "InstitutionsList",
  computed: {
    ...mapGetters(["refreshToken"]),
  },
  mounted() {
    var _self = this;
    this.fetchInstitutionList(() => {
      this.axios
        .post("/api/auth/refreshtoken", {
          refreshToken: this.refreshToken,
        })
        .then((response) => {
          console.log(response);
          _self.axios.defaults.headers.common["x-access-token"] =
            response.data.accessToken;
          this.$store.dispatch("updateTokens", {
            refreshToken: response.data.refreshToken,
            accessToken: response.data.accessToken,
          });
          _self.fetchInstitutionList(() => {});
        });
    });
  },

  methods: {
    SelectionChanged(e) {
      console.log("Selection Changed", e.target.value);
    },
    fetchInstitutionList(errorCb) {
      this.axios
        .get("/api/institution/")
        .then((resp) => {
          console.log(resp);
          $("#usersTable").DataTable({
            data: resp.data.message,
            columns: [
              { data: "name" },
              { data: "contact_phone" },
              { data: "contact_email" },
              { data: "city" },
              { data: "action" },
            ],
            columnDefs: [
              {
                targets: -1,
                data: null,
                defaultContent: "<button>Edit</button>",
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 401) {
            errorCb();
          }
        });
    },
  },
};
</script>
