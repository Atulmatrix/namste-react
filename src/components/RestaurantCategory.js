const RestaurantCategory = (props) => {
  const { data } = props;
  console.log(data);

  // const { title } = data;
  // const { id } = data?.itemCards[0]?.card?.info;
  return (
    <div>
      {data.map((item) => {
        return (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        );
      })}
    </div>
  );
};

export default RestaurantCategory;
