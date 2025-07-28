const mongoose = require('mongoose');
const products = require('../models/product')

const addproduct = async (req, res) => {
    try {

        const { name, category, price, company, userId } = req.body;
        if (!name || !category || !price || !company) {
            return res.status(400).json({
                succes: false,
                message: "Invalid credential"
            });

        }

        const product = new products({
            name,
            category,
            price,
            company,
            userId
        })
        await product.save();
        return res.status(200).json({
            message: "Product add succesfully",
            succes: true,
            product
        })


    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

const getproduct = async (req,res)=>{
    try {
    
    const product = await products.find();

    if(!product || product.length === 0 ){
        return res.status(400).json({
            message:"Please add products" ,
            succes:false
        })
    }
    return res.status(200).json({
        message:"All Products",
        succes:true,
        product
    })
        
    } catch (error) {
        console.log(error)
    }
} 

const deleteproduct = async (req,res)=>{
    //  res.send("deleting")
    const deleteitem = await products.deleteOne({_id : req.params.id});

    return res.status(200).json({
        message:"Delete product succesfully" ,
        deleteitem
    })
}

const updateid = async (req,res)=>{
    const result = await products.findById({_id:req.params.id});
    if(result){
 
    return res.status(200).json({
        message :"update by id" ,
        result 
    });       
    }
    else{
        res.send("not valid id")
    }
}

module.exports = { addproduct , getproduct , deleteproduct , updateid};