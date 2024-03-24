function registro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    // Crear un objeto para almacenar los datos del usuario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña
    };

    // Convertir el objeto a una cadena JSON
    var usuarioJSON = JSON.stringify(usuario);

    // Guardar los datos en el localStorage con la clave única (email)
    localStorage.setItem(email, usuarioJSON);
    alert("registro realizado correctamente");
    // Redirigir a la página de login
    window.location.href = "login.html";
}