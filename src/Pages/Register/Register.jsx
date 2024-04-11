import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                result.user
                if (result.user) {
                    const toastMessage = () => toast.success("Your account Create Successfully");
                    toastMessage();
                    navigate('/');
                }
            })
            .catch(error => {
                error.message
                if (error.message) {
                    const toastMessage = () => toast.error("This email already use or invalid email.");
                    toastMessage();
                }
            })
    }

    return (
        <div className="bg-[#000000] bg-[url('https://i.ibb.co/D4p1Y1x/real-state-banner-2.png')] bg-blend-screen bg-cover bg-no-repeat lg:py-[10%] md:py-[20%] py-[20%]">
            <ToastContainer />;
            <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 mx-5 bg-[#49494985] lg:mx-auto md:mx-auto text-center p-10 rounded-md">
                <h2 className="text-4xl text-white font-bold">Please Create an account</h2>
                <hr className="mx-[20%] my-5" />
                <form onSubmit={handleRegister} >
                    <div className="flex flex-col gap-4 m-8">
                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="text" name="name" placeholder="Your Name" required />
                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="text" name="photo" placeholder="Your Photo url" />
                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="email" name="email" placeholder="Your Email" required/>
                        <input className="bg-[#100a5500] border-b-2 p-3 text-lg text-white placeholder:text-white rounded-md" type="password" name="password" placeholder="Password" required/>
                        <button type="submit" className="bg-[#5245ED] p-3 text-lg font-medium text-white rounded-md hover:bg-[#100A55]  hover:text-white " >Register</button>
                        <p className="text-xl text-white">Have have an account. <Link className="text-white underline hover:text-purple-600" to={'/login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;