import PostData from "../helpers/postData.js";

const form = document.getElementById('form');
let url = "https://principe-fresco-api.herokuapp.com/usuarios";


form.addEventListener('submit', async (e) => {
    e.preventDefault();

  
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    let infoUser = {
        id: crypto.randomUUID(),
        usuario,
        password
    }

  await PostData(url, infoUser);

  window.location.href = "../index.html";
  Swal.fire({
    icon: 'success',
    title: 'Gracias por tu registro!',
    showConfirmButton: false,
    timer: 3000
});
})

