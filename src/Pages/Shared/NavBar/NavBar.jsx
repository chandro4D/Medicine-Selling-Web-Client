import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const NavBar = () => {
    const Links = <>

        <li className="text-xl mt-3  "><Link to="/">Home</Link></li>
        <li className="text-xl mt-3"><Link to="/shop">Our Shop</Link></li>
        
        <li className="text-xl mt-3"><Link to="/login">LogIn</Link></li>
        <li className="text-xl mt-3"><Link to="/register">Register</Link></li>

        <li className="text-xl align-top mt-[6px]"><Link to="/dashboard/cart">
            <button className="btn">
                <FaCartPlus></FaCartPlus>
                {/* {cart.length} */}
                <div className="badge badge-secondary">+0</div>
            </button>
        </Link></li>
        <li ><a className="btn btn-secondary mt-3 text-xl text-white ">Join Us</a></li>
       
        {/* {
            user ?
                <>
                    <div className=" tooltip tooltip-bottom mr-5" data-tip={user.displayName || user.email}  >
                        <img className="rounded-full w-14" src={user.photoURL || "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"} />
                    </div>
                    <Link to=""><button onClick={handleSignOut} className="btn  bg-green-600 text-xl font-medium ">SING OUT</button></Link>

                </>
                :
                <>

                </>

        } */}

    </>
    return (
        <div className="navbar fixed z-10 bg-sky-500 w-full text-white lg:h-32 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <div className="flex lg:ml-[130px]">
                    <img className="mr-2 w-[60px] h-[60px] rounded-full" src="../../../../public/default.png" alt="" />
                    <a className="text-white text-2xl font-bold  pt-3">HealthHaven</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex mr-[350px] ">
                <ul className="menu menu-horizontal ">
                    {Links}
                </ul>
            </div>



        </div>
    );
};

export default NavBar;