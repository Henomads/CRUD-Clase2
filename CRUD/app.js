//Eventos DOM (Document Object Model)
document
    .getElementById("formulario-producto")
    .addEventListener("submit", function (evento) {
        //Evaluar el comportamiento del formulario

        evento.preventDefault(); //preventDefault para guardar sin refrescar

        //Obtener los valores del formulario

        const nombre = document.getElementById("Nombre").value,
            precio = document.getElementById("Precio").value,
            año = docmuent.getElementById("Año").value;

        //Crear un nuevo objeto "producto"

        const product = new product(nombre, precio, año);

        //Crear un nuevo usuario de interfaz

        const ui = new UI();

        //Input de validacion de usuario
        if (nombre === "" || precio === "" || año === "") {
            ui.showMessage("Por favor insertar datos");
        }

        //Guardar producto
        ui.addProducto(Producto);
        ui.showMessage("Producto agregado");
        ui.resetForm();
    });

document.getElementById("producto-lista").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});

// Clase producto

class Producto {
    constructor(nombre, precio, año) {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}

// Clase Usuario interfaz

class UI {
    addProducto(producto) {
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
            <div class="tarjeta texto margen4">
                <div class="tarjeta-body">
                    <strong>Producto </strong> : ${producto.nombre} -
                    <strong>Precio </strong> : ${producto.precio} -
                    <strong>Año </strong> : ${producto.año} -
                    <a href="#" class="btn btn-error" name="eliminar">Eliminar</a>
                </div>
            </div>
            `;

        productoLista.appendChild(element); //appendChild = objeto hijo

    }
    
        //Resetear valores de formulario

        resetForm(){
            document.getElementById("formulario-producto").reset();
        }

        deleteProducto(elemento){
            if (elemento.nombre === "eliminar") {
                element.parentElement.parentElement.remove();
                this.showMessage("El producto se a eliminado");
            }
        }

        showMessage(mensaje, cssClass){
            const div = document.createElement("div");
            div.className = `alert alerg-${cssClass}`;
            div.appendChild(document.createTextNode(mensaje));

            //Mostrar en el DOM

            const contenido = document.querySelector(".container");
            const app = document.querySelector("#app");
        }
    
}