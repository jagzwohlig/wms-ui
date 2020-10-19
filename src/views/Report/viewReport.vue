<template>
  <div>
    <headerCustom></headerCustom>
    <div class="template main-content sidenav-part ng-scope">
      <!--div id="progressBar">
        <div class="loader"></div>
      </div-->
      <div>
        <div class="heading-sec">
          <div class="row">
            <div class="col-md-4 column">
              <div class="heading-profile">
                <h3>Report's</h3>
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
                    <!-- Added By Siddhesh-->
                    <!--div class="row dwnd">
                      <div class="col-md-12">
                        <b-icon-download></b-icon-download> Download current month report (September
                        Report).
                      </div>
                    </div-->
                    <div class="row">
                      <div class="col-md-4">
                        <h5>
                          List of Reports
                          <span class="tableTotal">(Total : {{ totalItems }})</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>Date</th>

                          <th colspan="2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, index) in users" v-bind:key="user._id">
                          <td>{{ index + 1 }}</td>

                          <td>
                            <div>{{ user.inBondDate }}</div>
                          </td>

                          <!-- v-repeat -->
                          <td>
                            <div class="d-flex">
                              <div class="mr-2">
                                <router-link class="btn btn-primary" to="/editInbound" append>
                                  <b-icon-download></b-icon-download>
                                </router-link>
                              </div>
                            </div>
                          </td>
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
import reportImg from "@/assets/images/report.png";

export default {
  components: {
    headerCustom
  },
  data() {
    return {
      reportImage: reportImg,
      totalItems: "3",
      formData: {
        keyword: ""
      },
      // keyword:"",
      errors: [],
      users: [
        {
          company: "Wohlig",
          inBondDate: "Sep 2020",
          bondNo: "wms109",
          expDate: "6th Aug 2021",
          receivedWeight: "5000",
          availableValue: "00000",
          outboundEntry: "00000",
          status: "closed"
        },
        {
          company: "SPTR",
          inBondDate: "Aug 2020",
          bondNo: "wms2098",
          expDate: "20th Aug 2021",
          receivedWeight: "5000",
          availableValue: "00000",
          outboundEntry: "00000",
          status: "closed"
        },
        {
          company: "Wohlig",
          inBondDate: "Oct 2020",
          bondNo: "wms80",
          expDate: "2th Oct 2021",
          receivedWeight: "5000",
          availableValue: "00000",
          outboundEntry: "00000",
          status: "closed"
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

<style lang="scss">
.dwnd {
  padding: 20px;
  cursor: pointer;
}
</style>
