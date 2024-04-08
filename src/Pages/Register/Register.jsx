const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
    }

    return (
        <div className=" h-screen bg-[#4747471e] bg-[url('https://i.ibb.co/D4p1Y1x/real-state-banner-2.png')] bg-blend-screen bg-cover bg-no-repeat pt-[8%]">

            <div className="lg:w-1/3 md:mx-10 mx-3 bg-[#e0def785] lg:mx-auto text-center p-10 rounded-md mix-blend-screen">
                <h2 className="text-4xl text-white font-bold">Create an account</h2>
                <hr className="mx-[20%] my-5" />
                <form onSubmit={handleRegister} >
                    <div className="flex flex-col gap-4 m-8">
                    <input className=" bg-[#100A55] p-3 text-lg text-white placeholder:text-white rounded-md" type="text" name="name" placeholder="Your Name" />
                    <input className="bg-[#100A55] p-3 text-lg text-white placeholder:text-white rounded-md" type="text" name="photo" placeholder="Your Photo url" />
                    <input className="bg-[#100A55] p-3 text-lg text-white placeholder:text-white rounded-md" type="email" name="email" placeholder="Your Email" />
                    <input className="bg-[#100A55] p-3 text-lg text-white placeholder:text-white rounded-md" type="password" name="password" placeholder="Password" />
                    <input type="submit" value="" />
                    <button type="submit" className="border bg-[#100A55] p-3 text-lg font-medium text-white rounded-md hover:bg-[#000] hover:text-white " >Register</button>
                    </div>
                    {/* <input type="button" value="" /> */}
                </form>
            </div>
        </div>
    );
};

export default Register;