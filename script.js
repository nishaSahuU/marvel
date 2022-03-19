



document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('page-loader');
    loadNow(1);
});

/*----------
toggle navbar
------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
navToggler.classList.toggle("active");
document.querySelector(".nav").classList.toggle("open");

}

/*-----closes nav when clicking on a nav item----*/

document.addEventListener("click", function(e){
if(e.target.closest(".nav-item")) {
    toggleNav();
}
});



/*--------sticky header---------*/
window.addEventListener("scroll", function () {
if (this.pageYOffset > 60) {
    this.document.querySelector(".header").classList.add("sticky");
}
else {
    this.document.querySelector(".header").classList.remove("sticky");
}
})

/*--------character tabs--*/
const characterTabs = document.querySelector(".character-tabs");
characterTabs.addEventListener("click", function (e) {
if (e.target.classList.contains("character-tab-item") && !e.target.classList.contains("active")) {
    const target = e.target.getAttribute("data-target");
    characterTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const characterSection = document.querySelector(".character-section");
    characterSection.querySelector(".character-tab-content.active").classList.remove("active");
    characterSection.querySelector(target).classList.add("active");
    
}
});










