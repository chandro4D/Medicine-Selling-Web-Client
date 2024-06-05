import { FaRegEye } from "react-icons/fa";

const ProductsTable = () => {
    return (
        <div className="ml-[60px]">
            <div className="overflow-x-auto">
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
                        {/* row 1 */}
                        <tr>
                            <th>
                                {1}
                            </th>
                            <td>

                                <h3>image</h3>

                            </td>
                            <td>
                                <h3>Product Name</h3>

                            </td>
                            <td>
                                <h3> Category</h3>
                            </td>
                            <td>
                                <h3>Product Company</h3>
                            </td>
                            <td>
                                <h3> Price</h3>
                            </td>
                            <td>
                                <h3> Weight</h3>
                            </td>
                            <td className="btn h-10 btn-secondary mr-3">
                                <button>select</button>
                            </td>
                            <td className="text-pink-600 text-xl btn btn-outline">
                                <button><FaRegEye /></button>
                            </td>




                        </tr>

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default ProductsTable;