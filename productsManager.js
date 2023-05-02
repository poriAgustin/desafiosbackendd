import fs from 'fs'

class ProductManager {
    constructor() {
        this.path = 'products.json'
    }

    async generateId(){
        let products = await this.getProducts()
        return products.length + 1
    }

    async addProduct(product){
        let products = await this.getProducts()
        products.push(product)
        console.log("Producto Agregado");
        await fs.promises.writeFile(this.path, JSON.stringify(products))
    }
    
    async getProducts(){
        let data = await fs.promises.readFile(this.path)
        let products = JSON.parse(data)
        return products
    }

    async getProductByid(id){
        let products = await this.getProducts()
        let idProduct = products.find(product => product.id === id);
        if (!idProduct) {
            console.log("Product not Found");
        } else{
            return console.log(idProduct)
        }
    }

    async updateProduct(id, product){
        let products = await this.getProducts()
        let indice = products.findIndex(product => product.id === id)
        if (indice !== -1) {
            products[indice].title = product.title
            products[indice].description = product.description
            products[indice].price = product.price
            products[indice].code = product.code
            products[indice].stock = product.stock
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products))
        return console.log(`Producto actualizado`);
    }

    async deleteProduct(id){
        let products = await this.getProducts()
        let indice = products.findIndex(product => product.id === id)
        if (indice !== -1) {
            products.splice(indice, 1)
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products))
        return console.log(`Producto Eliminado`);
    }

}

const manager = new ProductManager

let product1 = {
    id: await manager.generateId(),
    title :"Papas sabor ketchup",
    description : "Las mejor del mundo",
    price: 500,
    thumbnail: "ImgOFF",
    code: 12345,
    stock: 200
}

let product2 = {
    id: await manager.generateId(),
    title :"Papas sabor chori",
    description : "Las 2da mejor del mundo",
    price: 450,
    thumbnail: "ImgOFF",
    code: 8765,
    stock: 130
}


manager.deleteProduct()

manager.updateProduct()