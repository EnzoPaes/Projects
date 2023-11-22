const sideMenu = document.querySelector("aside");
const headerBar = document.querySelector("header");
document.addEventListener("click", (e)=>{
    if(!e.path.includes(sideMenu)){
        sideMenu.classList.remove("active");
    } 
});

document.addEventListener("scroll", (e)=>{
    if(window.scrollY > 50 && !headerBar.classList.contains("fixed")){
        headerBar.classList.add("fixed");
    }
    if(window.scrollY < 50){
        headerBar.classList.remove("fixed");
    }
});

function menuToggle(){
    sideMenu.classList.toggle("active");
}
