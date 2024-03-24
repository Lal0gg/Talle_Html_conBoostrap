
function iniciarSesion() {
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    // Obtener los datos del usuario almacenados en el localStorage
    var usuarioAlmacenado = localStorage.getItem(email);

    // Verificar si el usuario existe en el localStorage
    if (usuarioAlmacenado) {
        // Convertir el usuario almacenado de JSON a objeto
        var usuarioJSON = JSON.parse(usuarioAlmacenado);
        // Verificar si la contraseña ingresada coincide con la contraseña almacenada
        if (contraseña === usuarioJSON.contraseña) {
            // Si la contraseña es correcta, redirigir al usuario a la página de inicio
            alert("Bienvenido");
            window.location.href = "home.html";
        } else {
            // Si la contraseña es incorrecta, mostrar un mensaje de error
            alert("La contraseña es incorrecta");
        }
    } else {
        // Si el usuario no existe, mostrar un mensaje de error
        alert("El usuario no existe");
    }
}

function cerrarSesion() {
    alert("Gracias y que tengas un buen día ;)");
    window.location.href = "login.html";
}