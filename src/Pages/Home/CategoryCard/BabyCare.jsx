import { FaRegEye } from "react-icons/fa";
import useProducts from "../../../Hook/useProducts";
import { Helmet } from "react-helmet-async";





const BabyCare = () => {
    const [products] = useProducts();
    const babyCare = products.filter(item => item.Category === 'babyCare');
    return (
        <div className="mx-[100px]">
             <Helmet>
                <title>HealthHaven | BabyCare</title>
            </Helmet>
            <h3 className="pt-40 text-center">Baby care</h3>
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
                                className="h-24"
                                key={item._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>

                                        <h3><img src={item.product_image} /> </h3>

                                    </td>
                                    <td>
                                        <h3>{item.product_name}</h3>

                                    </td>
                                    <td>
                                        <h3> {item.Category}</h3>
                                    </td>
                                    <td>
                                        <h3>{item.product_company}</h3>
                                    </td>
                                    <td>
                                        <h3> {item.price}</h3>
                                    </td>
                                    <td className="mb-6">
                                        <h3> {item.weight}</h3>
                                    </td>
                                    <td className="btn h-10 btn-secondary mt-6 mr-3">
                                        <button>select</button>
                                    </td>
                                    <div className="dropdown dropdown-end mr-24">
                                        <div tabIndex={0} className=" m-1"><td className="text-pink-600 mt-6   text-xl btn btn-outline">
                                            <button>
                                                <FaRegEye />
                                            </button>
                                        </td></div>
                                        <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-6 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-72">
                                            <li className="font-semibold"><a>{item.product_name}</a></li>
                                            <li className="font-semibold"><a>Dashboard</a></li>

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