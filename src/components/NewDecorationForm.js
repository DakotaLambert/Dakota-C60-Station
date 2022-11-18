import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const NewDecorationForm = ({ seasonsFromDecStation, setItems }) => {
  const [categories, setCategories] = useState([]);
  const [userChoices, setUserChoices] = useState({
    name: "",
    imageUrl: "",
    seasonId: 0,
    categoryId: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:8088/categories`)
      .then((response) => response.json())
      .then((theConvertedJSONDataThatsNowJavascriptForTheCategories) => {
        setCategories(theConvertedJSONDataThatsNowJavascriptForTheCategories);
      });
  }, []);

  //! This handleInputChange function is reuseable code. Use it to your advantage.
  const handleInputChange = (event) => {
    const copyOfUserChoices = { ...userChoices };
    copyOfUserChoices[event.target.id] = event.target.value;
    setUserChoices(copyOfUserChoices);
  };

  const handleIntegerInputChange = (event) => {
    const copyOfUserChoices = { ...userChoices };
    copyOfUserChoices[event.target.id] = parseInt(event.target.value);
    setUserChoices(copyOfUserChoices);
  };

  const handleSaveDecoration = (event) => {
    event.preventDefault();

    if (
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.seasonId &&
      userChoices.categoryId
    ) {
      fetch("http://localhost:8088/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userChoices),
      })
        .then((res) => res.json())
        .then(() => {
          fetch("http://localhost:8088/items")
            .then((res) => res.json())
            .then((itemsData) => {
              setItems(itemsData);
              setUserChoices({
                name: "",
                imageUrl: "",
                seasonId: 0,
                categoryId: 0,
              });
            });
        });
    } else {
      alert("Please complete form");
    }
  };

  return (
    <>
      <form>
        <h2 className="decoration-form-title">
          Add a Decoration to the Station
        </h2>
        <fieldset>
          <div className="form-group">
            <input
              required
              id="name"
              type="text"
              className="form-control"
              placeholder="Item"
              value={userChoices.name}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              required
              id="imageUrl"
              type="text"
              className="form-control"
              placeholder="Image URL"
              value={userChoices.imageUrl}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            {seasonsFromDecStation.map((seasonObj) => {
              return (
                <div key={seasonObj.id} className="radio">
                  <label>
                    <input
                      id="seasonId"
                      type="radio"
                      value={seasonObj.id}
                      checked={userChoices.seasonId === seasonObj.id}
                      onChange={handleIntegerInputChange}
                    />
                    {seasonObj.name}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            {categories.map((category) => {
              return (
                <div key={category.id} className="radio">
                  <label>
                    <input
                      id="categoryId"
                      type="radio"
                      value={category.id}
                      checked={userChoices.categoryId === category.id}
                      onChange={handleIntegerInputChange}
                    />
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>

        <button className="btn" onClick={handleSaveDecoration}>
          Add Decoration
        </button>
        
      </form>
    </>
  );
};
