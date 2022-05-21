import printCard from "../modules/printCard.js";
import {productos} from "../helpers/urls.js";
import GetData from "../helpers/getData.js"
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