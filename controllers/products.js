const Product =require('../models/product')

const getAllProductStatics=async(req,res)=>{
    const products=await Product.find({})
    res.status(200).json({products,numProducts:products.length})
}

const getAllIkea=async(req,res)=>{
    const products=await Product.find({company:'ikea'})
    //res.status(200).json({products,numProducts:products.length})

    res.render('ikea',{products:products})
}

// localhost:3600/pepe
const getAllProduct=async(req,res)=>{
   // console.log(req.query)
    const products=await Product.find({})
    //req.body
    //req.query
   // res.status(200).json({products})
   res.render('products',{products:products})
}


module.exports={
    getAllProduct,
    getAllProductStatics,
    getAllIkea
}

