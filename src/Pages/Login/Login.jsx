import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../../Firebase/Firebase.config";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const { loginUser, } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);


    // Email & Password Login
    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("input data",email, password);
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    const toastMessage = () => toast.success("Your account login Successfully");
                    toastMessage();
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                error.message
                console.log("login error console",error.message);
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }

    // Goole Login
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result.user) {
                    const toastMessage = () => toast("Your account login Successfully");
                    toastMessage();
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }

    // GitHub Login
    const handleLoginWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                // const githubLoginUser = result.user
                if (result.user) {
                    const toastMessage = () => toast("Your account login Successfully");
                    toastMessage();
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                if (error.message) {
                    const toastMessage = () => toast.error("Please check your email or password.");
                    toastMessage();
                }
            })
    }
    return (
        <div className="bg-[#000] bg-[url('https://i.ibb.co/D4p1Y1x/real-state-banner-2.png')] bg-blend-screen bg-cover bg-no-repeat lg:pt-[10%] md:pt-[15%] pt-[20%]">
            <div className=" xl:w-1/3 lg:w-1/2 md:w-1/2 mx-5 bg-[#49494985] lg:mx-auto md:mx-auto text-center p-10 rounded-md">
                <h2 className="text-4xl text-white font-bold">Please Login</h2>
                <hr className="mx-[30%] my-5" />
                <form onSubmit={handlelogin} >
                    <div className="flex flex-col gap-4 mt-8">
                        <ToastContainer />;
                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="email" name="email" placeholder="Your Email" />
                        <div className="relative">
                            <input className="bg-[#100a5500] w-full border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" name="password" type={showPassword ? "text" : "password"} placeholder="Password" />
                            <span onClick={() => setShowPassword(!showPassword)} className="text-white absolute top-[50%] right-4">
                            { showPassword ? <IoEyeOff /> : <IoEye />
                            }  </span>
                        </div>

                        <button type="submit" className="bg-[#100A55] p-3 text-lg font-medium text-white rounded-md hover:bg-purple-600  hover:text-white " >Login</button>
                        <p className="text-xl font-medium text-white">You have not an account. <Link className="text-white underline hover:text-purple-600" to={'/register'}>Register</Link></p>
                    </div>
                </form>
                <div className="text-white flex flex-col items-center justify-center gap-4 p-4">
                    <button onClick={handleLoginWithGoogle} className="flex gap-3 text-xl items-center bg-[#5245ED] p-2 rounded hover:bg-purple-600"><AiFillGoogleCircle /> Log in with Google
                    </button>
                    <button onClick={handleLoginWithGithub} className="flex gap-3 text-xl items-center bg-purple-600 p-2 rounded hover:bg-[#5245ED]"><FaGithub /> Log in with GitHub
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;