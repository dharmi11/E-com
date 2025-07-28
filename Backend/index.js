const express = require('express')
const connectDB = require('./db/database')
const user = require ('./routes/user');
const productRoutes = require('./routes/products');
const cors = require('cors');

const app = express();

connectDB();

app.use(express.json());

app.use(cors());


app.use('/' ,user);
app.use('/api', productRoutes);

PORT = 1111 ;
app.listen(PORT , (req,res)=>{
    console.log("app is workif on this PORt")
})