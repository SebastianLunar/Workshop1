import printCard from "../modules/printCard.js";
import {carrito} from "../helpers/urls.js";
import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("container");
    const nav = document.querySelector("nav#navbar");
    const foot = document.getElementById("containerFooter");
    
    await printCard(carrito, container);
    navbar(nav);
    footer(foot);
})