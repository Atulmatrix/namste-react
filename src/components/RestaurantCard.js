const RestaurantCard = (props) => {
  const { resName } = props;
  const { name, locality, areaName, avgRating, cuisines } = resName?.info;
  return (
    <div className="cover" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resName.info.cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>{cuisines}</h4>
    </div>
  );
};

export default RestaurantCard;
