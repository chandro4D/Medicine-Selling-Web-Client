import { FaCartPlus, FaEnvelope, FaHome } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-white">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> My cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory'><FaCartPlus></FaCartPlus> Payment History</NavLink>
                    </li>



                    <div className="divider divider-neutral"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>  Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop"><MdRestaurantMenu />Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;