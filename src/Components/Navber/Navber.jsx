import { Link } from "react-router-dom";

const Navber = () => {

    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>Services</Link></li>
        <li><Link to={'/'}>About</Link></li>
        <li><Link to={'/'}>Contact</Link></li>
    </>

    return (
        <div className=" lg:px-[300px] md:px-20 px-4 py-2 bg-[#F3F3FA]">
            <div className="navbar flex justify-between items-center">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                    <Link className="font-bold text-3xl" to={'/'}>Zenith Estate</Link>
                </div>
                <div>
                    <div className="list-none font-semibold lg:flex gap-4 hidden">
                        {links}
                    </div>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile</a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;