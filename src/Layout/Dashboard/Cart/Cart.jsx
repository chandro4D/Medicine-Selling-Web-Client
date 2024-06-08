import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../Hook/useCart";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div >
            <div className="h-24 w-[1300px] bg-gradient-to-r from-cyan-500 to-blue-500 mb-20 ">
                <h1 className="text-center font-semibold text-white text-4xl pt-5">Cart Page</h1>

            </div>
            <div>
                <div className="flex justify-evenly">
                    <h2 className="text-4xl ">TOTAL ORDERS : {cart.length}</h2>
                    <h2 className="text-4xl">TOTAL PRICE : {totalPrice}$ </h2>

                </div>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>PRODUCT NAME</th>
                                <th>COMPANY</th>
                                <th>PRICE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>

                                    <td>
                                        {item.product}
                                    </td>
                                    <td>
                                        {item.company}
                                    </td>
                                    <td>{item.price}</td>
                                    
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-xl bg-red-500 text-xl"><RiDeleteBin6Line />
                                        </button>
                                    </th>
                                </tr>)
                            }




                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;