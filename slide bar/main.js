
threeDots = document.querySelector(".three-dots");
 
 container=document.querySelector(".container");
   cut = document.querySelector(".cut");

threeDots.addEventListener("click",()=>{
   container.Style.width='50vw';
});

cut.addEventListener("click",()=>{
    container.Style.width='0';
});