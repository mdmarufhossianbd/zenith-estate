import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                result.user
                console.log(result, "user create successfully")
            })
            .catch(error => {
                error.message
                console.log(error.message);
            })
    }
    return (
        <div className="h-screen w-screen bg-[#000] bg-[url('https://i.ibb.co/D4p1Y1x/real-state-banner-2.png')] bg-blend-screen bg-cover bg-no-repeat lg:pt-[10%] md:pt-[20%] pt-[20%]">
            <div className=" xl:w-1/3 lg:w-1/2 md:w-1/2 mx-5 bg-[#49494985] lg:mx-auto md:mx-auto text-center p-10 rounded-md">
                <h2 className="text-4xl text-white font-bold">Please Login</h2>
                <hr className="mx-[30%] my-5" />
                <form onSubmit={handlelogin} >
                    <div className="flex flex-col gap-4 mt-8">

                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="email" name="email" placeholder="Your Email" />
                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="password" name="password" placeholder="Password" />

                        <button type="submit" className="bg-[#100A55] p-3 text-lg font-medium text-white rounded-md hover:bg-purple-600  hover:text-white " >Login</button>
                        <p className="text-xl font-medium text-white">You have not an account. <Link className="text-white underline hover:text-purple-600" to={'/register'}>Register</Link></p>
                    </div>
                </form>
                <div className="text-white flex flex-col items-center justify-center gap-4 p-4">
                    <button className="flex gap-3 text-xl items-center bg-[#5245ED] p-2 rounded hover:bg-purple-600"><AiFillGoogleCircle /> Log in with Google 
                    </button>
                    <button className="flex gap-3 text-xl items-center bg-purple-600 p-2 rounded hover:bg-[#5245ED]"><FaGithub /> Log in with GitHub 
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;