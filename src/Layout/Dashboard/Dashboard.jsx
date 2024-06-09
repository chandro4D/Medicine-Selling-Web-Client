import { FaBook, FaCartPlus, FaEnvelope, FaHome, FaList, FaUsers } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isAdmin = true;
    const isSeller = true;
    return (
        <div className="flex  ml-24">
            <div className="w-72 min-h-screen bg-orange-400">
                <ul className="menu pl-8  text-white">
                    <div className="pt-8">
                    <img className="mr-2 ml-16 mb-2 w-[80px] h-[80px] rounded-full" src="../../../../public/default.png" alt="" />
                    <h1 className="text-xl pl-9 mb-3 font-bold">HealthHaven</h1>
                    </div>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome> ADMIN HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"> <FaUsers />MANAGE USERS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">MANAGE CATEGORY</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaList></FaList> PAYMENT MANAGEMENT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"> <FaBook></FaBook> SALES REPORT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"> <FaBook></FaBook> MANAGE BANNER</NavLink>
                            </li>


                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> My cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'><FaCartPlus></FaCartPlus> Payment History</NavLink>
                                </li>
                            </>
                    }
                    {
                        !isSeller ? <>

                            <li>
                                <NavLink to="/dashboard/userHome"><FaHome></FaHome> Seller Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus> Manage Medicine</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'><FaCartPlus></FaCartPlus> Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory'><FaCartPlus></FaCartPlus> Advertisement</NavLink>
                            </li>

                        </> :
                            <>
                            </>
                    }



                    {/* -----------------------------sherd item------------------------------------------------------------ */}
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