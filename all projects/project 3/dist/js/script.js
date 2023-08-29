const header_btn = document.querySelector(".header__btn");
const header_menu = document.querySelector(".header__menu");
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');


let showmenu = false;

header_btn.addEventListener('click', togglemenu);

function togglemenu(){
    if(!showmenu){
        header_menu.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        showmenu = true;
    }else{
        header_menu.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        showmenu = false;
    }
}

console.log("hello fucker");