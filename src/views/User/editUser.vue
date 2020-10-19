<template>
  <div>
    <div>
      <headerCustom></headerCustom>
      <div class="sidenav-part template main-content">
        <div>
          <!-- Back button  if u want to use this breadcrumbs just remove the hidden class -->
          <div class="breadcrumbs">
            <ul>
              <li>
                <a title="Home" class="abc">Home</a>
              </li>
              <li>
                <a>Edit User</a>
              </li>
            </ul>
          </div>
          <div class="heading-sec">
            <div class="row">
              <div class="col-md-4 column">
                <div class="heading-profile">
                  <h2>Edit User</h2>
                </div>
              </div>
            </div>
          </div>
          <!-- Top Bar Chart -->
          <div class="panel-content">
            <div class="row">
              <div class="col-md-12">
                <div class="widget">
                  <div class="form-elements-sec">
                    <div class="form-body">
                      <form
                        name="details"
                        class="formPart text-left"
                        @submit.prevent="submit"
                        autocomplete="off"
                      >
                        <!-- Name -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.name.$error }"
                          >
                            <label for="name">Name:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Enter Name"
                              v-model.trim="details.name"
                              @input="setTouch('name')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.name.required && $v.details.name.$error"
                            >Name is required</div>
                          </div>
                        </div>

                        <!-- Email -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.email.$error }"
                          >
                            <label for="email">Email:</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="name@gmail.com"
                              v-model.trim="details.email"
                              @input="setTouch('email')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.email.required && $v.details.email.$error"
                            >Email is required</div>
                          </div>
                        </div>

                        <!-- Password -->
                        <!-- <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.password.$error }"
                          >
                            <label for="password">Password:</label>
                            <input
                              type="password"
                              class="form-control"
                              id="password"
                              placeholder="name@gmail.com"
                              v-model.trim="details.password"
                              @input="setTouch('password')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.password.required && $v.details.password.$error"
                            >Password is required</div>
                          </div>
                        </div>-->

                        <!-- phone no -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.phone.$error }"
                          >
                            <label for="phone">Phone No:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="phone"
                              placeholder="Enter Phone No"
                              v-model.trim="details.phone"
                              @input="setTouch('phone')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.phone.required && $v.details.phone.$error"
                            >Phone No is required</div>
                          </div>
                        </div>

                        <!-- accessLevel -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.accessLevel.$error }"
                          >
                            <label for="accessLevel">Access Level:</label>
                            <select
                              class="form-control"
                              id="accessLevel"
                              placeholder="Enter accessLevel"
                              v-model.trim="details.accessLevel"
                              @select="setTouch('accessLevel')"
                            >
                              <option value="admin">admin</option>
                              <option value="view">view</option>
                            </select>
                            <div
                              class="error"
                              v-if="!$v.details.accessLevel.required && $v.details.accessLevel.$error"
                            >Access Level is required</div>
                          </div>
                        </div>

                        <!-- Data of birth -->
                        <!-- <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.date.$error }"
                          >
                            <label for="date">Date of Birth:</label>
                            <input
                              type="date"
                              class="form-control"
                              id="date"
                              placeholder="Enter date Of birth"
                              v-model.trim="details.date"
                              @input="setTouch('date')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.date.required && $v.details.date.$error"
                            >Date is required</div>
                          </div>
                        </div>-->

                        <!-- address -->
                        <!-- <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.address.$error }"
                          >
                            <label for="address">Address:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="address"
                              placeholder="Enter Address"
                              v-model.trim="details.address"
                              @input="setTouch('address')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.address.required && $v.details.address.$error"
                            >Address is required</div>
                          </div>
                        </div>-->

                        <!-- Adhar No-->
                        <!-- <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.adharNo.$error }"
                          >
                            <label for="adharNo">Aadhaar No:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="adharNo"
                              placeholder="Enter Adhar No"
                              v-model.trim="details.adharNo"
                              @input="setTouch('adharNo')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.adharNo.required && $v.details.adharNo.$error"
                            >Aadhaar No is required</div>
                          </div>
                        </div>-->

                        <!-- PAN No -->
                        <!-- <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.panNo.$error }"
                          >
                            <label for="panNo">PAN No:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="panNo"
                              placeholder="Enter PAN No"
                              v-model.trim="details.panNo"
                              @input="setTouch('panNo')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.panNo.required && $v.details.panNo.$error"
                            >PAN No is required</div>
                          </div>
                        </div>-->

                        <!-- Status -->
                        <!-- <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.status.$error }"
                          >
                            <label for="status">Status:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="status"
                              placeholder="Enter status"
                              v-model.trim="details.status"
                              @input="setTouch('status')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.status.required && $v.details.status.$error"
                            >Status is required</div>
                          </div>
                        </div>-->

                        <!-- button -->
                        <div class="btnPart text-center">
                          <button
                            type="submit"
                            class="btn btn-success"
                            v-on:click="submitForm()"
                          >Save</button>
                          <p
                            class="typo__p"
                            v-if="submitStatus === 'OK'"
                          >Thanks for your submission!</p>
                          <p
                            class="typo__p"
                            v-if="submitStatus === 'ERROR'"
                          >Please fill the form correctly.</p>
                          <!-- <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p> -->
                          <button
                            type="reset"
                            class="btn btn-danger mx-3"
                            v-on:click="resetForm()"
                          >Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
  sameAs,
  email
} from "vuelidate/lib/validators";
import headerCustom from "@/components/Header.vue";
import { connect } from "tls";
import service from "../../service/apiService";

