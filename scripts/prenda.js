import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";
import GetData from '../helpers/getData.js';
import {productos} from '../helpers/urls.js';
import printSelectedCard from '../modules/printSelectedCard.js';


document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('#main-container');
    const nav = document.querySelector("nav#navbar");
    const foot = document.getElementById("containerFooter");
    const { data } = await GetData(productos+'/'+'2');
    navbar(nav);
    footer(foot);
    printSelectedCard(container, data);
})
