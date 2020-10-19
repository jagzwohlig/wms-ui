<template>
  <div>
    <div class="account-user-sec">
      <div class="account-sec">
        <div class="account-top-bar">
          <div class="container">
            <div class="logo">
              <a ui-sref="login" title="Admin">
                <h4>WMS Backend</h4>
              </a>
            </div>
          </div>
        </div>
        <div class="acount-sec">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col-md-4 col-md-offset-4">
                <div class="contact-sec formPart">
                  <!-- <b-form @submit.prevent="submit"> -->
                  <b-form v-on:submit.prevent="login">
                    <!-- Email -->
                    <div>
                      <div
                        class="form-group"
                        :class="{ 'form-group--error': $v.user.email.$error }"
                      >
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="name@gmail.com"
                          v-model.trim="user.email"
                          @input="setEmail()"
                        />
                        <div class="error" v-if="!$v.user.email.required && $v.user.email.$error">
                          Email is required
                        </div>
                      </div>
                    </div>
                    <!-- Email end -->
                    <!-- password -->
                    <div>
                      <label>Password</label>
                      <div
                        class="form-group floating-label-form-group controls"
                        :class="{ 'form-group--error': $v.user.password.$error }"
                      >
                        <div class="pass-box">
                          <input
                            type="password"
                            id="password"
                            class="form-control pass-box mr-2"
                            placeholder="Password"
                            v-model.trim="user.password"
                            @input="setPassword()"
                            required
                          />
                          <div class="input-group-addon icon-eye" v-if="!showPassword">
                            <a v-on:click="myPassword()">
                              <font-awesome-icon :icon="['far', 'eye-slash']" />
                            </a>
                          </div>
                          <div class="input-group-addon icon-eye" v-if="showPassword">
                            <a v-on:click="myPassword()">
                              <font-awesome-icon :icon="['fas', 'eye']" />
                            </a>
                          </div>
                        </div>
                        <div
                          class="error"
                          v-if="!$v.user.password.required && $v.user.password.$error"
                        >
                          Password is required
                        </div>
                      </div>
                    </div>
                    <div
                      class="table-body-contents text-center m-3 font-size-md font-weight-bold text-muted"
                      v-if="noDataFound"
                    >
                      Email Or Password Is Incorrect
                    </div>

                    <div class="form-group text-center">
                      <!-- <router-link to="/viewUser"> -->
                      <!-- <button class="btn btn-primary px-5" @click="login">Login</button> -->
                      <button type="submit" class="btn btn-primary px-5">Login</button>
                      <!-- </router-link> -->
                    </div>
                  </b-form>
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
/*
  Added By Siddhesh Salunkhe
*/
import { required, email } from "vuelidate/lib/validators";
import service from "../service/apiService";

export default {
  data() {
    return {
      showPassword: "",
      errors: [],
      user: {
        email: "",
        password: ""
      },
      show: true,
      /* Added By Siddhesh */
      noDataFound: false
    };
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    setEmail() {
      this.$v.user.email.$touch();
    },
    setPassword() {
      this.$v.user.password.$touch();
    },
    login() {
      this.$v.$touch();
      if (this.$v.user.$anyError) {
        this.user = {};
      } else {
        service.checkUserLogin(this.user, (err, result) => {
          if (result && result.status === 200) {
            this.noDataFound = false;
            this.user = result.data.data;
            this.$toaster.success("Login Successfully");
            this.$router.push("/viewUser");
          } else {
            this.noDataFound = true;
            this.user = {};
          }
        });
      }
    },

    myPassword() {
      const x = document.getElementById("password");
      if (x.type == "password") {
        x.type = "text";
        this.showPassword = true;
      } else {
        x.type = "password";
        this.showPassword = false;
      }
    }
  }
};
</script>
