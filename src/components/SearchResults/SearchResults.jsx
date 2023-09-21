import { useLoaderData } from "react-router-dom";
import SearchItem from "../SearchItem/SearchItem";
const SearchResults = () => {
    const searchRes = useLoaderData({});
    let searchItems = searchRes.meals
    if (searchItems === null) {
        console.log('Sorry')
    }
    console.log(searchItems)
    return (
        <div>
            <div className={searchItems !== null ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10` : ''} >
                {
                    searchItems !== null ? searchItems.map((searchItem, index) => <SearchItem searchItem={searchItem} key={index}></SearchItem>) : <div className="text-3xl font-bold mt-10 flex justify-center"> <h3>Oops , Sorry No Items Found</h3></div>
                }
            </div>
        </div>
    );
};

export default SearchResults;