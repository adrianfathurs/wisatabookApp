import Vue from 'vue'
import Vuex from 'vuex'
import wisata from "./wisata"
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    wisata:wisata
  }
})
