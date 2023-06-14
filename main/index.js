var nav = document.querySelector("nav");
var dropdown = document.querySelector('ul')

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-light", "shadow");
        dropdown.classList.add('bg-light');
    } else {
        nav.classList.remove("bg-light", "shadow");
        dropdown.classList.remove('bg-light');
    }
});
function change() {
    nav.classList.add("bg-light");
    

};
