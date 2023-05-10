import express from 'express'
import { readFile } from 'fs';

const app = express();

app.use(express.urlencoded({extended:true})) 

app.get('/', (req, res) => {
    res.send('Mi primer hola desde express')
})

app.get('/products', (req, res) => {
    let producto1 ={
        nombre: 'nike',
        precio: 2000,
        color: 'rojo'
    }
    let producto2={
        nombre: 'adidas',
        precio: 1500,
        color: 'azul'
    }
    res.send (producto1)
})

app.get('/products/:nombre', (req, res)=>{
    console.log(req.params);
    let nombre = req.params.nombre;
    res.send (nombre)
})

app.get ('/productos', (req, res)=>{
    let {nombre, fecha, otro} = req.query;
    let productos = {
        nombre: 'alfombra',
        fecha:'121231231',
        otro
    }
    res.send(nombre + fecha)
})

const server = app.listen(5000, () => {
    console.log('Server running on port: 5000');
}) 