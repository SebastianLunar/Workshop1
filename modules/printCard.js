import GetData from "../helpers/getData.js";

const printCard = async (url, container) => {
    const { data } = await GetData(url);
    console.log(data)
    let card;
    data.forEach(element  => {
        const {name, image, price, id} = element;
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${image}" id="${id}" class="card-image-top w-100" alt="Rectangle-7" border="0">
        <div class="card-body" id="${id}">
          <h5 class="card-title">${name}</h5 id="${id}">
          <strong>
            <p class="card-text" id="${id}">$ ${price}</p>
          </strong>
        </div>
      `;
      container.appendChild(card);
    });
}

export default printCard;