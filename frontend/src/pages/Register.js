import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register(){

    const navigate = useNavigate();


    const [username,setUsername] = useState("");

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [error,setError] = useState("");



    const handleRegister = async(e)=>{

        e.preventDefault();


        try{


            await axios.post(

                "https://connectify-backend-kb3b.onrender.com",

                {
                    username,
                    email,
                    password
                }

            );


            alert("Registration Successful");


            navigate("/login");


        }
        catch(error){

            console.log(error);


            setError(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }


    };



    return(


        <div className="min-h-screen flex items-center justify-center bg-gray-100">


            <div className="bg-white shadow-xl rounded-xl p-8 w-96">


                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">

                    Create Account

                </h1>



                {
                    error &&

                    <p className="text-red-500 text-center mb-4">

                        {error}

                    </p>

                }




                <form onSubmit={handleRegister}>


                    <input

                    type="text"

                    placeholder="Username"

                    value={username}

                    onChange={(e)=>setUsername(e.target.value)}

                    className="w-full border p-3 rounded-lg mb-4"

                    />



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

                    Register

                    </button>



                </form>




                <button

                onClick={()=>navigate("/login")}

                className="w-full mt-4 border border-blue-600 text-blue-600 p-2 rounded-lg"

                >

                Already have account? Login

                </button>



            </div>


        </div>


    );

}


export default Register;