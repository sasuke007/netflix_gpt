const Header = () => {
    return (
        <div className="absolute z-10 m-0 w-screen flex justify-between bg-gradient-to-b from-black">
            <img className="w-44 "
                 src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                 alt="logo"/>
            <button className="text-white p-2">SignOut</button>
        </div>
    );
}

export default Header;