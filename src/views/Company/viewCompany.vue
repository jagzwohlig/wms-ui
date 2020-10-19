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
                <h3>Company</h3>
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
                    <div class="float-right">
                      <form class="search-form mr-form">
                        <input
                          type="text "
                          class="form-control"
                          v-model="formData.keyword"
                          placeholder="Search Here..."
                          v-on:input="searchCompany(1)"
                        />
                      </form>
                      <!-- create router link -->
                      <router-link to="createCompany" class="btn btn-success btn-small">Create</router-link>
                    </div>
                    <h3>
                      List of Company
                      <span class="tableTotal">(Total : {{ totalCount }})</span>
                    </h3>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>Name</th>

                          <th>Contact</th>

                          <th>Contact Person</th>

                          <th colspan="2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(company, index) in company" v-bind:key="company._id">
                          <td>{{ index + 1 }}</td>

                          <td>
                            <div>{{ company.name }}</div>
                          </td>

                          <td>
                            <div>{{ company.contact }}</div>
                          </td>

                          <td>
                            <div>{{ company.contactPerson }}</div>
                          </td>
                          <!-- v-repeat -->
                          <td>
                            <div class="d-flex">
                              <div class="mr-2">
                                <router-link
                                  class="btn btn-primary"
                                  :to="`/editCompany/${company._id}`"
                                  append
                                >
                                  <b-icon-pencil></b-icon-pencil>
                                </router-link>
                              </div>
                              <div>
                                <deletemodal
                                  :myModal="company"
                                  v-on:conformModal="deleteSingleCompany"
                                ></deletemodal>

                                <!-- <deletemodal v-bind:mymodal="company"></deletemodal> -->
                              </div>
                            </div>
                          </td>
                        </tr>
                        <!-- end v-repeat -->
                      </tbody>
                    </table>
                    <div
                      class="table-body-contents text-center m-3 font-size-md font-weight-bold text-muted"
                      v-if="company.length === 0"
                    >No Data Found</div>
                    <div class="overflow-auto">
                      <!-- Use text in props -->
                      <b-pagination
                        v-if="company.length !== 0"
                        v-model="formData.page"
                        :total-rows="totalCount"
                        :per-page="perPage"
                        @input="searchCompany(formData.page)"
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
      company: [],
      perPage: 10,
      noDataFound: false,
      totalCount: 0
    };
  },
  methods: {
    searchCompany(pageNo) {
      this.formData.page = pageNo;
      service.showCompanyData(this.formData, (err, result) => {
        if (result && result.status === 200) {
          this.noDataFound = false;
          this.company = result.data.allCompany;
          this.totalCount = result.data.countCompany;
        } else {
          this.noDataFound = true;
          this.company = [];
          this.totalCount = 0;
        }
      });
    },

    deleteSingleCompany(singleCompany) {
      service.deleteCompany(singleCompany, (err, response) => {
        if (response.status === 200) {
          this.$toaster.success("Successfully deleted");
          this.searchCompany(1);
        } else {
          this.$toaster.error("Something went worng");
        }
      });
    }
  },

  created() {
    this.searchCompany(1);
  }
};
</script>

<style>
</style>
