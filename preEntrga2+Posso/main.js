/** Ejercicio 2da PRE-ENTREGA | Banco **/

class Cliente {
    constructor(nombre, apellido, cedula, monto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.monto = monto;
    }
}

const clienteDaniel = new Cliente('Daniel', 'Posso', 1115083630, 200000);
const clientePedrito = new Cliente('Pedrito', 'Picapiedra', 1214739844, 300000);
const clienteLuisa = new Cliente('Luisa', 'Garcia', 1030562484, 500000);
const clienteJohnatan = new Cliente('Johnatan', 'Gutierrez', 66702568, 100000);

const arrayClientes = [clienteDaniel, clientePedrito, clienteLuisa, clienteJohnatan]

console.log(arrayClientes);

// Función + Menú opciones

function menu() {
    alert("Bienvenidos a Bancolombia");
    let opcion = parseInt(prompt("Ingrese una opción: 1)Creación del Cliente 2)Eliminar Cliente 3) Modificación de Cliente 4)Consulta del cliente 5)Salir"));
    return opcion;
}

//Función para crear un cliente

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let cedula = prompt("Ingrese la cédula del cliente: ");
    let monto = parseInt(prompt("Ingrese el monto del cliente: "));
    let cliente = new Cliente(nombre, apellido, cedula, monto);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

//Función para eliminar a un cliente:

function eliminarCliente() {
    let cedula = parseInt(prompt("Ingrese la cédula del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.cedula === cedula);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1)
    console.log(arrayClientes);
}

//Función modificar un cliente:

function ModificacionCliente() {
    let cedula = parseInt(prompt("Ingrese la cédula del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.cedula === cedula);
    let indice = arrayClientes.indexOf(cliente);

    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let monto = parseInt(prompt("Ingrese el monto del cliente: "));
    let clienteModificado = new Cliente(nombre, apellido, cedula, monto);

    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}

//Funcion para consultar un cliente:

function consultaCliente() {
    let cedula = parseInt(prompt("Ingrese la cedula del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.cedula === cedula);
    console.log(cliente);
}