export default {
  components: {
    headerCustom
  },

  data() {
    return {
      details: {
        name: "",
        email: "",
        // password: "",
        phone: "",
        accessLevel: "",
        // address: "",
        // date: "",
        // age: "",
        // adharNo: "",
        // panNo: "",
        // status: "",

        submitStatus: null
      }
    };
  },

  validations: {
    details: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      // password: {
      //   required
      // },
      phone: {
        required
      },
      accessLevel: {
        required
      }
      // address: {
      //   required
      // },
      // date: {
      //   required
      // },
      // age: {
      //   required,
      //   between: between(20, 30)
      // },
      // adharNo: {
      //   required
      // },
      // panNo: {
      //   required
      // },
      // status: {
      //   required
      // }
    }
  },

  created() {
    this.getParticularUserById();
  },

  methods: {
    //this method use for validation error
    setTouch(fields) {
      if (fields == "name") {
        this.$v.details.name.$touch();
      } else if (fields == "email") {
        this.$v.details.email.$touch();
      } else if (fields == "phone") {
        this.$v.details.phone.$touch();
      } else if (fields == "accessLevel") {
        this.$v.details.accessLevel.$touch();
      } /* else if (fields == "password") {
        this.$v.details.password.$touch();
      } else if (fields == "address") {
        this.$v.details.address.$touch();
      } else if (fields == "date") {
        this.$v.details.date.$touch();
      } else if (fields == "age") {
        this.$v.details.age.$touch();
      } else if (fields == "adharNo") {
        this.$v.details.adharNo.$touch();
      } else if (fields == "panNo") {
        this.$v.details.panNo.$touch();
      } else if (fields == "status") {
        this.$v.details.status.$touch();
      } */
    },
    getParticularUserById() {
      service.getUserDataById(this.$route.params.id, (err, result) => {
        if (result.status === 200) {
          this.details = result.data.data;
        } else {
          this.$toaster.error("Something went worng");
        }
      });
    },
    //this is use for save button
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "OK";
        this.details.id = this.$route.params.id;

        service.editUser(this.details, (err, result) => {
          if (result.status === 200) {
            this.noDataFound = false;
            this.details = result.data.data;
            this.$toaster.success("User Updated Successfully");
            this.$router.push("/viewUser");
          } else {
            this.noDataFound = true;
            this.details = {};
          }
        });
      }
    },
    //this method use for cancel button
    resetForm() {
      this.details = "blank";
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
