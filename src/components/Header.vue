<template>
  <div>
    <div class="top-bar">
      <div class="logo">
        <a title="Admin" class="display-4">WMS</a>
        <div
          class="menu-options"
          @click="hamburgerChange"
          :class="{ active: $store.state.hamburger }"
        >
          <span class="menu-action">
            <i></i>
          </span>
        </div>
      </div>
      <div class="quick-links">
        <ul>
          <li>
            <router-link to="/#">
              <button title="Logout" class="btn btn-danger btn-small" v-on:click="logout">
                <font-awesome-icon :icon="['fas', 'power-off']" class="fa-1x" />
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Top Bar -->
    <!-- {{$store.state.sideNav}} -->
    <header
      class="side-header light-skin opened-menu"
      :class="{ 'nav-width': $store.state.hamburger }"
    >
      <div class="admin-details">
        <h3 style="text-transform: capitalize;">WMS Admin</h3>
        <i></i>
      </div>
      <div class="menu-scroll">
        <div class="side-menus">
          <span>MAIN LINKS</span>
          <!-- <nav ng-include="template.menu"></nav> -->
          <nav>
            <div class="icon-active-color border-bottom border-top">
              <router-link to="/viewUser">
                <div class="link-text p-3">
                  <font-awesome-icon :icon="['fas', 'users']" class="fa-1x mr-2" />USER
                </div>
              </router-link>
            </div>
            <div class="icon-active-color border-bottom border-top">
              <router-link to="/viewCompany">
                <div class="link-text p-3">
                  <font-awesome-icon :icon="['far', 'building']" class="fa-1x mr-2" />COMPANY
                </div>
              </router-link>
            </div>
            <div class="icon-active-color border-bottom border-top">
              <router-link to="/viewInbound">
                <div class="link-text p-3">
                  <font-awesome-icon :icon="['far', 'user']" class="fa-1x mr-2" />IN-BOUND
                </div>
              </router-link>
            </div>
            <div class="icon-active-color border-bottom border-top">
              <router-link to="/viewOutbound">
                <div class="link-text p-3">
                  <font-awesome-icon :icon="['far', 'user']" class="fa-1x mr-2" />OUT-BOUND
                </div>
              </router-link>
            </div>
            <div class="icon-active-color border-bottom border-top">
              <router-link to="/viewReport">
                <div class="link-text p-3">
                  <font-awesome-icon :icon="['far', 'user']" class="fa-1x mr-2" />REPORT
                </div>
              </router-link>
            </div>
            <div class="icon-active-color border-bottom border-top">
              <router-link to="/viewLogs">
                <div class="link-text p-3">
                  <font-awesome-icon :icon="['far', 'user']" class="fa-1x mr-2" />LOGS
                </div>
              </router-link>
            </div>
          </nav>
        </div>
      </div>
      <!-- Menu Scroll -->
    </header>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isActive: false
    };
  },
  // This is use for menu
  methods: {
    ...mapMutations({
      hamburgerChange: "changeHamburger" // map `this.increment()` to `this.$store.commit('increment')`
    }),

    logout() {}
  }
};
</script>
