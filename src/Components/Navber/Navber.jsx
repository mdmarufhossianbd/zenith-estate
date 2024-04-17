import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/sellorrent'}>Sell / Rent</Link></li>
        <li><Link to={'/updateuserprofile'}>Update Profile</Link></li>   
    </>

    return (
        <div className="xl:px-[300px] lg:px-[200px] md:px-20 px-4 pt-3 bg-[#F3F3FA]">
            <div className="navbar flex justify-between items-center">
                <div className="dropdown z-10 lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                    <Link className="font-bold text-3xl hover:text-[#5245ED]" to={'/'}>Zenith Estate</Link>
                </div>
                <div>
                    <div className="list-none font-semibold lg:flex gap-4 hidden">
                        {links}
                    </div>
                </div>
                <div className="lg:ml-4">
                    {
                        user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                            <div className="w-10 rounded-full tooltip" data-tip="Name">
                                <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                            <li>
                                <Link>{user.displayName}</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogOut}><button>Logout</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    : <Link to={"/login"}><button className="bg-[#5245ED] text-white py-2 px-6 rounded hover:bg-[#100A55]">Login</button></Link>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default Navber;