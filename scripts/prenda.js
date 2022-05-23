import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";
import GetData from '../helpers/getData.js';
import PostData from "../helpers/postData.js";
import printSelectCard from '../modules/printSelectedCard.js';
import cuadro1 from '../modules/printCuadro1.js';
import cuadro2 from '../modules/printCuadro2.js';
import { productos } from '../helpers/urls.js';
import { carrito } from '../helpers/urls.js';
import printSuggested from '../modules/printSuggested.js';
import printModal from '../modules/printModal.js';
const elmodal = document.getElementById("modal2")

document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('deployer')) {
        elmodal.classList.add("is-visible");
    } else if (target.classList.contains('close-modales')) {
        elmodal.classList.remove("is-visible");
    }
})

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('#main-container');
    const nav = document.querySelector("nav#navbar");
    const foot = document.getElementById("containerFooter");
    const cont2 = document.getElementById("conteSugerencias");
    const contmodal = document.getElementById("modal2")
    let id = localStorage.getItem("selected");
    const { data } = await GetData(productos + '/' + id);
    navbar(nav);
    footer(foot);
    printSelectCard(container, data);
    printSuggested(productos, cont2);
    printModal(contmodal, data)
})

document.addEventListener('click', ({ target }) => {
    if ((target.classList.contains('card-image-top')) || (target.classList.contains('card-body')) || (target.classList.contains('card-title')) || (target.classList.contains('card-text'))) {
        let id = target.id
        localStorage.setItem("selected", id)
        window.location.href = "../pages/prenda.html"
    }
})

document.addEventListener('click', async ({ target }) => {
    if (target.classList.contains('llevar')) {
        let id = localStorage.getItem("selected");
        const { data } = await GetData(productos + '/' + id);        
        PostData(carrito, data)
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 3000
        });
    }
})

document.addEventListener('click', async (e) => {
    const container = document.querySelector('#main-container');
    let id = localStorage.getItem("selected");
    const { data } = await GetData(productos + '/' + id);
    if (e.target.id === "cuadro-1") {
        cuadro1(container, data);
    }
    if (e.target.id === "cuadro-2") {
        cuadro2(container, data);
    }
    if (e.target.id === "cuadro-3") {
        printSelectCard(container, data);
    }
})