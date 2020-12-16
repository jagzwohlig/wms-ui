<template>
  <div class="deleteModal">
    <span>
      <b-button
        v-b-modal="myModal._id"
        variant="danger"
        class="content-modal"
        @click="$bvModal.show(myModal._id)"
      >
        <b-icon-trash></b-icon-trash>
      </b-button>

      <b-modal :id="myModal._id" hide-footer hide-header-border>
        <template v-slot:modal-title></template>
        <div class="d-block text-center">
          <h3>
            Are you sure you want to delete this
            <span class="font-weight-bold">{{ myModal.title }}</span> API !?
          </h3>
        </div>
        <div class="text-center">
          <b-button class="mt-3 mr-2 btn-success" md @click="onOkClick(myModal._id)">OK</b-button>
          <b-button class="mt-3 btn-danger" md @click="cancel(myModal._id)">CANCEL</b-button>
        </div>
      </b-modal>
    </span>
  </div>
</template>
<script>
export default {
  props: ["myModal"],
  event: "conformModal",
  methods: {
    onOkClick(modalId) {
      this.$emit("conformModal", modalId);
      this.$root.$emit("bv::hide::modal", modalId, "#btnShow");
    },
    cancel(modalId) {
      this.$root.$emit("bv::hide::modal", modalId, "#btnShow");
    }
  }
};
</script>
