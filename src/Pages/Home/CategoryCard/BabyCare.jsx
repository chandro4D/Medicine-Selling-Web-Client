import { FaRegEye } from "react-icons/fa";
import useProducts from "../../../Hook/useProducts";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";





const BabyCare = () => {
    const [products] = useProducts();
    const babyCare = products.filter(item => item.Category === 'babyCare');

    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const handleAddToCart = medicine => {
        if (user && user.email) {
            const cartItem = {
                menuId: medicine._id,
                email: user.email,
                name: user.displayName,
                image: medicine.product_image,
                price: medicine.price,
                company: medicine.product_company,
                Category: medicine.Category,
                weight: medicine.weight,
                product: medicine.product_name
            }
            console.log(cartItem);
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",

                            title: `${medicine.product_name} `,
                            text: "ADDED TO YOUR CART SUCCESSFULLY",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "YOU ARE NOT LOGGED IN",
                text: "PLEASE LOGIN TO ADD TO CART",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "YES, LOGIN!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="mx-[90px]">
            <Helmet>
                <title>HealthHaven | Tablet</title>
            </Helmet>
            <h3 className="pt-40 text-center">Tablet A</h3>
            <div className="ml-[60px] mb-6">
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Product Company</th>
                                <th>Price</th>
                                <th>weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                babyCare.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th className="mb-6">
                                        {index + 1}
                                    </th>
                                    <td className="mb-6">

                                        <h3><img className="w-20 h-16 rounded-lg" src={item.product_image} /> </h3>

                                    </td>
                                    <td className="mb-6">
                                        <h3>{item.product_name}</h3>

                                    </td>
                                    <td className="mb-6">
                                        <h3> {item.Category}</h3>
                                    </td>
                                    <td className="mb-6">
                                        <h3>{item.product_company}</h3>
                                    </td>
                                    <td className="mb-6">
                                        <h3> {item.price}</h3>
                                    </td>
                                    <td className="mb-6">
                                        <h3> {item.weight}</h3>
                                    </td>
                                    <td className="btn h-10 mt-5 btn-secondary  mr-3">
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                        >select</button>
                                    </td>
                                    <div className="dropdown dropdown-end ">
                                        <div tabIndex={0} className=" m-1"><td className="text-pink-600 mt-6   text-xl btn btn-outline">
                                            <button>
                                                <FaRegEye />
                                            </button>
                                        </td></div>
                                        <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-6 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-72">
                                            <li className="font-semibold"><a><img className="w-60 h-28 rounded-lg" src={item.product_image} /> </a></li>
                                            <li className="font-semibold"><a>Name:{item.product_name}</a></li>
                                            <li className="font-semibold"><a>Company:{item.product_company}</a></li>
                                            <li className="font-semibold"><a>Price:{item.price}</a></li>
                                            <li className="font-semibold"><a>{item.weight}ML</a></li>

                                        </ul>
                                    </div>




                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    );
};

export default BabyCare;