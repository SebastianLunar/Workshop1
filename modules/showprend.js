

const showPrend =  (prend, data) => {
    const {name, image, image2, image3, price, description} = data;
    prend.innerHTML = `
    <div class="my-5">
          <div class="container-fluid d-flex justify-content-center">
              <div class="row">
                  <div class="col-8">
                      <div class="mb-5">
                        <img src="${image}" alt="Rectangle-1" border="0">
                      </div>
                    </div>
                  <div class="col-4">
                      <h1>${name}</h1>
                      <h3>$ ${price}</h3>
                      <div class="d-flex flex-column my-5">
                          <p class="m-2">Size</p>
                          <div class="d-flex ">
                              <button class="btn rounded-circle border mx-2">S</button>
                              <button class="btn rounded-circle border mx-2">M</button>
                              <button class="btn rounded-circle border mx-2">L</button>
                              <button class="btn rounded-circle border mx-2">XL</button>
                              <button class="btn rounded-circle border mx-2">XXL</button>
                          </div>
                      </div>
                      <button class="btn btn-dark w-100 my-2 rounded-0" id="add-cart">ADD TO CART</button>
                      <button class="btn btn-primary w-100 my-2 rounded-0" id="buy-now">BUY IT NOW</button>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae velit mollitia laborum, placeat incidunt vitae aperiam unde minima eos veritatis voluptas quia dolor dolores accusantium alias hic debitis repellat.
                      </p>
                  </div>
              </div>
          </div>
        </div>
    `
}

export default showPrend;