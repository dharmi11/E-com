import React, { useState } from 'react'
// import 'app.css'
import axios from 'axios';

const Product = () => {
    const [name , setname] = useState('');
    const [category , setcategory] = useState('');
    const [price , setprice] = useState('');
    const [company , setcompany] = useState('');
    const [error , seterror] = useState(false)

    const addproducts=async ()=>{
      try {
             if(!name ||!category ||!price || !company ){
              seterror(true);
              return false
             }

      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user && user._id;
        
      const responce = await axios.post("http://localhost:1111/api/addproduct" , {
        name , category , price , company , userId
        });

        console.log(responce.data);


       } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="form-container">
      <h1>Add Produsts</h1>
      <input type="text" placeholder='Add product Name' value={name} onChange={(e)=>setname(e.target.value)} 
      />
      {error && !name && <span>Enter vaild Name</span> }
      <input type="text" placeholder=' Category' value={category} onChange={(e)=> setcategory(e.target.value)}/>{ error && !category && <span>Enter valid category</span>}
      <input type="text" placeholder=' Price'  value={price} onChange={(e)=> setprice(e.target.value)}/>
      { error && !price && <span>Enter valid price</span>}
      <input type="text" placeholder='Company'value={company} onChange={(e)=> setcompany(e.target.value)} />
      { error && !company && <span>Enter valid company</span>}
      <button type="submit" onClick={addproducts}>Add Product</button>

    </div>
  )
}

export default Product
