//CONSTRUCTOR
class Producto{
    constructor(codigo, tipo, marca, variedad, contenido, precio){
        this.codigo = codigo.toString().toUpperCase();
        this.tipo = tipo.toString().toUpperCase();
        this.marca = marca.toString().toUpperCase();
        this.variedad = variedad.toString().toUpperCase();
        this.contenido = parseFloat(contenido);
        this.precio = parseFloat(precio);

        //console.log("Ha ingresado correctamente el producto " + this.tipo + " " + this.marca);
        console.log(`Ha ingresado correctamente el producto ${this.tipo} ${this.marca}`);
    }
}

//ARRAY
const productos = []

//INCORPORAR ELEMENTOS EN EL ARRAY
productos.push(new Producto("1", "Aperitivo", "Branca", "Fernet", 750, 2000));
productos.push(new Producto("2", "Aperitivo", "Gancia", "Americano", 950, 800)); 
productos.push(new Producto("3", "Cerveza", "Quilmes", "Rubia", 970, 350)); 
productos.push(new Producto("4", "Cerveza", "Salta", "Negra", 970, 400)); 
productos.push(new Producto("5", "Vino", "Amalaya", "Cabernet", 750, 1200)); 
productos.push(new Producto("6", "Destilado", "Gordons", "Gin", 750, 2500)); 
productos.push(new Producto("7", "Destilado", "Chivas", "Whisky", 750, 7000)); 
productos.push(new Producto("8", "Licor", "Baileys", "Original", 750, 5000)); 
productos.push(new Producto("9", "Gaseosa", "CocaCola", "Original", 1500, 300)); 
productos.push(new Producto("10", "Gaseosa", "Schweppes", "Tonica", 1500, 400)); 

console.log(productos)

//CICLO - CONDICIONAL
let nuevoProducto = 0

while (nuevoProducto < 3){

    let ingreso = new Producto
        ((prompt("Ingrese el código del producto")),
        (prompt("Ingrese el tipo de producto")),
        (prompt("Ingrese la marca")), 
        (prompt("Ingrese la variedad")), 
        (prompt("Ingrese el contenido en ml/cc")), 
        (prompt("Ingrese el precio de venta")));
        
        productos.push(ingreso)

        alert("Ha ingresado correctamente un nuevo producto");
        
        nuevoProducto++
}

console.log(productos)

//FUNCION DE ORDEN SUPERIOR

function filtrarPorTipo(tipo) {
    return productos.filter(busqueda => busqueda.tipo == tipo); 
}

console.log(filtrarPorTipo(prompt("Ingrese el TIPO de producto a buscar (APERITIVO, CERVEZA, VINO, DESTILADO, ETC)").toUpperCase()));