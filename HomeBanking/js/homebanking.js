//Declaración de variables
let nombreUsuario = "Guido";
let saldoCuenta = 20000;
let limiteExtraccion = 2000;


// declaracion de variables de pago de servicios
const Agua = 350;
const Telefono = 425;
const Luz =210;
const Internet = 570; 

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}





//funcion suma y resta a saldo

function restarSaldo(monto) {
  saldoCuenta -= monto;
}

function SumarSaldo(monto) {
    saldoCuenta += monto;
}

function checkBilletesCien(monto) {
    return monto % 100 !== 0; 
}

function isNan(monto) {
    return isNaN(monto) || monto === 0 || typeof monto !=="number";
}

// funciones para completar


function cambiarLimiteDeExtraccion() {
    let cambiarLimite = parseInt(prompt("¿Cual sera el nuevo monto maximo de extraccion?"));
    if (cambiarLimite<=0) {
        alert ("Debes indicar numeros mayores a 0");
    }  else {
        limiteExtraccion = cambiarLimite;
        actualizarLimiteEnPantalla()
        alert("Su nuevo limite de extraccion es de $" + cambiarLimite);
    }
}

function extraerDinero() {
    let montoRetiro = parseInt(prompt("¿Cuanto dinero desea retirar?"));
    let saldoAnterior = saldoCuenta;
    if (montoRetiro>limiteExtraccion) {
        alert("Tu monto ingresado supera el limite de extraccion");
    }   else if (montoRetiro<=0) {
        alert("Debes indicar montos que superen a 0");
    } else if (montoRetiro>saldoCuenta) {
        alert("No tienes suficiente dinero");
    } else if (checkBilletesCien(montoRetiro)) {
        alert("Los valores deben ser multiplos de 100");
    }
    else {
        restarSaldo(montoRetiro)
        actualizarSaldoEnPantalla()
        alert("Monto de Extracción: $" + montoRetiro + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Saldo actual: $" + saldoCuenta);
    }
  }
  
  
  function depositarDinero() {
let montoDepositar = parseInt(prompt("¿Cuanto dinero desea depositar?"));
let saldoAnterior = saldoCuenta;
if (montoDepositar<=0) {
    alert("Debes ingresar numeros mayores a 0");
} else if (checkBilletesCien(montoDepositar)) {
    alert("Los valores deben ser multiplos de 100");
}
    else {
    SumarSaldo(montoDepositar);
    actualizarSaldoEnPantalla();
    alert("Monto de tu depósito: $" + montoDepositar + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Saldo actual: $" + saldoCuenta);

}

  }

function pagarServicio() {
    let servicioAPagar = parseInt(prompt("Ingrese el número que corresponda al servicio a pagar" + "\n" +
    "1. Agua" + "\n" +
    "2. Luz" + "\n" +
    "3. Internet" + "\n" +
    "4. Teléfono"));
switch (servicioAPagar) {
    case 1:
        pagoServicio(Agua);
        break;
    case 2:
        pagoServicio(Luz);
        break;
    case 3: 
        pagoServicio(Internet);
        break;
    case 4:
        pagoServicio(Telefono);
        break;
    default:
        alert("Servicio no existente");
        break;
}
actualizarSaldoEnPantalla();
}

function pagoServicio(servicioAPagar) {

let saldoAnterior = saldoCuenta;
if (servicioAPagar > saldoCuenta) {
    alert("Saldo insuficiente");
} else {
    restarSaldo(servicioAPagar);
    alert("Tu pago se ejecutó exitosamente" + "\n" +
        "Saldo anterior: $" + saldoAnterior + "\n" +
        "Dinero descontado: $" + servicioAPagar + "\n" +
        "Saldo actual: $" + saldoCuenta);

}
}

function transferirDinero() {
let cuentaAmiga1 = "1234567";
let cuentaAmiga2 = "7654321";

let transferencia = parseInt(prompt('Ingrese el monto que desea transferir'));
let usuarioTransferencia = prompt('Elija entre las siguientes cuentas vinculadas' + "\n" + "Cuenta amiga 1: # 1234567" + "\n" + "Cuenta amiga2: #7654321" + "\n");


if (transferencia<= 0) {
alert('Usted no tiene dinero suficiente para realizar esta transaccion');
} else if(transferencia>saldoCuenta) {
alert('Usted no tiene suficiente saldo para realizar este movimiento');
} else {
    restarSaldo(transferencia);
    actualizarSaldoEnPantalla();
    alert("Se ha realizado la transferencia a la cuenta" + usuarioTransferencia + "." + "Se le ha transferido un monto total de $" + transferencia);
}
}
function logout() {
    alert("Sesión finalizada! - Vuelva pronto!");
    window.location = "login.html";
}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}