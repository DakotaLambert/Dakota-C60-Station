import { useState, useEffect } from "react";
import "./DecorationStation.css";

export const DecorationStation = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [seasonChoice, setSeasonChoice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8088/items`)
      .then((response) => response.json())
      .then((theConvertedJSONDataThatsNowJavascriptForTheItems) => {
        setItems(theConvertedJSONDataThatsNowJavascriptForTheItems);
      });

    fetch(`http://localhost:8088/seasons`)
      .then((response) => response.json())
      .then((theConvertedJSONDataThatsNowJavascriptForTheSeasons) => {
        setSeasons(theConvertedJSONDataThatsNowJavascriptForTheSeasons);
      });
  }, []);


  useEffect(() => {
    if (seasonChoice === 0) {
      setFilteredItems(items);
    } else {
      const seasonItems = items.filter(
        (itemObj) => itemObj.seasonId === seasonChoice
      );

      setFilteredItems(seasonItems);
    }
  }, [items, seasonChoice]);

  return (
    <>
      <select
        onChange={(event) => {
          setSeasonChoice(parseInt(event.target.value));
        }}
      >
        <option value={0}>Choose a Season</option>
        {seasons.map((seasonObj) => {
          return (
            <option key={seasonObj.id} value={seasonObj.id}>
              {seasonObj.name}
            </option>
          );
        })}
      </select>
      <div className="item-container">
        {filteredItems.map((itemObj) => {
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
    </>
  );
};
