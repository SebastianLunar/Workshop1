const mostrar = (container, data) => {
    container.innerHTML = ''
    data.forEach((product)=> {
        const { id, img, name, precio } = product;
        const div = document.createElement("div")
        div.classList.add("tarjeta")
        div.innerHTML = `
        <div class="producto">
            <img class= "cover" id="${id}" src="${img}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        </div>
        <div class="description">
            <a>${name}</a><br>
            <span>${precio}</span>
        </div>
        `

        container.appendChild(div)
    })
}