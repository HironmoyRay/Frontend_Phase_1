const container = document.querySelectorAll(".item-container");
console.log(container)
for (let i=0; i<container.length;i++){
    container[i].children[0].addEventListener('click',()=>{
        console.log(container[i].children[1]);
        let details = container[i].children[1];
        if(details.style.display === 'block'){
            details.style.display = "none";
        }
        else{
            
            details.style.display = "block";
        }
    })
}

// const itemOne = document.querySelector(".itemOne")
// const itemOneDetails = document.querySelector(".itemOne-details")
// let openOne = false;
// const handleItemOne = () =>{
//     if(openOne){
//         itemOneDetails.style.display="none"
//         openOne=false;
//     }
//     else{
//         itemOneDetails.style.display="block"
//         openOne = true;
        
//     }
// }

// const itemTwo = document.querySelector(".itemTwo")
// const itemTwoDetails = document.querySelector(".itemTwo-details")
// let openTwo = false;
// const handleItemTwo = () =>{
    
//     if(openTwo){
//         itemTwoDetails.style.display="none"
//         openTwo=false;
//     }
//     else{
//         itemTwoDetails.style.display="block"
//         openTwo = true;
//     }
// }

// const itemThree = document.querySelector(".itemThree")
// const itemThreeDetails = document.querySelector(".itemThree-details")
// let openThree = false;
// const handleItemThree = () =>{
//     if(openThree){
//         itemThreeDetails.style.display="none"
//         openThree=false;
//     }
//     else{
//         itemThreeDetails.style.display="block"
//         openThree = true;
//     }
// }