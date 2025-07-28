const  express = require('express');
const { addproduct, getproduct, deleteproduct , updateid } = require('../controller/product');

const router = express.Router();

router.post('/addproduct' , addproduct);
router.get('/products', getproduct)
router.delete('/product/:id', deleteproduct)
router.get("/product/id" , updateid)




module.exports = router