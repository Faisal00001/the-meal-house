import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    let productDetails = useLoaderData();
    productDetails = productDetails?.meals[0];
    return (
        <div>
            <div className="my-20 text-black">
                <h3 className="text-center mb-7 text-3xl font-bold">Welcome to Food Details</h3>
                <div className="w-3/5 mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 py-5 px-5 rounded-lg shadow-md space-y-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex-1">
                            <img className="w-[90%] rounded-full block" src={productDetails.strMealThumb} alt="" />
                        </div>
                        <div className="flex-1 font-bold mt-5 md:mt-0">
                            <h3 className="text-xl">Food Category : {productDetails.strCategory} <span>{productDetails.strMeal}</span></h3>
                            <h3 className="text-xl">Food Name : <span>{productDetails.strMeal}</span></h3>
                            <h3 className="text-xl">Food Region : <span>{productDetails.strArea}</span></h3>
                        </div>
                    </div>


                    <h3> <span className="font-bold">Making Instruction </span> :{productDetails.strInstructions}</h3>
                    <h3 className="font-bold">YouTube Link : <Link className="text-rose-800" to={productDetails?.strYoutube} >{productDetails?.strYoutube}</Link> </h3>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;