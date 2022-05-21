import printSuggested from "../modules/printSuggested.js";
import {productos} from "../helpers/urls.js";
import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";
import GetData from '../helpers/getData.js';
import showPrend from '../modules/showPrend.js';


document.addEventListener('DOMContentLoaded', async () => {
    const nav = document.querySelector("nav#navbar");
    navbar(nav);
    const foot = document.getElementById("containerFooter");
    footer(foot);
    const cont2 = document.getElementById("container");
    await printSuggested(productos, cont2);
})

// const container = document.querySelector('#containerPrend');
// container.addEventListener('DOMContentLoaded', async () => {
//     const containerPrend = document.getElementById('containerPrend');
//     const { data } = await GetData('https://principe-fresco-api.herokuapp.com/products/'+'1')
//     showPrend(containerPrend, data);
// });