import printCard from "../modules/printCard.js";
import {productos} from "../helpers/urls.js";
import GetData from "../helpers/getData.js"
import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";


document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("container");
    await printCard(productos, container);
})

document.addEventListener('click', ({target})=>{
    if ((target.classList.contains('card-image-top'))||(target.classList.contains('card-body'))||(target.classList.contains('card-title'))||(target.classList.contains('card-text'))) {
        let id = target.id
        localStorage.setItem("selected", id)
    }
})

document.addEventListener('DOMContentLoaded', async () => {
    const nav = document.querySelector("nav#navbar");
    navbar(nav);
    const foot = document.getElementById("containerFooter");
    footer(foot);
})