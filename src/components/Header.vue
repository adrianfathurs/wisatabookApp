<template>
 
    <v-row >
      <v-col lg="6" md="6" class="text-center">
        <v-avatar
          color="primary"
          size="250px"
        >
          <v-img
            :src="dataCatalog.hero_image"  
            :lazy-src="dataCatalog.hero_image"
            alt="Avatar"
            aspect-ratio="1920"
            >
          </v-img>
        </v-avatar>
      </v-col>
      <v-col class="center mt-12" lg="6" md="6">
        <v-row>
            <h1 class="center">{{dataCatalog.name}}</h1> 
        </v-row>
        <v-row class="center pl-1">
            <v-rating
              class="center"
              icon-label="$vuetify.rating.ariaLabel.icon"
              background-color="warning lighten-1"
              color="warning"
              readonly
              :length="dataCatalog.star_rating"
              size="20"
              :value="dataCatalog.star_rating"
            ></v-rating>
            <v-btn class="center" :small="true" elevation="2" outlined>
              {{dataCatalog.category}}
            </v-btn>
        </v-row>
        <v-row>
            <span class="center">{{dataCatalog.address}}</span> 
        </v-row>
        <v-row class="center pt-2">
          <div class="center">
            <v-progress-circular
              :size="35"
              :width="4"
              :value="90"
              color="purple"
              
              >
              {{dataCatalog.review_rating}}
            </v-progress-circular>
            <span class="ml-2 pt-1 text-alignment-center"> <b>Excelent</b> | <b>{{dataCatalog.review_count}} reviews</b></span>
          </div>
        </v-row>
      </v-col>
      
      <v-tabs
          fixed-tabs
          slider-size="2"
          icons-and-text
          color="grey"
          
        >
          <v-tabs-slider color="grey"></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <p class="text-purple"><v-icon color="grey">mdi-menu</v-icon> Photos</p> 
          </v-tab>
        </v-tabs>
    </v-row>
 
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "HelloWorld",
  data: () => ({
   
  }),
  computed:{
    ...mapGetters({
      dataCatalog:"wisata/dataCatalogGetters"
    })
  }
};
</script>
<style>
@media(max-width: 467px){
  .center{
    text-align: center;
    margin: auto;
  }
}
</style>
