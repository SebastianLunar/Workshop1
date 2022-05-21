import printCard from "../modules/printCard.js";
import {productos} from "../helpers/urls.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("container");
    await printCard(productos, container);
})