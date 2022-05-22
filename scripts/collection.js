import printCard from "../modules/printCard.js";
import {productos} from "../helpers/urls.js";
import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("container");
    const nav = document.querySelector("nav#navbar");
    const foot = document.getElementById("containerFooter");
    
    await printCard(productos, container);
    navbar(nav);
    footer(foot);
})
document.addEventListener('click', ({target})=>{
    if ((target.classList.contains('card-image-top'))||(target.classList.contains('card-body'))||(target.classList.contains('card-title'))||(target.classList.contains('card-text'))) {
        let id = target.id
        localStorage.setItem("selected", id)
        window.location.href = "../pages/prenda.html"
    }
})