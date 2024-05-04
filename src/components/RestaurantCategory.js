const RestaurantCategory = (props) => {
  const { data } = props;
  console.log(data);

  // return (
  //   <div>
  //     {data.map((item) => {
  //       return (
  //         <li key={item.card.info.id}>
  //           {item.card.info.name}-{"Rs "}
  //           {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
  //         </li>
  //       );
  //     })}
  //   </div>
  // );

  const { title, itemCards } = data;

  return (
    <>
      <h1>{title}</h1>
      {/* <ItemList items={data.itemCards} /> */}
      {itemCards.map((item) => {
        return (
          <li key={item.card.info.id}>
            {item.card.info.name}----{"  Rs. "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        );
      })}
    </>
  );
};

export default RestaurantCategory;
