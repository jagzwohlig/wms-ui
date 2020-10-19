<template>
  <div>
    <div>
      <headerCustom></headerCustom>
      <div class="sidenav-part template main-content">
        <div>
          <!-- Back button if u want to use this breadcrumbs just remove the hidden class -->
          <div class="breadcrumbs">
            <ul>
              <li>
                <a title="Home" class="abc">Home</a>
              </li>
              <li>
                <a>Edit Inbound</a>
              </li>
            </ul>
          </div>

          <div class="heading-sec">
            <div class="row">
              <div class="col-md-4 column">
                <div class="heading-profile">
                  <h2>Edit Inbound</h2>
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
                      <form name="details" class="formPart text-left" @submit.prevent="submitForm">
                        <!-- Company -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.company.$error }"
                          >
                            <label for="company">Company:</label>
                            <select
                              class="form-control"
                              id="company"
                              placeholder="Enter Company"
                              v-model.trim="details.company"
                              @select="setTouch('company')"
                            >
                              <option v-for="item in companies" :key="item._id" :value="item._id">
                                {{
                                item.name
                                }}
                              </option>
                            </select>
                            <div
                              class="error"
                              v-if="!$v.details.company.required && $v.details.company.$error"
                            >Company is required</div>
                          </div>
                        </div>

                        <!-- inBondDate -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.inBondDate.$error }"
                          >
                            <label for="inBondDate">In-Bond Date:</label>
                            <input
                              type="date"
                              class="form-control"
                              id="inBondDate"
                              placeholder="Enter Bond Date"
                              v-model.trim="details.inBondDate"
                              @input="setTouch('inBondDate')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.inBondDate.required && $v.details.inBondDate.$error"
                            >Email is required</div>
                          </div>
                        </div>

                        <!-- bondNo -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.bondNo.$error }"
                          >
                            <label for="bondNo">Bond No:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="bondNo"
                              placeholder="Enter Bond No"
                              v-model.trim="details.bondNo"
                              @input="setTouch('bondNo')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.bondNo.required && $v.details.bondNo.$error"
                            >Phone No is required</div>
                          </div>
                        </div>

                        <!-- expDate -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.expDate.$error }"
                          >
                            <label for="expDate">Expiry Date:</label>
                            <input
                              type="date"
                              class="form-control"
                              id="expDate"
                              placeholder="Enter exp-Date"
                              v-model.trim="details.expDate"
                              @input="setTouch('expDate')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.expDate.required && $v.details.expDate.$error"
                            >Date is required</div>
                          </div>
                        </div>

                        <!-- boeNo -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.boeNo.$error }"
                          >
                            <label for="boeNo">Boe-No:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="boeNo"
                              placeholder="Enter Boe-No"
                              v-model.trim="details.boeNo"
                              @input="setTouch('boeNo')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.boeNo.required && $v.details.boeNo.$error"
                            >boeNo is required</div>
                          </div>
                        </div>

                        <!-- boeDate -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.boeDate.$error }"
                          >
                            <label for="boeDate">Boe-Date:</label>
                            <input
                              type="date"
                              class="form-control"
                              id="boeDate"
                              placeholder="Enter Boe-Date"
                              v-model.trim="details.boeDate"
                              @input="setTouch('boeDate')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.boeDate.required && $v.details.boeDate.$error"
                            >boe-Date is required</div>
                          </div>
                        </div>

                        <!-- igm -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.igm.$error }"
                          >
                            <label for="igm">IGM:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="igm"
                              placeholder="Enter IGM"
                              v-model.trim="details.igm"
                              @input="setTouch('igm')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.igm.required && $v.details.igm.$error"
                            >igm is required</div>
                          </div>
                        </div>

                        <!-- beWeight -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.beWeight.$error }"
                          >
                            <label for="beWeight">Be-Weight:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="beWeight"
                              placeholder="Enter Be-Weight"
                              v-model.trim="details.beWeight"
                              @input="setTouch('beWeight')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.beWeight.required && $v.details.beWeight.$error"
                            >be-Weight is required</div>
                          </div>
                        </div>

                        <!-- recievedWeight -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.recievedWeight.$error }"
                          >
                            <label for="recievedWeight">Recieved-Weight:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="recievedWeight"
                              placeholder="Enter Recieved Weight"
                              v-model.trim="details.recievedWeight"
                              @input="setTouch('recievedWeight')"
                            />
                            <div
                              class="error"
                              v-if="
                                !$v.details.recievedWeight.required &&
                                  $v.details.recievedWeight.$error
                              "
                            >Recieved-Weight is required</div>
                          </div>
                        </div>

                        <!-- value -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.value.$error }"
                          >
                            <label for="value">Value:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="value"
                              placeholder="Enter Value"
                              v-model.trim="details.value"
                              @input="setTouch('value')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.value.required && $v.details.value.$error"
                            >Value is required</div>
                          </div>
                        </div>

                        <!-- duty -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.duty.$error }"
                          >
                            <label for="duty">Duty:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="duty"
                              placeholder="Enter Duty"
                              v-model.trim="details.duty"
                              @input="setTouch('duty')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.duty.required && $v.details.duty.$error"
                            >Duty is required</div>
                          </div>
                        </div>

                        <!-- bondStatus -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.bondStatus.$error }"
                          >
                            <label for="bondStatus">Bond-Status:</label>
                            <select
                              class="form-control"
                              id="bondStatus"
                              placeholder="Enter Bond-Status"
                              v-model.trim="details.bondStatus"
                              @input="setTouch('bondStatus')"
                            >
                              <option value="closed">closed</option>
                              <option value="open">open</option>
                            </select>
                            <div
                              class="error"
                              v-if="!$v.details.bondStatus.required && $v.details.bondStatus.$error"
                            >Bond-Status is required</div>
                          </div>
                        </div>

                        <!-- deleteStatus -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.deleteStatus.$error }"
                          >
                            <label for="deleteStatus">Delete-Status:</label>
                            <select
                              class="form-control"
                              id="deleteStatus"
                              placeholder="Enter Delete-Status"
                              v-model.trim="details.deleteStatus"
                              @input="setTouch('deleteStatus')"
                            >
                              <option value="true">true</option>
                              <option value="false">false</option>
                            </select>
                            <div
                              class="error"
                              v-if="
                                !$v.details.deleteStatus.required && $v.details.deleteStatus.$error
                              "
                            >Delete-Status is required</div>
                          </div>
                        </div>

                        <!-- button -->
                        <div class="btnPart text-center">
                          <button
                            type="submit"
                            class="btn btn-success"
                            v-promise-btn="{ promise: isLoading }"
                          >Save</button>
                          <p
                            class="typo__p"
                            v-if="submitStatus === 'OK'"
                          >Thanks for your submission!</p>
                          <p
                            class="typo__p"
                            v-if="submitStatus === 'ERROR'"
                          >Please fill the form correctly.</p>
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
import { required, maxLength, between, sameAs } from "vuelidate/lib/validators";
import headerCustom from "@/components/Header.vue";
import service from "../../service/apiService";
import moment from "moment";

