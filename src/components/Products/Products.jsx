import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
const Products = () => {
    let productsData = useLoaderData({});
    productsData = productsData.meals
    return (
        <div>
            <h3 className="text-center text-3xl font-bold my-7">Total Beefs Item : {productsData.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    productsData.map((product) => <Product product={product} key={product.idMeal}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;