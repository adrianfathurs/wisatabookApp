<template>
<div class="mt-2">
  <v-tabs
      :light="false"
      :dark="false"
      show-arrows
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
      <v-tab
        v-for="i in dataImageIndex"
        :key="i"
      >
        <v-btn outlined rounded @click="imageIndexFunc(i)">{{i}}</v-btn>
      </v-tab>
    </v-tabs>
  <v-row class="pt-4">
    <v-col
      v-for="(n,index) in dataImageSelected"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="n.size_sm"
        :lazy-src="n.size_sm"
        alt="content"
        aspect-ratio="1"
        class="grey lighten-2"
        @click="openModal(n.size_sm)"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    
    </v-col>
  </v-row>
  <v-dialog
      v-model="dialog"
      width="1200px"
  >
    <v-card>
    <v-img
      :src="imageZoom"
      :lazy-src="imageZoom"
      size="1200"
      >
      </v-img> 
    </v-card>
  </v-dialog>
</div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      dialog:false,
      imageZoom:"",
    }
  },
  mounted(){
    
  },
  computed:{
    ...mapGetters({
      dataImageIndex:"wisata/dataImagesIndexGetters",
      dataImageSelected:"wisata/dataImageSelectedGetters",
    })
  },
  methods:{
    imageIndexFunc(i){
      this.$store.dispatch("wisata/selectImage",i)
    },
    openModal(value){
      console.log(value)
      this.dialog=value;
      this.imageZoom=value;
    }
  },
}
</script>