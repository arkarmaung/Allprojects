const humburger = document.querySelector("#humburger");
const header = document.querySelector(".header");
humburger.addEventListener("click", function(){

    if (header.classList.contains("open")){
        header.classList.remove("open");
        header.classList.remove("easein");
        header.classList.add("easeout");
        
    }else{
        header.classList.add("open");
        header.classList.add("easein");
        header.classList.remove("easeout");
    }
})