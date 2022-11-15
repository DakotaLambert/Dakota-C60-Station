import { useEffect, useState } from 'react'
import './DecorationStation.css'

export const DecorationStation = () => {
  const [items, setItems] = useState([])
  const [seasons, setSeasons] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [seasonChoice, setSeasonChoice] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8088/items')
      .then((res) => res.json())
      .then((itemsData) => {
        setItems(itemsData)
      })

    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((seasonsData) => {
        setSeasons(seasonsData)
      })
  }, [])

  useEffect(() => {
    if (seasonChoice === 0) {
      setFilteredItems(items)
    } else {
      const seasonItems = items.filter((item) => item.seasonId === seasonChoice)
      setFilteredItems(seasonItems)
    }
  }, [seasonChoice, items])

  return (
    <>
      <div id="filter-bar">
        <select
          className="filter-box"
          id="season-select"
          value={seasonChoice}
          onChange={(event) => {
            setSeasonChoice(parseInt(event.target.value))
          }}
        >
          <option key="0" value="0">
            All Seasons
          </option>
          {seasons.map((season) => {
            return (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            )
          })}
        </select>
      </div>
      <div className="item-container">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="item-card">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="item-img"
              ></img>
              <div className="item-name">{item.name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
