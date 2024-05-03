import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resName } = props;
  const { name, locality, areaName, avgRating, cuisines } = resName?.info;
  return (
    <div className="cover" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={CDN_URL + resName.info.cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>{cuisines}</h4>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resName } = props;
    console.log(resName);
    const { avgRating } = resName?.info;
    return (
      <>
        <label>{avgRating}</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
