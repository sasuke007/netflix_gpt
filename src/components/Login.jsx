import Header from "./Header.jsx";

const Login = () => {
    return (
        <div className="relative flex">
            <Header/>
            <img className="h-screen w-screen"
                 src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
                 alt="Background Image"/>
            <div
                className="z-10 login-form absolute p-20 top-1/4 left-1/3 text-white flex justify-center items-center bg-gray-800 bg-opacity-80 ">
                <form className="flex flex-col flex-auto content-around">
                    <div className="font-bold text-3xl p-2 m-3"> Sign In </div>
                    <input type="text" placeholder="Email Address" className="p-2 m-3 w-full bg-gray-900 rounded-lg"/>
                    <input type="password" placeholder="Password" className="p-2 m-3 w-full bg-gray-900 rounded-lg"/>
                    <button className="p-2 m-3 w-full bg-red-700 rounded-lg">Sign In</button>
                    <p className="p-2 m-2 w-full">New Customer ? Sign Up</p>
                </form>
            </div>
        </div>
    )
}


export default Login;