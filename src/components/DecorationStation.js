import { useState, useEffect } from "react";
import "./DecorationStation.css";


export const DecorationStation = () => {

};




































{/* <SeasonFilter
theSeasonsFromDecStation={seasons}
setSeasonChoicesFromDecStation={setSeasonChoice}
/> */}

// const [items, setItems] = useState([]);
// const [filteredItems, setFilteredItems] = useState([]);
// const [seasons, setSeasons] = useState([]);
// const [seasonChoice, setSeasonChoice] = useState(0);


// useEffect(() => {
//   fetch(`http://localhost:8088/items`)
//     .then((response) => response.json())
//     .then((theConvertedJSONDataThatsNowJavascriptForTheItems) => {
//       setItems(theConvertedJSONDataThatsNowJavascriptForTheItems);
//     });

//   fetch(`http://localhost:8088/seasons`)
//     .then((response) => response.json())
//     .then((theConvertedJSONDataThatsNowJavascriptForTheSeasons) => {
//       setSeasons(theConvertedJSONDataThatsNowJavascriptForTheSeasons);
//     });
// }, []);

// useEffect(() => {
//   if (seasonChoice === 0) {
//     setFilteredItems(items);
//   } else {
//     const seasonItems = items.filter(
//       (itemObj) => itemObj.seasonId === seasonChoice
//     );

//     setFilteredItems(seasonItems);
//   }
// }, [items, seasonChoice]);

// return (
//   <>
//     <NewDecorationForm
//       seasonsFromDecStation={seasons}
//       setItems={setItems}
//     />
//     <ItemList theFilteredItemsFromDecStation={filteredItems} />
//   </>
// );