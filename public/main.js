
let modalCargaProducto = new bootstrap.Modal(document.getElementById('modalAgregarProductos'), {})
let btnAgregar = document.getElementById('btnModalAgregar').addEventListener('click', agregarProducto)
let btnAgregarDesktop = document.getElementById('desktopForm__button').addEventListener('click', agregarProductoDesktop)
let btnVolverDetalles = document.getElementById('detallesProducto__volver').addEventListener('click', volverDetalles)

function agregarProducto() {
    let tituloProducto = document.getElementById('inputTituloProducto').value
    let categoriaProducto = document.getElementById('inputCategoriaProducto').value
    let descripcionProducto = document.getElementById('inputDescripcionProducto').value
    if (tituloProducto === '' || categoriaProducto === '') {
        alert(`¡Debes completar los campos 'Producto' y 'Categoria' !`) 
    }
    else {
        let listaProductos = document.getElementById('listaProductos__ul')
        document.getElementById('inputTituloProducto').value = ''
        document.getElementById('inputCategoriaProducto').value = ''
        document.getElementById('inputDescripcionProducto').value = ''
        let listItem = document.createElement('li')
        listItem.classList.add('list-group-item')
        listItem.innerHTML = `<img src="${elegirIcono(categoriaProducto)}" width="30px" height="30px" alt="">${tituloProducto}`
        console.info(listItem)
        listItem.appendChild(crearBotonVerDetalles(tituloProducto, descripcionProducto, categoriaProducto))
        listaProductos.appendChild(listItem)
        modalCargaProducto.hide()
        document.getElementById('estadoInicialVacio').style.display= 'none'
        document.getElementById('listaDeProductos').style.display = 'block'        
        console.info('boton agregar pulsado')
    }
}

function agregarProductoDesktop(e) {
    e.preventDefault()
    let tituloProducto = document.getElementById('desktopForm__inputProducto').value
    let categoriaProducto = document.getElementById('desktopForm__inputCategoria').value
    let descripcionProducto = document.getElementById('desktopForm__inputDescripcion').value
    if (tituloProducto === '' || categoriaProducto === '') {
        alert(`¡Debes completar los campos 'Producto' y 'Categoria' !`) 
    }
    else {
        let listaProductos = document.getElementById('listaProductos__ul')
        document.getElementById('desktopForm__inputProducto').value = ''
        document.getElementById('desktopForm__inputCategoria').value = ''
        document.getElementById('desktopForm__inputDescripcion').value = ''
        let listItem = document.createElement('li')
        listItem.classList.add('list-group-item')
        listItem.innerHTML = `<img src="${elegirIcono(categoriaProducto)}" alt="">${tituloProducto}`
        console.info(listItem)
        listItem.appendChild(crearBotonVerDetalles(tituloProducto, descripcionProducto, categoriaProducto))
        listaProductos.appendChild(listItem)
        modalCargaProducto.hide()
        document.getElementById('estadoInicialVacio').style.display= 'none'
        document.getElementById('listaDeProductos').style.display = 'block'
        document.getElementById('detallesProducto').style.display = 'none'     
        console.info('boton agregar pulsado')
    }
}

function elegirIcono(categoria) {
    let icono = ''
    if (categoria == 'frutas')
        icono = 'images/frutas.svg'
    else if (categoria == 'verduras')
        icono = 'images/verduras.svg'
    else if (categoria == 'carne')
        icono = 'images/carne.svg'
    else if (categoria == 'lacteos')
        icono = 'images/lacteos.svg'
    else if (categoria == 'conservas')
        icono = 'images/conservas.svg'
    else if (categoria == 'botiquin')
        icono = 'images/botiquin.svg'
    else 
        icono = '-'

    return icono
}

function crearBotonVerDetalles(producto, descripcion, categoria) {
    let boton = document.createElement('button')
    boton.setAttribute('data-producto', producto)
    boton.setAttribute('data-descripcion', descripcion)
    boton.setAttribute('data-categoria', categoria)
    boton.id = 'listaProductos__btnVerDetalles'
    boton.className = 'btn btn-info'
    boton.innerHTML = 'DETALLES'
    boton.addEventListener('click', (e) => {
        document.getElementById('detallesProducto__img').innerHTML = `<img src="${elegirIcono(categoria)}" alt="producto">`
        document.getElementById('detallesProducto__titulo').innerHTML = producto
        document.getElementById('detallesProducto__descripcion').innerHTML = descripcion
        document.getElementById('listaDeProductos').style.display = 'none'
        document.getElementById('detallesProducto').style.display = 'block'
        document.getElementById('btnAgregarProductoModal').style.display = 'none'
    })
    return boton
}

function volverDetalles() {
    document.getElementById('detallesProducto').style.display = 'none'
    document.getElementById('listaDeProductos').style.display = 'block'
    document.getElementById('btnAgregarProductoModal').style.display = 'block'
}

// function mostrarModal(mq) {
//     if (window.innerWidth > 1024) {
//         let modal = document.getElementById('modalAgregarProductos')        
//         modal.className = 'modal-dialog modal-fullscreen'
//     }

// }

