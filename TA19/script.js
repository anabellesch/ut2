const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const contrasena = document.getElementById('contrasena');


const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorContrasena = document.getElementById('errorContrasena');


function mostrarError(input, errorElemento) {
    input.classList.add('input-error');
    errorElemento.style.display = 'block';
}


function ocultarError(input, errorElemento) {
    input.classList.remove('input-error');
    errorElemento.style.display = 'none';
}


function validarNombre() {
    if (nombre.value.trim() === '') {
        mostrarError(nombre, errorNombre);
        return false;
    }
    ocultarError(nombre, errorNombre);
    return true;
}

function validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        mostrarError(email, errorEmail);
        return false;
    }
    ocultarError(email, errorEmail);
    return true;
}


function validarContrasena() {
    if (contrasena.value.length < 8) {
        mostrarError(contrasena, errorContrasena);
        return false;
    }
    ocultarError(contrasena, errorContrasena);
    return true;
}

nombre.addEventListener('input', validarNombre);
email.addEventListener('input', validarEmail);
contrasena.addEventListener('input', validarContrasena);


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

   
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const contrasenaValida = validarContrasena();

    
    if (nombreValido && emailValido && contrasenaValida) {
        alert('Formulario enviado correctamente');
        
    }
});