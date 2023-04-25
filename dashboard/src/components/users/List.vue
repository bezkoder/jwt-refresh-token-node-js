<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Users</li>
      </ol>
    </nav>
    <h1 class="h2">Users</h1>

    <div class="d-flex flex-row-reverse">
      <div class="p-2">
        <router-link class="btn btn-primary" to="/users/add" role="button"
          >Create New
        </router-link>
      </div>
      <div class="p-2">
        <select
          class="form-select"
          aria-label="Default select example"
          @change="SelectionChanged"
        >
          <option selected>Select Institute</option>
          <option v-for="item in institutions" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>

    <table id="usersTable" class="display" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No.</th>
          <th>Institution</th>
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
  name: "UsersList",
  computed: {
    ...mapGetters(["institutions"]),
  },
  mounted() {
    var _self = this;
    this.$store.dispatch("getAllinstitutions");
    this.axios.get("/api/users").then((resp) => {
      $("#usersTable").DataTable({
        data: resp.data.message,
        columns: [
          { data: "name" },
          { data: "email" },
          { data: "phone" },
          { data: "institution.name" },
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
    });
  },
  data() {
    return {
      data: [
        {
          name: "Tiger Nixon",
          email: "System Architect",
          phone: "$3,120",
          institution: "Edinburgh",
        },
        {
          name: "Garrett Winters",
          email: "Director",
          phone: "$5,300",
          institution: "Edinburgh",
        },
      ],
    };
  },
  methods: {
    SelectionChanged(e) {
      console.log("Selection Changed", e.target.value);
    },
  },
};
</script>
