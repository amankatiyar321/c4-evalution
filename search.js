import { appendData } from "./main";
import { apiCall  } from "./scripts/main.js";

let term=localStorage.getItem("search_term");
async function storData(data){
   let  url =`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`;
    let f=await apiCall(url);
    let g= document.getElementById("main");
    appendData(f,g);
}
storData(term);
export default storData;
