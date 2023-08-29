const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");

menu.addEventListener("click", function(){
    if(header.classList.contains('open')){
        header.classList.remove('open');
        header.classList.add("close");
    }else{
        header.classList.add("open");
        header.classList.remove("close");
    }
});

console.log("hello world!");