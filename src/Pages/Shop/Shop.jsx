// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import useProducts from "../../Hook/useProducts";
// import ProductsTable from "../Shared/ProductsTable/ProductsTable";




const Shop = () => {
    // const [products] = useProducts();
    // const allProducts = products;
    return (
        <div className="mb-20">
             <Helmet>
                <title>HealthHaven | Shop</title>
            </Helmet>
            <h3 className="pt-40 text-center text-3xl text-red">This Is Shop Page</h3>
            {/* <div >
               {
                allProducts.map((product,index) => <ProductsTable
                key={product._id}
                product={product}
                index={index}
                ></ProductsTable>)
               }
            </div> */}
        </div>
    );
};

export default Shop;