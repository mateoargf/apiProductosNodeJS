const express=require('express')
const app=express()


require('dotenv').config()

// const dotenv=require('dotenv')
// dotenv.config()


require('express-async-errors')

const connectDB=require('./db/conexion')
const productsRouter=require('./routes/products')

const Products =require('./models/product')


app.set('view engine','ejs')

const usuario={
    nombre:'pedro',
    apellido:'pepe',
    admin:false
}
const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

app.get('/',(req,res)=>{
    res.render('home',{articulos:posts})
})
// localhost:3600/



app.use('/pepe',productsRouter)


const unPuerto= process.env.PUERTO

const iniciar=async ()=>{
    try{
       await connectDB(process.env.MONGO_URL)
        app.listen(unPuerto,console.log('el servidor se inicio'))
    }catch(error){
        console.log(error)
    }
    
}



iniciar()