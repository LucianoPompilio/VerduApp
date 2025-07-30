let nombre = "Luciano Pompilio"
const documento = '43217765'
const Verduras = ['acelga','papa' , 'zanahoria', 'espinaca']
const carrito = [{codigo: 123, nombre: 'teclado bluetooth', importe: 15500},
                 {codigo: 223, nombre: 'mouse bluetooth', importe: 76000},
                 {codigo: 124, nombre: 'mouse pad', importe: 1550}]

let instituto = 'TECLAB'
let numero = 2001
const arrayFrutas = ['Pomelo', 'Sandia', 'Melon', 'Uva', 'Frutilla']

console.log(instituto)
console.log(numero)

console.table(arrayFrutas)

function iterarArrayFrutas () {
    for (let i=0; i< arrayFrutas.length; i++){
        if (i === 1 || i === 3) {
        continue
    }
    console. log(arrayFrutas [i])
}
}

// API 1 //
const container = document.querySelector('div.container')

retornarCardHtml = (producto) => {
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
        </div`
}

const activarClickEnBotones = ()=> {
    const botonesAgregar = document.querySelectorAll('button.button-outline.button-add')
    if(botonesAgregar !== null){
        botonesAgregar.forEach((button)=>{
            button.addEventListener('click', (e)=>{
                agregarAlCarrito(e.target.id)
            })
        });
        
    }
}
const cargarProductos = (array) => {
    if(array.length > 0) {
        array.forEach(producto => {
            container.innerHTML  += retornarCardHtml(producto)    
        });
        activarClickEnBotones()
    }
}
cargarProductos(productos)

//API 2 //
