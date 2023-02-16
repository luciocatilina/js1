function carrito(n) {
    let precioTotal = 0
    for (let i = 0; i < n; i++) {
        precio = parseInt(prompt('Ingrese el precio del producto'));
        precioTotal += precio
    }
    if (precioTotal>=1000) {
        precioTotal-= precioTotal*0.2
        return precioTotal
    }else if (precioTotal>=500){
        precioTotal-=precioTotal*0.15
        return precioTotal
    }else if (precioTotal>=100){
        precioTotal-=precioTotal*0.1
        return precioTotal
    }else {
        return precioTotal
    }
    
    
    /*
        if (precioTotal>=100) {
            precioTotal-= precioTotal*0.1
            return precioTotal
        }else {
            return precioTotal
        }
    */
}

let cantProductos = parseInt(prompt('Ingrese la cantidad de productos'));

total = carrito(cantProductos);


alert(`Su total es: $${total}`);