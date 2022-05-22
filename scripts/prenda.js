import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";
import GetData from '../helpers/getData.js';
import {productos} from '../helpers/urls.js';
import printSelectCard from '../modules/printSelectedCard.js';
import printSuggested from "../modules/printSuggested.js";


document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('#main-container');
    const nav = document.querySelector("nav#navbar");
    const foot = document.getElementById("containerFooter");
    const cont2 = document.getElementById("conteSugerencias");
    let id = localStorage.getItem("selected");
    const { data } = await GetData(productos+'/'+id);
    navbar(nav);
    footer(foot);
    printSelectCard(container, data);
    printSuggested(productos, cont2);
})
