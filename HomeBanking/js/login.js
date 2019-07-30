// Valida al hacer click en login 
function validarLogin() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    if (usuario === "usuario" && password === "1234") {
        alert("Inicio de sesión exitoso!. Ya puedes comenzar a hacer operaciones!");
        window.location = "index.html";
        return false;
    } else {
        alert("Contraseña incorecta!!!");
    }
}

