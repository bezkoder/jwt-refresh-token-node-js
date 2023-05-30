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
  name: "TopicsList",
  data() {
    return {
      url: "/topics/" + this.$route.params.id + "/add",
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    var _self = this;
    this.axios
      .get("/api/module/" + this.$route.params.id + "/topic")
      .then((resp) => {
        $("#topicsTable").DataTable({
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
                  '/contents" class=" btn btn-primary" > View Contents</a>'
                );
              },
            },
          ],
        });
      });
  },
};
</script>
