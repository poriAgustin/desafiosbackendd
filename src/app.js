import express from 'express'
import productsManager from './productsManager.js'

const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Mi primer hola desde express')
})

app.get('/products', (req, res) => {
    let listaProd = productsManager.getProducts();
    // productsManager.limit(req.query)
    res.send(listaProd)

})

app.get('/products/:id', (req, res) => {
    let id = req.params.id
    let prodPorId = myManager.getProductsByid(products => products.id == id)
    res.send(id)

})

// app.get ('/productos', (req, res)=>{
//     let {nombre, fecha, otro} = req.query;
//     let productos = {
//         nombre: 'alfombra',
//         fecha:'121231231',
//         otro
//     }
//     res.send(nombre + fecha)
// })

const server = app.listen(5000, () => {
    console.log('Server running on port: 5000');
})

const myManager = new productsManager

myManager.getProducts()
