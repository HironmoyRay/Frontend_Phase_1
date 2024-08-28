const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const aside = document.querySelector("aside");
const ulDetails = document.querySelector(".ul-details");
const ulIcons = document.querySelector(".ul-icons");
const main =document.querySelector("main");

menu.addEventListener("click",()=>{

    menu.style.display = "none";
    cross.style.display = "flex";
    ulDetails.style.display='block'
    ulIcons.style.display='none'
    aside.style.width='300px';
    main.style.paddingLeft = "300px"
})

cross.addEventListener("click",()=>{
    
    menu.style.display = 'flex';
    cross.style.display = 'none'
    ulDetails.style.display = 'none';
    ulIcons.style.display = 'block'    
    aside.style.width='150px';
    main.style.paddingLeft = "150px"
})