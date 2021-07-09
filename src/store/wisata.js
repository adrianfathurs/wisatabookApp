import * as wisataService from "../services/wisataServices"
export default ({
  namespaced:true,
  state:{
    dataWisata:[],
    dataCatalog:[],
    dataImage:[],//semua foto
    dataImageIndex:[],//hanya caption foto saja
    dataImageSelected:[],
  },
  getters:{
    dataCatalogGetters(state){
      return state.dataCatalog;
    },
    dataImagesIndexGetters(state){
        var index=[];
        for(var k=0;k<state.dataImage.length;k++){
          index[k]=state.dataImage[k].caption;
          state.dataImageIndex[k]=state.dataImage[k].caption;
        }
        state.dataImageIndex= [...new Set(index)]
        state.dataImageIndex.unshift("All")
        return state.dataImageIndex
    },
    dataImagesGetters(state){
      return state.dataImage;
    },
    dataImageSelectedGetters(state){
      return state.dataImageSelected;
    }
  },
  mutations:{
    wisataMutate(state,payload){
      state.dataWisata=payload;// load response dan push ke state dataWisata
      state.dataCatalog=payload[0].catalog_data;//catalog data ini ngga ada id nya
      state.dataImage=payload[0].images;//catalog data ini ngga ada id nya
    },
    selectImagesMutate(state,payload){
      if(payload != "All"){ 
          var resultFilter=state.dataImage.filter(m => { return m.caption == payload })
          state.dataImageSelected=resultFilter;
        }else{
          state.dataImageSelected=state.dataImage
        }   
    }
  },
  actions:{
    async getWisataData(context){
      let response=await wisataService.getWisataBook();
      context.commit("wisataMutate",response.data)
    },
    async selectImage(context,payload){
      context.commit("selectImagesMutate",payload)
      
    }
  },
  
})
