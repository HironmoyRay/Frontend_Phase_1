const togglerDiv = document.querySelector(".toggler-div")
const toggleBar = document.getElementById("toggle-bar");

let toggle = true;


togglerDiv.addEventListener("click",()=>{
   
        if(toggle){
        console.log(toggleBar);
        toggleBar.classList.remove("toggle-menu")
        toggleBar.classList.add("toggle-cross")
        toggle=!toggle;
        console.log(toggle);
        }
        else{
            console.log(toggleBar);
            toggleBar.classList.remove("toggle-cross")
            toggleBar.classList.add("toggle-menu")
            toggle=!toggle;
            console.log(toggle);
        }

       
    
})