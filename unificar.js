require('dotenv').config()

const connectDB=require('./db/conexion')

const Product =require('./models/product')

const jsonProduct=require('./products.json')

const iniciar=async()=>{
    try{
            await connectDB(process.env.MONGO_URL)

            //await Product.deleteMany()
            //await Product.updateMany([{},{},{}])
            await Product.create(jsonProduct)
            console.log('SE EFECTO EL CAMBIO')
    }
    catch(error){
        console.log(error)
    }
}

iniciar()