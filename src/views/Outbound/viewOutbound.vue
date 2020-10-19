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
                <h3>Out-Bound's</h3>
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
                    <!-- Added By Siddhesh -->
                    <div class="row">
                      <div class="col-md-4">
                        <h5>
                          List of Out-Bound's
                          <span class="tableTotal">(Total : {{ totalCount }})</span>
                        </h5>
                      </div>
                      <div class="col-md-6">
                        <form class="search-form mr-form float-right">
                          <input
                            type="text "
                            class="form-control"
                            v-model="formData.keyword"
                            placeholder="Search Here..."
                            v-on:input="searchOutbound(1)"
                          />
                        </form>
                      </div>
                      <div class="col-md-2 text-right">
                        <router-link to="createOutbound" class="btn btn-success btn-small">Create</router-link>
                      </div>
                    </div>
                    <div class="row pt-3">
                      <div class="col-md-3">
                        <label for="fromDate">From Date</label>
                        <input type="date" class="form-control" placeholder="From Date" />
                      </div>
                      <div class="col-md-3">
                        <label for="toDate">To Date</label>
                        <input type="date" class="form-control" placeholder="To Date" />
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-md-4">
                        Total Count
                        <span class="totalCount">: 00</span>
                      </div>
                      <div class="col-md-4">
                        Total Weight
                        <span class="totalWeight">: 00</span>
                      </div>
                      <div class="col-md-4">
                        Total Inbound Closed
                        <span class="totalInboundClosed">: 00</span>
                      </div>
                    </div>

                    <!-- Added By Siddhesh Ends -->
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>Company</th>

                          <th>Released Date</th>

                          <th>In-Bound No.</th>

                          <th>In-Bound Value.</th>

                          <th>Weight</th>

                          <th>Bound Type</th>

                          <th colspan="2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(outbounds, index) in outbounds" v-bind:key="outbounds._id">
                          <td>{{ index + 1 }}</td>

                          <td>
                            <div>{{ outbounds.company.name }}</div>
                          </td>

                          <td>
                            <div>{{ outbounds.releasedDate | moment("DD-MM-YYYY") }}</div>
                          </td>

                          <td>
                            <div>{{ outbounds.inbound.bondNo }}</div>
                          </td>

                          <td>
                            <div>{{ outbounds.inbound.value }}</div>
                          </td>

                          <td>
                            <div>{{ outbounds.inbound.beWeight }}</div>
                          </td>

                          <td>
                            <div>{{ outbounds.bondType }}</div>
                          </td>
                          <!-- v-repeat -->
                          <td>
                            <div class="d-flex">
                              <div class="mr-2">
                                <router-link
                                  class="btn btn-primary"
                                  :to="`/editOutbound/${outbounds._id}`"
                                  append
                                >
                                  <b-icon-pencil></b-icon-pencil>
                                </router-link>
                              </div>
                              <div>
                                <deletemodal
                                  :myModal="outbounds"
                                  v-on:conformModal="deleteSingleOutbounds"
                                ></deletemodal>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <!-- end v-repeat -->
                      </tbody>
                    </table>
                    <div
                      class="table-body-contents text-center m-3 font-size-md font-weight-bold text-muted"
                      v-if="outbounds.length === 0"
                    >No Data Found</div>
                    <div class="overflow-auto">
                      <!-- Use text in props -->
                      <b-pagination
                        v-if="outbounds.length !== 0"
                        v-model="formData.page"
                        :total-rows="totalCount"
                        :per-page="perPage"
                        @input="searchOutbound(formData.page)"
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
  </div>
</template>

<script>
import headerCustom from "@/components/Header.vue";
import deletemodal from "@/components/deletemodal.vue";
import service from "../../service/apiService";

export default {
  components: {
    headerCustom,
    deletemodal
  },

  data() {
    return {
      formData: {
        keyword: "",
        page: 1
      },
      errors: [],
      outbounds: [],
      perPage: 10,
      noDataFound: false,
      totalCount: 0
    };
  },

  methods: {
    searchOutbound(pageNo) {
      this.formData.page = pageNo;
      service.showOutboundData(this.formData, (err, result) => {
        console.log("result:0------->>", result);
        if (result && result.status === 200) {
          this.noDataFound = false;
          this.outbounds = result.data.allOutbounds;
          this.totalCount = result.data.countOutbounds[0].count;
        } else {
          this.noDataFound = true;
          this.outbounds = [];
          this.totalCount = 0;
        }
        console.log("result:1------->>", this.totalCount);
      });
    },
    deleteSingleOutbound(singleOutbound) {
      service.deleteOutbound(singleOutbound, (err, response) => {
        if (response.status === 200) {
          this.$toaster.success("Successfully deleted");
          this.searchUser();
        } else {
          this.$toaster.error("Something went worng");
        }
      });
    }
  },

  created() {
    this.searchOutbound(1);
  }
};
</script>

<style></style>
