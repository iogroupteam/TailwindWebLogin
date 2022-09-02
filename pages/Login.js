import Image from "next/image";
const Login = () => {
    return (
        <div>
            <div className="grid h-screen grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm: ">
                {/* /////////////////////////////////////////////////////////////////////////////grid1 */}
                <div className="bg-purple-200">
                    <div className="flex flex-col items-center h-full pt-10 xl:justify-center font-Dyna">
                        <Image src={"/login.gif"} height={300} width={400}>
                        </Image>
                        <h1 className="pt-5 text-4xl " >Welcom to IO</h1>
                        <h1 className="text-3xl">Website</h1>
                    </div>
                </div>
                {/* ///////////////////////////////////////////////////////////////grid2 */}
                <div>
                    {/* /////////////////////////////////////////////register */}
                    <div className="h-12 my-5 xl:my-12 ">
                        <div className="flex items-center justify-end mx-5 gap-x-5">
                            <h1 className="text-xs font-Dyna">Create Account!!!!</h1>
                            <button className="px-3 py-2 text-black bg-blue-200 rounded-sm"> Register</button>
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////welcome */}
                    <div className="h-32 ">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-3xl font-Dyna">Hello ! Welcome back . </h1>
                            <h1 className="mt-3 text-xs">Log in with your data that you entered </h1>
                            <h1 className="text-xs">during your registration</h1>
                        </div>
                    </div>

                    {/* //////////////////////////////////////////////////////////////////form */}
                    <form className="flex flex-col mx-6 gap-y-2">
                        <label className="text-sm">UserName</label>
                        <input className="p-2 text-xs bg-white shadow-sm shadow-gray-400" placeholder="Enter userName"></input>
                        <label className="text-sm">Password</label>
                        <input className="p-2 text-xs bg-white shadow-sm shadow-gray-400" placeholder="Enter passWord"></input>
                        <h1 className="flex justify-end text-xs text-blue-300">Forget Password?</h1>
                    </form>
                    {/* /////////////////////////////////////////////////////////////////button */}
                    <div className="pt-2 mx-6 ">
                        <button className="w-full p-3 text-black bg-blue-200 rounded-sm "> Start Now!</button>
                    </div>
                    {/* /////////////////////////////////////////////////////////////////google */}
                    
                    

                    <div className="h-32 ">
                        <div className="flex items-end justify-center h-full"> 
                       <a href="/Body/MyProject"> <button  className="px-5 py-2 mb-4 bg-white shadow-sm shadow-gray-400"> <span>
                            <Image src={'/google.png'} height={20} width={20}></Image></span> Sign with google </button></a> 
                       
                        </div>


                        
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;

Login.getLayout = function PageLayout(page){
    return(
        <>
        {page}
        </>
    )
}