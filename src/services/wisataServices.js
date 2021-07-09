import {api} from "../plugins/axios"

export const getWisataBook = async() => {
  try {
    let response= await api.get("/wisatabook")
    return response;
  } catch (error) {
    console.log(error);
  }
}