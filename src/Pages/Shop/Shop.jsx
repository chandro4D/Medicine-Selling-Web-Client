
import { Helmet } from "react-helmet-async";
import useProducts from "../../Hook/useProducts";
import { FaRegEye } from "react-icons/fa";






const Shop = () => {
    const [products] = useProducts();
    const allProducts = products;
    return (
        <div className="mx-10">
            <Helmet>
                <title>HealthHaven | Shop</title>
            </Helmet>
            <h3 className="pt-40 text-center text-3xl text-red">This Is Shop Page</h3>



            <div className="overflow-x-auto  ">
                <table className="table ">
                    {/* head */}
                    <thead >
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
                    <tbody >

                        {
                            allProducts.map((item, index) =>
                                <tr
                                    className="h-24"
                                    key={item._id}


                                >

                                    <th >
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
                                    <td>
                                        <h3> {item.weight}</h3>
                                    </td>
                                    <td className="btn h-10 btn-secondary mr-3 mt-6 ">
                                        <button>select</button>
                                    </td>
                                    <div className="dropdown dropdown-end ">
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





                                </tr>



                            )
                        }




                    </tbody>


                </table>
            </div>
        </div >

    );
};

export default Shop;