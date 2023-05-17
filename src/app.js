import express from 'express'
import fs from 'fs'
import productsManager from './productsManager.js'

const app = express();

const PORT = 8082
const server = app.listen(PORT, () => console.log(`Server running on port : ${server.address().port}`))
server.on ('error', error => console.log(error));


app.use(express.json());
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.send('Mi primer hola desde express')
})

app.get('/products', (req, res) => {
    let listaProd = productsManager.getProducts();
    // productsManager.limit(req.query)
    res.send(listaProd)

})

app.get('/products/:pid', (req, res) => {
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



const myManager = new productsManager

myManager.getProducts()
