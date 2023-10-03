const express=require('express')
const router=express.Router()

const{getAllProduct,getAllProductStatics,getAllIkea}
=require('../controllers/products')

router.route('/').get(getAllProduct)
// localhost:3600/pepe
router.route('/all').get(getAllProductStatics)
// localhost:3600/pepe/all
router.route('/ikea').get(getAllIkea)

// localhost:3600/pepe/liddy


module.exports=router