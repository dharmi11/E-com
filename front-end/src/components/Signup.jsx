import React, { useEffect, useState } from 'react'
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const navigate = useNavigate();

 useEffect(() => {
  const auth = localStorage.getItem("user");
  if (auth) {
    navigate('/');
  }
}, [navigate]);

// add comment

    const colectData = async () => {
        try {
            let responce = await axios.post("http://localhost:1111/register", {
                name,
                email,
                password,
            });
            console.log(responce.data);
            localStorage.setItem("user", JSON.stringify(responce.data));
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    // const getALL = async ()=>{
    //     const result = await axios.get("http://localhost:1111/get",{
    //         name , email ,password
    //     })
    //     console.log(result.data);
    // }



    return (


        <div className="signup-container">
            <h2>Register</h2>
            <form className="signup-form">
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                <button type="button" onClick={colectData} >Sign Up</button>

                {/* <button type="button" onClick={getALL}> GET ALL</button> */}
            </form>
        </div>
    );
};

export default Signup;
