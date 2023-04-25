<template>
  <div>
    <div class="d-flex flex-row-reverse">
      <div class="p-2">
        <router-link class="btn btn-primary" to="/modules/add" role="button"
          >Create New
        </router-link>
      </div>
      <!--div class="p-2">
        <router-link class="btn btn-primary" to="/topics" role="button"
          >Topics List
        </router-link>
      </div-->
    </div>

    <table id="modulesTable" class="display" width="100%">
      <thead>
        <tr>
          <th>Title</th>
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
  name: "ModulesList",
  mounted() {
    this.axios.get("/api/module").then((resp) => {
      var table = $("#modulesTable").DataTable({
        data: resp.data.message,
        columns: [{ data: "title" }, { data: "action" }],
        columnDefs: [
          {
            targets: -1,
            data: null,
            render: function (data, type, row) {
              return (
                '<a href="/#/topics/' +
                row.id +
                '" class=" btn btn-primary" > View Topics</a>'
              );
            },
          },
        ],
      });

      table.on("draw", function () {
        console.log($("#row_1"));
      });
    });
  },
};
</script>
