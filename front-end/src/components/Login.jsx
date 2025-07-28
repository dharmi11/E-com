import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
        navigate('/');
        }
    }, []);

    const handleLogin = async () => {
        try {
            let result = await axios.post("http://localhost:1111/login", {
                email,
                password
            })
            if (result.data && result.data.user) {
                localStorage.setItem("user", JSON.stringify(result.data.user))
                console.log(result);
                navigate("/")
            } else {
                alert("Please fill correct Details")
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (

        <div className="signup-container">
            <h2>Login</h2>
            <form className="signup-form">

                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                <button type="button" onClick={handleLogin}>Login</button>

                {/* <button type="button" onClick={getALL}> GET ALL</button> */}
            </form>
        </div>
    )
}

export default Login
