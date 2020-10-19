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
                <a>Create Out-bound</a>
              </li>
            </ul>
          </div>

          <div class="heading-sec">
            <div class="row">
              <div class="col-md-4 column">
                <div class="heading-profile">
                  <h2>Create Out-bound</h2>
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
                        <!-- Company -->
                        <!-- <div>
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
                            />
                            <div
                              class="error"
                              v-if="!$v.details.company.required && $v.details.company.$error"
                            >Company is required</div>
                          </div>
                        </div>-->

                        <!-- InBound -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.InBound.$error }"
                          >
                            <label for="InBound">Bond No And Date:</label>
                            <select
                              class="form-control"
                              id="InBound"
                              placeholder="Enter In-Bound"
                              v-model.trim="details.InBound"
                              @select="setTouch('InBound')"
                            >
                              <option value="wms109">wms109</option>
                              <option value="wms2098">wms2098</option>
                              <option value="wms80">wms80</option>
                            </select>
                            <div
                              class="error"
                              v-if="!$v.details.InBound.required && $v.details.InBound.$error"
                            >In-Bound is required</div>
                          </div>
                        </div>

                        <!-- company name -->
                        <div class="form-group col">
                          <div>
                            <label>Company Name:</label>
                          </div>
                          <div>
                            <input
                              type="text"
                              class="form-control"
                              id="companyName"
                              placeholder="Company Name"
                              readonly
                            />
                          </div>
                        </div>

                        <div class="mx-3">
                          <div class="row">
                            <div class="col-md-4">
                              Received Weight
                              <span class="totalCount">: 100</span>
                            </div>
                            <div class="col-md-4">
                              Available Weight
                              <span class="totalWeight">: 15</span>
                            </div>
                          </div>
                          <hr />
                        </div>

                        <!-- weight -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.weight.$error }"
                          >
                            <label for="weight">Weight:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="weight"
                              placeholder="Enter Weight"
                              v-model.trim="details.weight"
                              @input="setTouch('weight')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.weight.required && $v.details.weight.$error"
                            >Weight is required</div>
                          </div>
                        </div>

                        <!-- exBoeNo -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.exBoeNo.$error }"
                          >
                            <label for="exBoeNo">Ex-Boe-No:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="exBoeNo"
                              placeholder="Enter Ex-Boe-No"
                              v-model.trim="details.exBoeNo"
                              @input="setTouch('exBoeNo')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.exBoeNo.required && $v.details.exBoeNo.$error"
                            >Ex-Boe-No is required</div>
                          </div>
                        </div>

                        <!-- exBoeDate -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.exBoeDate.$error }"
                          >
                            <label for="exBoeDate">Ex-Boe-Date:</label>
                            <input
                              type="date"
                              class="form-control"
                              id="exBoeDate"
                              placeholder="Enter Ex-Boe-Date"
                              v-model.trim="details.exBoeDate"
                              @input="setTouch('exBoeDate')"
                            />
                            <div
                              class="error"
                              v-if="!$v.details.exBoeDate.required && $v.details.exBoeDate.$error"
                            >Ex-Boe-Date is required</div>
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
                            >IGM is required</div>
                          </div>
                        </div>

                        <!-- releasedDate -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.releasedDate.$error }"
                          >
                            <label for="releasedDate">Released-Date:</label>
                            <input
                              type="date"
                              class="form-control"
                              id="releasedDate"
                              placeholder="Enter Released-Date"
                              v-model.trim="details.releasedDate"
                              @input="setTouch('releasedDate')"
                            />
                            <div
                              class="error"
                              v-if="
                                !$v.details.releasedDate.required && $v.details.releasedDate.$error
                              "
                            >Released-Date is required</div>
                          </div>
                        </div>

                        <!-- assessedValue -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.assessedValue.$error }"
                          >
                            <label for="assessedValue">Assessed-Value:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="assessedValue"
                              placeholder="Enter Assessed-Value"
                              v-model.trim="details.assessedValue"
                              @input="setTouch('assessedValue')"
                            />
                            <div
                              class="error"
                              v-if="
                                !$v.details.assessedValue.required &&
                                  $v.details.assessedValue.$error
                              "
                            >Assessed-Value is required</div>
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

                        <!-- bondType -->
                        <div>
                          <div
                            class="form-group col"
                            :class="{ 'form-group--error': $v.details.bondType.$error }"
                          >
                            <label for="bondType">Bond-Type:</label>
                            <select
                              class="form-control"
                              id="bondType"
                              placeholder="Enter Bond-Type"
                              v-model.trim="details.bondType"
                              @select="setTouch('bondType')"
                            >
                              <option value="normalEntry">Normal Entry</option>
                              <option value="spillEntry">Spill Entry</option>
                            </select>
                            <div
                              class="error"
                              v-if="!$v.details.bondType.required && $v.details.bondType.$error"
                            >Bond-Type is required</div>
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
                              type="text"
                              class="form-control"
                              id="deleteStatus"
                              placeholder="Enter Delete-Status"
                              v-model.trim="details.deleteStatus"
                              @select="setTouch('deleteStatus')"
                            >
                              <option value="true">True</option>
                              <option value="false">False</option>
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
import { required } from "vuelidate/lib/validators";
import headerCustom from "@/components/Header.vue";
import service from "../../service/apiService";

export default {
  components: {
    headerCustom
  },
  data() {
    return {
      details: {
        // company: null,
        InBound: null,
        exBoeNo: null,
        exBoeDate: null,
        igm: null,
        releasedDate: null,
        weight: null,
        assessedValue: null,
        duty: null,
        bondType: null,
        deleteStatus: null
      },
      noDataFound: false
    };
  },
  validations: {
    details: {
      // company: {
      //   required
      // },
      InBound: {
        required
      },
      exBoeNo: {
        required
      },
      exBoeDate: {
        required
      },
      igm: {
        required
      },
      releasedDate: {
        required
      },
      weight: {
        required
      },
      assessedValue: {
        required
      },
      duty: {
        required
      },
      bondType: {
        required
      },
      deleteStatus: {
        required
      }
    }
  },
  methods: {
    setTouch() {
      if (fields == "InBound") {
        this.$v.details.InBound.$touch();
      } else if (fields == "exBoeNo") {
        this.$v.details.exBoeNo.$touch();
      } else if (fields == "exBoeDate") {
        this.$v.details.exBoeDate.$touch();
      } else if (fields == "igm") {
        this.$v.details.igm.$touch();
      } else if (fields == "releasedDate") {
        this.$v.details.releasedDate.$touch();
      } else if (fields == "weight") {
        this.$v.details.weight.$touch();
      } else if (fields == "assessedValue") {
        this.$v.details.assessedValue.$touch();
      } else if (fields == "duty") {
        this.$v.details.duty.$touch();
      } else if (fields == "bondType") {
        this.$v.details.bondType.$touch();
      } else if (fields == "deleteStatus") {
        this.$v.details.deleteStatus.$touch();
      }
    },
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "OK";

        service.createOutbound(this.details, (err, result) => {
          console.log("resultresult", result);
          if (result.status === 200) {
            this.noDataFound = false;
            this.details = result.data.data;
            this.$toaster.success("Outbound Added Successfully");
            this.$router.push("/viewOutbound");
          } else {
            this.noDataFound = true;
            this.details = {};
          }
        });
      }
    },
    resetForm() {
      this.details = "blank";
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