export default {
  components: {
    headerCustom
  },
  data() {
    return {
      isLoading: false,
      companies: [],
      details: {
        company: null,
        inBondDate: null,
        bondNo: null,
        expDate: null,
        boeNo: null,
        boeDate: null,
        igm: null,
        beWeight: null,
        recievedWeight: null,
        value: null,
        duty: null,
        submitStatus: null,
        bondStatus: null,
        deleteStatus: null
      }
    };
  },

  validations: {
    details: {
      company: {
        required
      },
      inBondDate: {
        required
      },
      bondNo: {
        required
      },
      expDate: {
        required
      },
      boeNo: {
        required
      },
      boeDate: {
        required
      },
      igm: {
        required
      },
      beWeight: {
        required
      },
      recievedWeight: {
        required
      },
      value: {
        required
      },
      duty: {
        required
      },
      bondStatus: {
        required
      },
      deleteStatus: {
        required
      }
    }
  },
  created() {
    this.getAllCompany();
    this.getParticularInboundById();
  },
  methods: {
    //this method use for validation error
    setTouch(fields) {
      console.log("demo");
      if (fields === "company") {
        this.$v.details.company.$touch();
      } else if (fields === "inBondDate") {
        this.$v.details.inBondDate.$touch();
      } else if (fields === "bondNo") {
        this.$v.details.bondNo.$touch();
      } else if (fields === "expDate") {
        this.$v.details.expDate.$touch();
      } else if (fields === "boeNo") {
        this.$v.details.boeNo.$touch();
      } else if (fields === "boeDate") {
        this.$v.details.boeDate.$touch();
      } else if (fields === "igm") {
        this.$v.details.igm.$touch();
      } else if (fields === "beWeight") {
        this.$v.details.beWeight.$touch();
      } else if (fields === "recievedWeight") {
        this.$v.details.recievedWeight.$touch();
      } else if (fields === "value") {
        this.$v.details.value.$touch();
      } else if (fields === "duty") {
        this.$v.details.duty.$touch();
      } else if (fields === "bondStatus") {
        this.$v.details.bondStatus.$touch();
      } else if (fields === "deleteStatus") {
        this.$v.details.deleteStatus.$touch();
      }
    },
    getParticularInboundById() {
      service.getInboundById(this.$route.params.id, (err, result) => {
        console.log(result.data);
        if (result.status === 200) {
          this.details = result.data.data;
          this.details.inBondDate = moment(result.data.data.inBondDate).format(
            "DD-MMM-YYYY"
          );
          this.details.expDate = moment(result.data.data.expDate).format(
            "DD-MMM-YYYY"
          );
          this.details.boeDate = moment(result.data.data.boeDate).format(
            "DD-MMM-YYYY"
          );
        } else {
          this.$toaster.error("Something went worng");
        }
      });
    },
    getAllCompany() {
      service.getAllCompaniesData((err, result) => {
        this.companies = result.data.data;
      });
    },
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "OK";
      }
    },
    //this method use for cancel button
    resetForm() {
      this.details = "blank";
      this.$nextTick(() => {
        this.$v.$reset();
      });
      this.$router.push("/viewInbound");
    }
  }
};
</script>
