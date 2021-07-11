<template>
  <v-app-bar app :elevate-on-scroll="true" :color="colorNav">
    <div class="container">
      <DarkModeSwitch class="float-right" @switched="onSwitched" :initialState="isDarkModeEnabled" />
    </div>
  </v-app-bar>
</template>
<script>
import DarkModeSwitch from "vue-dark-mode-switch";
import "vue-dark-mode-switch/dist/vue-dark-mode-switch.css";
export default {
  name:"Navbar",
  data() {
    return {
      switch1: false,
      colorNav: "white",
      isDarkModeEnabled: false,
    };
  },
  components: {
    DarkModeSwitch,
  },
  methods: {
    onSwitched(isSwitched) {
      if (isSwitched) {
        this.colorNav = "#121218";
      } else {
        this.colorNav = "white";
      }
      this.$emit("mode", isSwitched);
    },
  },
};
</script>
<style >

  .container{
    max-width : 900px ;
    width: 100% !important;
    padding: 30px !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }

</style>