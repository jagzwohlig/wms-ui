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
                <h3>In-Bound's</h3>
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
                    <div class="row">
                      <div class="col-md-4">
                        <h5>
                          List of In-Bound's
                          <span class="tableTotal">(Total : {{ totalCounts }})</span>
                        </h5>
                      </div>
                      <div class="col-md-6">
                        <form class="search-form mr-form float-right">
                          <input
                            type="text "
                            class="form-control"
                            v-model="formData.keyword"
                            placeholder="Search Here..."
                            v-on:input="searchInbound(1)"
                          />
                        </form>
                      </div>
                      <div class="col-md-2 text-right">
                        <router-link to="createInbound" class="btn btn-success btn-small">Create</router-link>
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
                      <div class="col-md-6">
                        Total Active Inbound
                        <span class="totalActiveInbound">: 00</span>
                      </div>
                      <div class="col-md-6">
                        Total New Inbound
                        <span class="totalNewInbound">: 00</span>
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

                          <th>In-Bound Date</th>

                          <th>Bond No.</th>

                          <th>Expiry Date</th>

                          <th>Received Weight</th>

                          <!-- <th>Available Value</th> -->

                          <!-- <th>Outbound Entry</th> -->

                          <th>Status</th>

                          <th colspan="2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(inbounds, index) in inbounds" v-bind:key="inbounds._id">
                          <td>{{ index + 1 + (formData.page - 1) * 10 }}</td>

                          <td>
                            <div>{{ inbounds.company.name }}</div>
                          </td>

                          <td>
                            <div>{{ inbounds.inBondDate | moment("DD-MM-YYYY") }}</div>
                          </td>

                          <td>
                            <div>{{ inbounds.bondNo }}</div>
                          </td>

                          <td>
                            <div>{{ inbounds.expDate | moment("DD-MM-YYYY")}}</div>
                          </td>

                          <td>
                            <div>{{ inbounds.recievedWeight }}</div>
                          </td>

                          <!-- <td>
                            <div>{{ inbounds.availableValue }}</div>
                          </td>-->

                          <!-- <td>
                            <div>{{ inbounds.outboundEntry }}</div>
                          </td>-->

                          <td>
                            <div>{{ inbounds.bondStatus }}</div>
                          </td>

                          <td>
                            <div>{{ inbounds.outbondDetail }}</div>
                          </td>

                          <!-- v-repeat -->
                          <td>
                            <div class="d-flex">
                              <div class="mr-2">
                                <router-link
                                  class="btn btn-primary"
                                  :to="`/editInbound/${inbounds._id}`"
                                  append
                                >
                                  <b-icon-pencil></b-icon-pencil>
                                </router-link>
                              </div>
                              <!-- <div>
                                <deletemodal v-bind:mymodal="inbounds"></deletemodal>
                              </div>-->
                            </div>
                          </td>
                        </tr>
                        <!-- end v-repeat -->
                      </tbody>
                    </table>
                    <div
                      class="table-body-contents text-center m-3 font-size-md font-weight-bold text-muted"
                      v-if="inbounds.length === 0"
                    >No Data Found</div>
                    <div class="overflow-auto">
                      <!-- Use text in props -->
                      <b-pagination
                        v-if="inbounds.length !== 0"
                        v-model="formData.page"
                        :total-rows="totalCounts"
                        :per-page="perPage"
                        @input="searchInbound(formData.page)"
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
// import deletemodal from "@/components/deletemodal.vue";
import service from "../../service/apiService";

export default {
  components: {
    headerCustom
    // deletemodal
  },

  data() {
    return {
      totalCount: 0,
      formData: {
        keyword: "",
        page: 1
      },
      errors: [],
      inbounds: [],
      perPage: 10,
      noDataFound: false,
      totalCounts: 0
    };
  },

  methods: {
    searchInbound(pageNo) {
      this.formData.page = pageNo;
      service.showInboundData(this.formData, (err, result) => {
        if (result && result.status === 200) {
          this.noDataFound = false;
          this.inbounds = result.data.allInbounds;
          this.totalCounts = result.data.countInbounds[0].count;
        } else {
          this.noDataFound = true;
          this.inbounds = [];
          this.totalCount = 0;
        }
      });
    }
  },

  created() {
    this.searchInbound(1);
  }
};
</script>

<style></style>
