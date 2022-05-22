import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";


import PostData from "../helpers/postData.js";

const form = document.getElementById('form');
let url = "https://principe-fresco-api.herokuapp.com/usuarios";

document.addEventListener('DOMContentLoaded', async () => {
  const nav = document.querySelector("nav#navbar");
  navbar(nav);
  const foot = document.getElementById("containerFooter");
  footer(foot);
})


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
  localStorage.setItem('usuario', infoUser.usuario);

  Swal.fire({
    icon: 'success',
    title: 'Gracias por tu registro!',
    showConfirmButton: false,
    timer: 3000
  });

  window.location.href = "../index.html";
  
})

