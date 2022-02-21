

async function apiCall(url){
  try{
  

    let res =await fetch(url);

    let data = await res.json();
    return data;



  }catch (err){
      console.log("err:",err);
  }

}

function appendData(data,parent) {
   
    data.forEach(element => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src=element.urlToImage;
         
        let p = document.createElement("p");
          p.innerText=element.title;

          div.append(image,p);

          parent.append(div);


    });


}

export {apiCall,appendData};