<template>
  <div>
    <headerCustom></headerCustom>
    <div class="template main-content sidenav-part ng-scope">
      <!-- <div id="progressBar">
        <div class="loader"></div>
      </div>-->
      <div>
        <div class="heading-sec">
          <div class="row">
            <div class="col-md-4 column">
              <div class="heading-profile">
                <h3>Logs</h3>
              </div>
            </div>
          </div>
        </div>
        <!-- Top Bar Chart -->
        <div class="panel-content">
          <div class="row">
            <div class="col-md-12">
              <div class="widget">
                <div class="table-area">
                  <div class="widget-title">
                    <h3>
                      List of Logs
                      <span class="tableTotal">(Total : {{ totalItems }})</span>
                    </h3>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>User</th>

                          <th>Company</th>

                          <th>Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, index) in users" v-bind:key="user._id">
                          <td>{{ index + 1 }}</td>

                          <td>
                            <div>{{ user.user }}</div>
                          </td>

                          <td>
                            <div>{{ user.company }}</div>
                          </td>

                          <td>
                            <div>{{ user.comment }}</div>
                          </td>
                          <!-- v-repeat -->
                        </tr>
                        <!-- end v-repeat -->
                      </tbody>
                    </table>
                  </div>
                  <div class="overflow-auto">
                    <!-- Use text in props -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalItems"
                      :per-page="perPage"
                      first-text="First"
                      prev-text="Prev"
                      next-text="Next"
                      last-text="Last"
                    ></b-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerCustom from "@/components/Header.vue";

export default {
  components: {
    headerCustom
  },
  data() {
    return {
      totalItems: "2",
      formData: {
        keyword: ""
      },
      // keyword:"",
      errors: [],
      users: [
        {
          user: "Admin",
          company: "Wohlig",
          comment: "Created In-Bound Entry",
          id: "1"
        },
        {
          user: "Admin",
          company: "Wohlig",
          comment: "Created In-Bound Entry",
          id: "2"
        },
        {
          user: "Admin",
          company: "SPTR",
          comment: "Created Out-Bound Entry",
          id: "3"
        }
      ]
    };
  },
  methods: {
    searchuser() {}
  },
  created() {
    this.searchuser();
  }
};
</script>

<style></style>
