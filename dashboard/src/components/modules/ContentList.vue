<template>
  <div>
    <div class="d-flex flex-row-reverse">
      <div class="p-2">
        <router-link class="btn btn-primary" :to="url" role="button"
          >Create New
        </router-link>
      </div>
    </div>

    <table id="topicsTable" class="display" width="100%">
      <thead>
        <tr>
          <th>Type</th>
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

export default {
  name: "ContentsList",
  data() {
    return {
      url: "/topics/" + this.$route.params.id + "/contents/add",
    };
  },
  mounted() {
    this.axios
      .get("/api/content/topic/" + this.$route.params.id)
      .then((resp) => {
        $("#topicsTable").DataTable({
          data: resp.data.message,
          columns: [{ data: "type" }, { data: "action" }],
          columnDefs: [
            {
              targets: -1,
              data: null,
              defaultContent:
                "<router-link to='/edit' class='btn btn-primary'>Edit</router-link>",
            },
          ],
        });
      });
  },
};
</script>
