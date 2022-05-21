import navbar from "../modules/navbar.js";
import PostData from "../helpers/postData.js";
import footer from "../modules/footer.js";

const formulario = document.querySelector(".form");
let newproduct = {}
let url ="https://principe-fresco-api.herokuapp.com/products"

const currency = function (number) {
    return new Intl.NumberFormat('sp-ES',).format(number);
};

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector("nav#navbar");
    navbar(nav);
    const foot = document.getElementById("containerFooter");
    footer(foot);
})

formulario.addEventListener("submit", function (c) {
    c.preventDefault()


    newproduct.name = document.getElementById('name').value;
    newproduct.description = document.getElementById('description').value;
    newproduct.img = document.getElementById('image').value;
    newproduct.price = document.getElementById('price').value;
    newproduct.precio = "$" + currency(newproduct.price)

    console.log(newproduct)
    PostData (url , newproduct)
    Swal.fire({
        icon: 'success',
        title: 'Tu producto ha sido agregado',
        showConfirmButton: false,
        timer: 3000
    });

    formulario.reset()
})