async function bar(){
  
        let res=await fetch("https://api.artic.edu/api/v1/artworks")
        let data=await res.json();
        await user(data.data)
  
}
async function user(data){
    


let html='';
data.forEach(artwork => {
    let htmlSegment=`<div>
                        <h3>${artwork.title}</h3>
                    </div>`;
    html +=htmlSegment;
    
});
let container=document.querySelector(".container");
container.innerHTML=html;
}
bar()




    
   
    