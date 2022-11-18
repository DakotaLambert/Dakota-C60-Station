import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const HalloweenItemDetails = () => {

const [theItem, setTheItem] = useState({})
const { halloweenItemId } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8088/items?id=${halloweenItemId}`)
      .then((res) => res.json())
      .then((dataReceived) => {
        setTheItem(dataReceived[0]);
      });
  }, []);

  return (
    <>
      <p>{theItem.name}</p>
    </>
  )
}