let rightHide = document.getElementById("right-hide")
let leftHide = document.getElementById("left-hide")
let rightContent = document.getElementById("right-content")
let leftContent = document.getElementById("left-content")
let hide = document.getElementById("hide")


rightHide.addEventListener("click", ()=>{
    if(rightContent.style.display == "none"){
       rightContent.style.display = "block"
    }else{
        rightContent.style.display = "none"
    }
});


leftHide.addEventListener("click", ()=>{
    if(leftContent.style.display == "none"){
        leftContent.style.display = "block"
        }else{
            leftContent.style.display = "none"
            }
});


hide.addEventListener("click",()=>{
    if(rightContent.style.display == "none"){
        rightContent.style.display = "block"
       
        }else{
            rightContent.style.display = "none"
            
            }
});