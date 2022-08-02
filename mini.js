const fiter_btns = document.querySelectorAll(".filter-btn");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

function closeMenu(){
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () =>{
    if(!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {
        closeMenu();
    }
});

links.forEach( link => link.addEventListener("click", () => closeMenu()));


filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add('active');
    
        let filterValue = btn.dataset.filter;

        $(".grid").isotope({filter: filterValue });
    });
});

$(".grid").isotope ({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
});