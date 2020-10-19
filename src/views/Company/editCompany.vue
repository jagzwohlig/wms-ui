<template>
  <div>
    <div>
      <headerCustom></headerCustom>
      <div class="sidenav-part template main-content">
        <div>
          <div class="breadcrumbs">
            <ul>
              <li>
                <a title="Home">Home</a>
              </li>
              <li>
                <a>Edit Company</a>
              </li>
            </ul>
          </div>
          <div class="heading-sec">
            <div class="row">
              <div class="col-md-4 column">
                <div class="heading-profile">
                  <h2>Edit Company</h2>
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
                      <form name="details" class="formPart text-left" @submit.prevent="submit">
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
                        <!-- Contact -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.contact.$error }"
                          >
                            <label for="contact">Contact:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="contact"
                              placeholder="Enter Contact"
                              v-model.trim="details.contact"
                              @input="setTouch('contact')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.contact.required && $v.details.contact.$error"
                            >Contact is required</div>
                          </div>
                        </div>
                        <!-- contactPerson -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.contactPerson.$error }"
                          >
                            <label for="contactPerson">Contact Person:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="contactPerson"
                              placeholder="Contact Person"
                              v-model.trim="details.contactPerson"
                              @input="setTouch('contactPerson')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.contactPerson.required && $v.details.contactPerson.$error"
                            >Contact Person is required</div>
                          </div>
                        </div>
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
  //   minLength,
  //   maxLength,
  //   between,
  //   sameAs,
  contact
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
        contact: "",
        contactPerson: "",

        submitStatus: null,
        noDataFound: false
      }
    };
  },

  validations: {
    details: {
      name: {
        required
      },
      contact: {
        required
      },
      contactPerson: {
        required
      }
    }
  },

  created() {
    this.getParticularCompanyById();
  },

  methods: {
    //this method use nameerror
    setTouch(fields) {
      name;
      if (fields == "name") {
        this.$v.details.name.$touch();
      } else if (fields == "contactPerson") {
        this.$v.details.contactPerson.$touch();
      } else if (fields == "contact") {
        this.$v.details.contact.$touch();
      }
    },
    getParticularCompanyById() {
      service.getCompanyDataById(this.$route.params.id, (err, result) => {
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
        service.editCompany(this.details, (err, result) => {
          if (result.status === 200) {
            this.noDataFound = false;
            this.details = result.data.data;
            this.$toaster.success("Company Updated Successfully");
            this.$router.push("/viewCompany");
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


