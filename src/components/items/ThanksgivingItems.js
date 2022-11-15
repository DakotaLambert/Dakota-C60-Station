import { useState, useEffect } from 'react'

export const ThanksgivingItems = () => {
  const [items, setItems] = useState([]) // returns an array: [stateVariable, setStatefunction] takes one argument: the initial value of the state variable

  // Use Effect watches for state change
  // It takes two arguments, a function and an array
  // The array is which states we want to observe
  // The function is what we want to do when that observed state changes
  useEffect(() => {
    console.log('I only run once')
    fetch(`http://localhost:8088/items?seasonId=3`)
      .then((res) => res.json())
      .then((itemsArray) => {
        setItems(itemsArray)
      })
  }, []) // An empty dependency array will watch for the initial render of the component and only run the callback on that  initial run.

  return (
    <div className="items-container">
      {items.map((itemObj) => {
        return (
          <div className="item-card" key={itemObj.id}>
            <img
              src={itemObj.imageUrl}
              alt={itemObj.name}
              className="item-img"
            />
            <div className="item-name">{itemObj.name}</div>
          </div>
        )
      })}
    </div>
  )
}
