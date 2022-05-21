const printSelectCard = (container, data) => {
    console.log(data)
        const { id, name, price, image, image2, image3, description } = data;
        container.innerHTML += `
        <div class="container d-flex justify-content-center">
            <div class="row d-flex justify-content-center">
                <div class="col-4 d-flex flex-row">
                    <div class="d-flex flex-column pe-3">
                    <img class="w-100 pb-3" src="${image2}" alt="Frame-20" border="0">
                    <img class="w-100 pb-3" src="${image3}" alt="Frame-20" border="0">
                    </div>
                    <img src="${image}" alt="Rectangle-7" border="0">
                </div>
                <div class="col-4">
                    <h1>Crown Sweatshirt</h1>
                    <h3>$ ${price}</h3>
                    <div class="d-flex flex-column my-3">
                        <p>Size</p>
                        <div class="d-flex">
                            <button class="btn rounded-circle border me-2">S</button>
                            <button class="btn rounded-circle border me-2">M</button>
                            <button class="btn rounded-circle border me-2">L</button>
                            <button class="btn rounded-circle border me-2">XL</button>
                            <button class="btn rounded-circle border me-2">XXL</button>
                        </div>
                    </div>
                    <button class="btn btn-dark w-100 my-2 rounded-0" id="add-cart">ADD TO CART</button>
                    <button class="btn btn-primary w-100 my-2 rounded-0" id="buy-now">BUY IT NOW</button>
                    <p class="mt-5">${description}</p>
                </div>
            </div>
        </div>
        `
}

export default printSelectCard;