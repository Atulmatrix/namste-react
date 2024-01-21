import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="SearchContainer">Search</div>
      <div className="res-Container">
        {resList.map((res, index) => {
          return <RestaurantCard key={index} resName={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
