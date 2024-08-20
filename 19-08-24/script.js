const home = document.querySelector(".fa-house");
console.log(home);
const url = "#";
home.addEventListener('click',()=>{
    window.location.href = url;
})



window.onscroll = function(){
    goToTop();
}

function goToTop(){
    const home = document.querySelector(".fa-house");
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        
        home.style.display = "block"
    }
    else{
    home.style.display = "none"
    }
}

