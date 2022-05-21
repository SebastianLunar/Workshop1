import GetData from "../helpers/getData.js";

const printCard = async (url, container) => {
    const { data } = await GetData(url);
    console.log(data)
    let card;
    data.forEach(element  => {
        const {name, image} = element;
        card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <a href="./prenda.html">
        <img src="${image}" class="card-image-top" alt="Rectangle-7" border="0">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <strong>
              <p class="card-text">$ ${price}</p>
                </strong>
            </div>
        </a>
      `;
    });
    container.appendChild(card);
}

export default printCard;