
import { Helmet } from "react-helmet-async";
import useProducts from "../../Hook/useProducts";
import { FaRegEye } from "react-icons/fa";





const Shop = () => {
    const [products] = useProducts();
    const allProducts = products;
    return (
        <div className="mx-[90px]">
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

                                    key={item._id}
                                    

                                >

                                    <th className="mb-5" >
                                        {index + 1}
                                    </th>
                                    <td className="mb-5">

                                        <h3><img src={item.product_image} /> </h3>

                                    </td>
                                    <td className="mb-5">
                                        <h3>{item.product_name}</h3>

                                    </td>
                                    <td className="mb-5">
                                        <h3> {item.Category}</h3>
                                    </td>
                                    <td className="mb-5">
                                        <h3>{item.product_company}</h3>
                                    </td>
                                    <td className="mb-5">
                                        <h3> {item.price}</h3>
                                    </td>
                                    <td className="mb-5">
                                        <h3> {item.weight}</h3>
                                    </td>
                                    <td className="btn h-10 btn-secondary mr-3 mb-5">
                                        <button>select</button>
                                    </td>
                                    <td className="text-pink-600 mb-5 text-xl btn btn-outline">
                                        <button><FaRegEye /></button>
                                    </td>



                                     
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