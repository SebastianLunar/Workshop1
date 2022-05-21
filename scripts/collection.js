import printCard from "../modules/printCard.js";
import {productos} from "../helpers/urls.js";
import GetData from "../helpers/getData.js"
import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";

const container = document.getElementById('containerCards');

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("container");
    await printCard(productos, container);
})

document.addEventListener('DOMContentLoaded', async () => {
    const nav = document.querySelector("nav#navbar");
    navbar(nav);
    const foot = document.getElementById("containerFooter");
    footer(foot);
})