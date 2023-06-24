type="text/javascript"
window.addEventListener("scroll", function(){
    var header =document.querySelector("header");
    header.classList.toggle("header-down", window.scrollY>700);


})