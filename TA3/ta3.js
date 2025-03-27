function removeFromArray(arreglo, item) {
    const indice = arreglo.indexOf(item);
    
    arreglo.splice(indice, 1);
    
    console.log(arreglo);
}
