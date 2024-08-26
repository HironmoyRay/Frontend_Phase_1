const container = document.querySelectorAll(".item-container");

for (let i=0; i<container.length;i++){
    container[0].children[1].style.display="block"
    let details = container[i].children[1];
    details.style.display = "none";
    container[i].children[0].addEventListener('click',()=>{
        console.log(i);

        container.forEach((item,index)=>{
            // console.log(i,index);
            if(i!=index){
                item.children[1].style.display='none'
            }
        })

        if(details.style.display === 'block'){
            details.style.display = "none";
            }
        else{
            details.style.display = "block";
            }
        })
    }






