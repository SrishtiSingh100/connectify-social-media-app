import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

    const navigate = useNavigate();


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [error,setError] = useState("");



    const handleLogin = async(e)=>{

        e.preventDefault();


        try{

            const response = await axios.post(

                "http://localhost:5004/api/auth/login",

                {
                    email,
                    password
                }

            );


            // Save JWT Token

            localStorage.setItem(
                "token",
                response.data.token
            );


            alert("Login Successful");


            // Go to Feed

            navigate("/feed");


        }
        catch(error){

            console.log(error);


            setError(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

    };




    return(

        <div className="min-h-screen flex items-center justify-center bg-gray-100">


            <div className="bg-white shadow-xl rounded-xl p-8 w-96">


                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">

                    Login

                </h1>



                {
                    error && (

                        <p className="text-red-500 text-center mb-4">

                            {error}

                        </p>

                    )
                }



                <form onSubmit={handleLogin}>


                    <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    className="w-full border p-3 rounded-lg mb-4"

                    />




                    <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    className="w-full border p-3 rounded-lg mb-5"

                    />




                    <button

                    type="submit"

                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"

                    >

                    Login

                    </button>


                </form>


                <p className="text-center mt-5 text-gray-600">

                    Don't have an account?

                </p>



                <button

                onClick={()=>navigate("/register")}

                className="w-full mt-2 border border-blue-600 text-blue-600 p-2 rounded-lg"

                >

                Create Account

                </button>



            </div>


        </div>

    );

}


export default Login;