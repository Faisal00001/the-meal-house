import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
const SearchItem = ({ searchItem }) => {
    const { strMeal, strCategory, idMeal, strMealThumb } = searchItem;
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/${strCategory}/${idMeal}`)
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 h-[470px] shadow-xl flex flex-col">
                <figure className='px-7'><img className='h-[300px] w-full rounded-lg' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body ml-4">
                    <h2 className="card-title flex-grow">{strMeal}</h2>

                    <div className="card-actions justify-center">
                        <button onClick={handleShowDetails} className="btn bg-rose-500 text-white">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
SearchItem.propTypes = {
    searchItem: PropTypes.object.isRequired
}
export default SearchItem;