
let input =document.querySelector("#input");
const button=document.querySelectorAll("button");

button.forEach(Element =>{
    Element.addEventListener("click" ,(e)=>{
        // console.log(e.target.textContent)
        console.log(e.target.textContent)

        if(e.target.textContent==="C"){
        input.innerText="";
        }
        else if(e.target.textContent === "<"){
        input.innerText =input.innerText.slice(0,-1);
        }
        else if(e.target.textContent === "="){
            input.innerText =eval(input.innerText); //eval se likhe nhi aaata operator
            }
            else{
                input.innerText += e.target.textContent;
            }
            input.scrollLeft =input.scrollWidth; //right taraf aajata hai cursor
    })
});



// let input= document.getElementById("input");
// let button = document.querySelectorAll("button");

// button.forEach(element => {
//     element.addEventListener("click",(e)=>{
//            console.log(e.target.textContent)

//     if (e.target.textContent === "C") {
//       input.innerText= "";
//     } else if (e.target.textContent === "<") {
//       input.innerText = input.innerText.slice(0, -1);
//     } else if (e.target.textContent === "=") {
//       input.innerText = eval(input.innerText);
//     } else {
//       input.innerText += e.target.textContent;
//     }       
//     input.scrollLeft = input.scrollWidth;  
//     })
// });