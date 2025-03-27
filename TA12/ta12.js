function generatePassword(length) {
    if (length < 8) {
        console.log("La longitud mínima de la contraseña es 8 caracteres.");
        return;
    }

    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const todosCaracteres = mayusculas + minusculas + numeros + simbolos;

    let password = "";
    let tieneRequisitos = false;

    while (!tieneRequisitos) {
        password = "";
        for (let i = 0; i < length; i++) {
            let indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length);
            password += todosCaracteres[indiceAleatorio];
        }

        tieneRequisitos = (
            password.match(/[A-Z]/) &&
            password.match(/[a-z]/) &&
            password.match(/[0-9]/) &&
            password.match(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/)
        );
    }

    console.log(password);
}