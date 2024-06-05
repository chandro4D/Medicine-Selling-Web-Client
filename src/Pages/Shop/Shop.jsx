import { Helmet } from "react-helmet-async";


const Shop = () => {
    return (
        <div className="mb-20">
             <Helmet>
                <title>HealthHaven | Shop</title>
            </Helmet>
            <h3 className="pt-40 text-center text-3xl text-red">This Is Shop Page</h3>
        </div>
    );
};

export default Shop;