var ProductosEnCarrito = 0;
var cantidad = document.getElementById("cantidadProductos");

function addCart() {
    ProductosEnCarrito++;
    cantidad.textContent = ProductosEnCarrito;

}


