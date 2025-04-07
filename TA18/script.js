function renderizarPersonas() {
    const listaPersonas = document.getElementById('listaPersonas');
    
    listaPersonas.innerHTML = '';
    
    personas.forEach(persona => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = persona;
        listaPersonas.appendChild(elementoLista);
    });
}

function filtrarPersonas() {
    const inputBusqueda = document.getElementById('busqueda');
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const elementosLista = document.querySelectorAll('#listaPersonas li');

    elementosLista.forEach(elemento => {
        const textoElemento = elemento.textContent.toLowerCase();

        if (textoElemento.includes(textoBusqueda)) {
            elemento.classList.remove('oculto');
        } else {
            elemento.classList.add('oculto');
        }
    });
}

renderizarPersonas();

document.getElementById('busqueda').addEventListener('input', filtrarPersonas);