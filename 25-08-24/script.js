const itemOneDetails = document.querySelector(".itemOne-details")
const itemOne = document.querySelector(".itemOne")
let openOne = false;
const handleItemOne = () =>{
    
    if(openOne){
        itemOneDetails.style.display="none"
        openOne=false;
    }
    else{
        
        itemOneDetails.style.display="block"
        openOne = true;
    }
}

const itemTwoDetails = document.querySelector(".itemTwo-details")
const itemTwo = document.querySelector(".itemTwo")
let openTwo = false;
const handleItemTwo = () =>{
    
    if(openTwo){
        itemTwoDetails.style.display="none"
        openTwo=false;
    }
    else{
        
        itemTwoDetails.style.display="block"
        
        openTwo = true;
    }
}
const itemThreeDetails = document.querySelector(".itemThree-details")
const itemThree = document.querySelector(".itemThree")
let openThree = false;
const handleItemThree = () =>{
    
    if(openThree){
        itemThreeDetails.style.display="none"
        openThree=false;
    }
    else{
        
        itemThreeDetails.style.display="block"
        openThree = true;
    }
}