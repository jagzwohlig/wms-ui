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
                <h3>User</h3>
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
                          v-on:input="searchUser(1)"
                        />
                      </form>
                      <!-- create router link -->
                      <router-link to="createUser" class="btn btn-success btn-small">Create</router-link>
                    </div>
                    <h3>
                      List of User
                      <span class="tableTotal">(Total : {{ totalCount }})</span>
                    </h3>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>Name</th>

                          <th>Email</th>

                          <th>Phone Number</th>

                          <th>accessLevel</th>

                          <th colspan="2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(user, index) in users" v-bind:key="user._id">
                          <!-- <td>{{ index + 1 }}</td> -->
                          <td>{{ index + 1 + (formData.page - 1) * 10 }}</td>

                          <td>
                            <div>{{ user.name }}</div>
                          </td>

                          <td>
                            <div>{{ user.email }}</div>
                          </td>

                          <td>
                            <div>{{ user.phone }}</div>
                          </td>

                          <td>
                            <div>{{ user.accessLevel }}</div>
                          </td>
                          <!-- v-repeat -->
                          <td>
                            <div class="d-flex">
                              <div class="mr-2">
                                <router-link
                                  class="btn btn-primary"
                                  :to="`/editUser/${user._id}`"
                                  append
                                >
                                  <b-icon-pencil></b-icon-pencil>
                                </router-link>
                              </div>
                              <div>
                                <deletemodal :myModal="user" v-on:conformModal="deleteSingleUser"></deletemodal>

                                <!-- <deletemodal v-bind:mymodal="user"></deletemodal> -->
                              </div>
                            </div>
                          </td>
                        </tr>
                        <!-- end v-repeat -->
                      </tbody>
                    </table>
                    <div
                      class="table-body-contents text-center m-3 font-size-md font-weight-bold text-muted"
                      v-if="users.length === 0"
                    >No Data Found</div>

                    <div class="overflow-auto">
                      <!-- Use text in props -->
                      <b-pagination
                        v-if="users.length !== 0"
                        v-model="formData.page"
                        :total-rows="totalCount"
                        :per-page="perPage"
                        @input="searchUser(formData.page)"
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
      users: [],
      perPage: 10,
      /* Added By Siddhesh */
      noDataFound: false,
      totalCount: 0
    };
  },
  methods: {
    searchUser(pageNo) {
      this.formData.page = pageNo;
      service.showUsersData(this.formData, (err, result) => {
        if (result && result.status === 200) {
          this.noDataFound = false;
          this.users = result.data.allUsers;
          this.totalCount = result.data.countUsers;
        } else {
          this.noDataFound = true;
          this.users = [];
          this.totalCount = 0;
        }
      });
    },

    deleteSingleUser(singleUser) {
      service.deleteUser(singleUser, (err, response) => {
        if (response.status === 200) {
          this.$toaster.success("Successfully deleted");
          this.searchUser(1);
        } else {
          this.$toaster.error("Something went worng");
        }
      });
    }
  },

  created() {
    this.searchUser(1);
  }
};
</script>

<style></style>
