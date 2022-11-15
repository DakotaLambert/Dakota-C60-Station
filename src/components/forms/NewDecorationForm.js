import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewDecorationForm = () => {
  const [userChoices, setUserChoices] = useState({
    name: '',
    imageUrl: '',
    seasonId: 0,
    categoryId: 0,
  })
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((seasonsData) => {
        setSeasons(seasonsData)
      })

    fetch('http://localhost:8088/categories')
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData)
      })
  }, [])

  const handleSaveDecoration = (evt) => {
    evt.preventDefault()

    if (
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.seasonId &&
      userChoices.categoryId
    ) {
      fetch('http://localhost:8088/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userChoices),
      }).then(() => {
        fetch(`http://localhost:8088/items`).then(() => {
          navigate('/')
        })
      })
    } else {
      alert('Yo, fill out my form.')
    }
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item name"
            value={userChoices.name}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.name = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL: </label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="example.com"
            value={userChoices.imageUrl}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.imageUrl = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Season: </div>
          {seasons.map((seasonObj) => {
            return (
              <div key={seasonObj.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={seasonObj.id}
                    checked={userChoices.seasonId === seasonObj.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.seasonId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {seasonObj.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Category: </div>
          {categories.map((categoryObj) => {
            return (
              <div key={categoryObj.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={categoryObj.id}
                    checked={userChoices.categoryId === categoryObj.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.categoryId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {categoryObj.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <button
        className="btn"
        onClick={(event) => {
          handleSaveDecoration(event)
        }}
      >
        Add Decoration
      </button>
    </form>
  )
}
