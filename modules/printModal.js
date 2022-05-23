const printModal = (container, data) => {
    const { id, name, price, image, image2, image3, description } = data;
    container.innerHTML = '';
    container.innerHTML += `
    <div class="modales-dialog">
    <header class="modales-header text-center">
        <button class="close-modales" aria-label="close modales" data-close>
            ✕
        </button>
    </header>
    <section class="modales-content" style="width: 33vw">
        <main class="container mt-5">
            <div class="my-5">
                <div>
                    <div class="d-flex">
                        <div>
                            <div>
                                <img src="${image}" style="width: 100px; clip-path: inset(0px 0px 50px 0px);"
                                    alt="Rectangle-1">
                            </div>
                        </div>
                        <div class="ms-3">
                            <h4>${name}</h4>
                            <h4>$ ${price}.00</h4>
                        </div>
                        <div>
                            1
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h4>Subtotal </h4> $ ${price}.00
                    </div>
                    <div>
                        <span style="font-size: 12px">Shipping, taxes, and discount codes calculated at checkout.</span> <br>
                        <button class="llevar btn btn-primary w-75 my-2 rounded-2" id="buy-now">CHECK OUT</button>
                        <p class="mt-3 text-center">Please Note: All items are pre-order and will ship in 6-10 weeks.
                            Guaranteed holiday delivery.</p>
                    </div>
                </div>
            </div>
        </main>
    </section>
</div>
        `
}
export default printModal;