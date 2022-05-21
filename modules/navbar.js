const navbar = (container) => {
    container.innerHTML = `
    <div class="container px-0">
            <a class="navbar-brand mx-lg-5" href="../index.html">
                <img src="../images/FullLogosvg.svg" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-lg-auto d-flex align-items-lg-center">
                    <li class="nav-item d-lg-flex align-items-center my-2 my-lg-0 me-lg-5">
                        <a href="../pages/subirPrenda.html">SUBIR PRENDA</a>
                    </li>
                    <li class="nav-item d-lg-flex align-items-center my-2 my-lg-0 me-lg-5">
                        <a href="../pages/colection.html">COLLECTIONS</a>
                    </li>

                    <ul class="d-flex justify-content-around align-items-end">
                        <li class="nav-item dropdown d-lg-flex align-items-center my-2 my-lg-0 me-lg-3">
                            <a class="nav-link p-0" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"><img src="../images/user-icon.svg"
                                    alt="user" /></a>
                            <ul class="dropdown-menu position-absolute" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="#">Perfil</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" id="close-session">Cerrar sesion</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item d-lg-flex align-items-center my-2 my-lg-0 me-lg-3">
                            <a class="p-0" href="../pages/cart.html"><img src="../images/icon-shop.svg" alt="shop" /></a>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    `
}

export default navbar;