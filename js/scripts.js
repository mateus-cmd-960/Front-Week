//Selecao

const menubtn=document.querySelector("#menu")
const closemenu=document.querySelector("#close-menu")
const menu=document.querySelector("#mobile-navbar")

const DesktopLinks=document.querySelectorAll("#navbar a")
const MobileLinks=document.querySelectorAll("#mobile-navbar a")
const allLinks=[...DesktopLinks, ...MobileLinks]

const slides = document.querySelectorAll(".banner")
const dots = document.querySelectorAll(".dot")
let slideIndex = 0;
//funcoes

function smoothScroll(e){
    e.preventDefault();

    const href = this.getAttribute("href");

    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top:offsetTop,
        behavior: "smooth"
    })

    setTimeout(()=>{
        if(menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active")
        }
    }, 500)
}

function showSlides(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideIndex++;

    if(slideIndex>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].classList.add("active")
    dots[slideIndex-1].classList.add("active")

    setTimeout(showSlides, 3000)
}

//Eventos
menubtn.addEventListener("click", (e)=>{
    menu.classList.add("menu-active")
})


closemenu.addEventListener("click", (e)=>{
    menu.classList.remove("menu-active")
})

allLinks.forEach( (link) =>{
    link.addEventListener("click", smoothScroll)
})

//inicializacao
showSlides()