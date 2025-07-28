import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
// import 'app.css'

const GetProduct = () => {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        fatchproducts();
    }, []);

    const fatchproducts = async () => {
        // try {
        //     const result = await axios.get("http://localhost:1111/api/products")
        //     setproduct(result.data.product);
        // } catch (error) {
        //     console.log(error);
        // }/
        try {
            let result = await axios.get("http://localhost:1111/api/products")
            setproduct(result.data.product)
        } catch (error) {
            console.log(error)
        }

    }
    console.log("hera All product--  ", product);

    const deleteproduct = async (id) => {
        let result = await axios.delete(`http://localhost:1111/api/product/${id}`)
        result.data.product;

        if (result) {
            console.log("product deleted");
            fatchproducts();
        }
    }

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <table>
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Opration</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

            {
                product.map((item, index) =>
                    <table>
                        <thead>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th>{item.category}</th>
                                <th>  <button onClick={() => deleteproduct(item._id)}>Delete</button>
                                <Link to={"/update/"+item._id}>Update</Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>

                )
            }
        </div>
    );
};

export default GetProduct;
