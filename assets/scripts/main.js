let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");
let themeIcon = document.getElementById("theme-icon");
let logoIcon = document.getElementById("logo-icon");
let menuLinks = document.querySelectorAll("nav ul .menu-link")

menuLinks.forEach(function(ele){
    ele.onclick = function (){
        menuLinks.forEach(function(element){
            element.classList.remove("active");
        })
        this.classList.add("active");
    }
    
})


let overlay =document.createElement("div");
overlay.className="overlay";

menuIcon.onclick=()=>{
    menu.classList.add("menu-toggle");
    document.body.appendChild(overlay);
}
closeIcon.onclick=()=>{
    menu.classList.remove("menu-toggle");
    overlay.remove();
}




let mode = localStorage.getItem("mode");

function lightMode(){
    document.body.classList.remove("darkmode");
    logoIcon.src="assets/icons/logo-dark.webp";
    closeIcon.src="assets/icons/close-dark.webp";
    localStorage.setItem("mode","lightMode");
}
function darkMode(){
    document.body.classList.add("darkmode");
    logoIcon.src="assets/icons/logo-light.webp";
    closeIcon.src="assets/icons/close-light.webp";
    localStorage.setItem("mode","dark");
}

if(mode == "lightMode"){
    lightMode();
}else{
    darkMode();
}

themeIcon.onclick=()=>{
    mode = localStorage.getItem("mode");
    if(mode === "lightMode"){
        darkMode();
    }else{
        lightMode();
    }
}