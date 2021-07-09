<template>
  <v-app :color="$vuetify.theme.dark == darkmode">
    <v-container :fluid="true">
    <Navbar @mode="modeApp" />
    <v-main>
      <router-view />
    </v-main>
    </v-container>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Wisata book, Adrian Fathur S</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  async mounted() {
    await this.$store.dispatch("wisata/getWisataData");
    await this.$store.dispatch("wisata/selectImage","All")
  },
  data: () => ({
    darkmode: false,
  }),
  methods: {
    modeApp(value) {
      console.log("ini values:", value);
      this.darkmode = value;
      this.$vuetify.theme.dark = value;
    },
  },
};
</script>
<style >
@media(max-width:960px){
  .container{
    max-width : 900px ;
    width: 100% !important;
    padding: 12px !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
}
</style>
