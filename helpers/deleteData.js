const deleteDatos = async (url, object = {}) => {
    await axios.delete(url)
    alert("Producto eliminado")
}

export default deleteDatos;