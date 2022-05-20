const formulario = document.querySelector(".form");
let newproduct = {}

const currency = function(number){
    return new Intl.NumberFormat('sp-ES',).format(number);
};

document.addEventListener('DOMContentLoaded', () => {
    let contNav = document.getElementById('containerNav');
    Navbar(contNav);
    let contFooter = document.getElementById('containerFooter');
    Footer(contFooter);
})

formulario.addEventListener("submit", function (c) {
    c.preventDefault()

    newproduct.name = document.getElementById('name').value;
    newproduct.description = document.getElementById('description').value;
    newproduct.img = document.getElementById('image').value;
    newproduct.tag = document.getElementById('tag').value;
    newproduct.price = document.getElementById('price').value;
    newproduct.precio = "$" + currency(newproduct.price)

    fetch('https://retofinal-primal.herokuapp.com/productos', {
        method: 'POST',
        body: JSON.stringify(newproduct),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Tu producto ha sido agregado',
            showConfirmButton: false,
            timer: 3000
        });
        window.location.reload();
    })
})