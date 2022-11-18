import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HalloweenItems = (params) => {
  const [halloweenItems, setHalloweenItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/items?seasonId=1&_expand=season`)
      .then((res) => res.json())
      .then((dataReceived) => {
        setHalloweenItems(dataReceived);
      });
  }, []);

  const navigate = useNavigate()

  return (
    <>
    <div className="items-container">
      {halloweenItems.map((itemObj) => {
        return (
          <div className="item-card" key={itemObj.id}>

            <img
            style={{cursor: "pointer"}}
              src={itemObj.imageUrl}
              alt={itemObj.name}
              className="item-img"
              onClick={() => {
                navigate(`/halloween/${itemObj.id}`)
              }}
            />
            <div className="item-name">{itemObj.name}</div>
            <p>{itemObj.season?.name}</p>
          </div>
        );
      })}
    </div>
    </>
  );
};
