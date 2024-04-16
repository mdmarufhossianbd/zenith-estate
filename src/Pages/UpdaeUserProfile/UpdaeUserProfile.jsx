import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdaeUserProfile = () => {
    const { user } = useContext(AuthContext)

    const handleUpdateProfle = e => {
        e.preventDefault();
    }
    console.log(user);

    return (
        <div className="max-w-7xl mx-auto xl:flex lg:flex md:flex md:px-[50px] items-center h-full py-10">
            <div className="md:w-1/2 w-[60%] mx-auto flex flex-col mb-10 text-center items-center md:border-r-4">
                <img className="w-[300px] rounded-full mb-5" src={user.photoURL} alt="" />
                <p className="my-5 text-xl font-medium">Name : {user.displayName}</p>
                <p>Email : {user?.email || "Email Not Found"}</p>
            </div>
            <div className="flex flex-1">
                <form onSubmit={handleUpdateProfle} className="flex flex-col gap-8 mx-10 w-full">
                    <input className="p-3 bg-[#E0DEF7] placeholder:text-black placeholder:text-lg rounded" type="text" name="" placeholder="Your name" id="" />
                    <input className="p-3 bg-[#E0DEF7] placeholder:text-black placeholder:text-lg rounded" type="text" placeholder="profile picture url" />
                    <button className="bg-[#5245ED] py-2 rounded text-white hover:bg-[#100A55]">Update Profile</button>
                    </form>
            </div>
        </div>
    );
};

export default UpdaeUserProfile;