export const ItemList = ({theFilteredItemsFromDecStation}, props ) => {

  return (
    <div className="item-container">
        {theFilteredItemsFromDecStation.map((itemObj) => {
          return (
            <div key={itemObj.id} className="item-card">
              <img
                src={itemObj.imageUrl}
                alt={itemObj.name}
                className="item-img"
              ></img>
              <div className="item-name">{itemObj.name}</div>
            </div>
          );
        })}
      </div>
  )
}

