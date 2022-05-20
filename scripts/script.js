import GetData from "../helpers/getData.js"
import navbar from "../modules/navbar.js";

const container = document.getElementById('containerCards');

document.addEventListener('DOMContentLoaded', async () => {
    const nav = document.querySelector("nav#navbar");
    navbar(nav);
})
