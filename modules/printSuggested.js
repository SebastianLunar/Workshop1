import GetData from "../helpers/getData.js";

const printSuggested = async (url, container) => {
    const { data } = await GetData(url);
    let card;
    let id = localStorage.getItem("selected")
    data.forEach(element => {
        if (element.id != id) {
            const { name, image, price, id: elementid } = element;
            card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("id", elementid)
            card.innerHTML = `
        <img src="${image}" id =${elementid} class="card-image-top w-100" alt="Rectangle-7" border="0">
            <div class="card-body" id =${elementid}>
                <h5 class="card-title" id =${elementid}>${name}</h5>
                <strong>
              <p class="card-text" id =${elementid}>$ ${price}</p>
                </strong>
            </div>
        </a>
      `;
            container.appendChild(card);
        }
    });
}

export default printSuggested;