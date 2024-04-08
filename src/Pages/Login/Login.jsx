import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result=>{
            result.user
            console.log(result, "user create successfully")
        })
        .catch(error=>{
            error.message
            console.log(error.message);
        })
    }
    return (
        <div className=" h-screen bg-[#000000] bg-[url('https://i.ibb.co/bBwLgrt/real-state-banner-3.png')] bg-blend-screen bg-cover bg-no-repeat pt-[8%]">
            <div className="lg:w-1/2 xl:w-1/3 md:mx-10 mx-3 bg-[#00000060] lg:mx-auto text-center p-10 rounded-md mix-blend-normal">
                <h2 className="text-4xl text-white font-bold">Please Login</h2>
                <hr className="mx-[20%] my-5" />
                <form onSubmit={handlelogin} >
                    <div className="flex flex-col gap-4 m-8">
                        
                        <input className="bg-[#100A55] p-3 text-lg text-white placeholder:text-white rounded-md" type="email" name="email" placeholder="Your Email" />
                        <input className="bg-[#100A55] p-3 text-lg text-white placeholder:text-white rounded-md" type="password" name="password" placeholder="Password" />                        
                        <button type="submit" className="bg-[#100A55] p-3 text-lg font-medium text-white rounded-md hover:bg-purple-600  hover:text-white "  >Login</button>
                        <p className="text-xl font-medium text-white">Create an account. <Link className="text-purple-700 hover:text-white hover:underline" to={'/register'}>Register</Link></p>
                    </div>
                    {/* <input type="button" value="" /> */}
                </form>
            </div>
        </div>
    );
};

export default Login;