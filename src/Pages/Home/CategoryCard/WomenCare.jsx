
import { FaRegEye } from "react-icons/fa";
import useProducts from "../../../Hook/useProducts";
const WomenCare = () => {
    const [products] = useProducts();
    const womensCare = products.filter(item => item.Category === 'womensCare');
    return (
        <div>
            <h3 className="pt-40 text-center">Women care</h3>
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
                               womensCare.map((item, index) => <tr
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
                                    <td>
                                        <h3> {item.weight}</h3>
                                    </td>
                                    <td className="btn h-10 btn-secondary mr-3">
                                        <button>select</button>
                                    </td>
                                    <td className="text-pink-600 text-xl btn btn-outline">
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

export default WomenCare;