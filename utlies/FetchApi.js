import axois from "axios";
 export const BASE_URL ="https://bayut.p.rapidapi.com"
 export const options = {
    url: BASE_URL,
    headers: {
      'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  export const FetchAPI=async (url)=>{
const {data} = await axois.get((url),options);
return data;

  }
