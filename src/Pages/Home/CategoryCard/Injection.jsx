import { FaRegEye } from "react-icons/fa";
import useProducts from "../../../Hook/useProducts";
import { Helmet } from "react-helmet-async";


const Injection = () => {
    const [products] = useProducts();
    const injection = products.filter(item => item.Category === 'injection');
    return (
        <div className="mx-[90px]">
            <Helmet>
                <title>HealthHaven | Injection</title>
            </Helmet>
            <h3 className="pt-40 text-center">Injection</h3>
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
                                injection.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th className="mb-6">
                                        {index + 1}
                                    </th>
                                    <td className="mb-6">

                                        <h3><img src={item.product_image} /> </h3>

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
                                    <td className="btn mb-6 h-10 btn-secondary mr-3">
                                        <button>select</button>
                                    </td>
                                    <td className="text-pink-600 mb-6 text-xl btn btn-outline">
                                        <button><FaRegEye /></button>
                                    </td>




                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Injection;