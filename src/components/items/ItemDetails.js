import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetails = () => {
  const [item, setItem] = useState({})

  const { itemId } = useParams()

  useEffect(() => {
    fetch(
      `http://localhost:8088/items/${itemId}?_expand=season&_expand=category`
    )
      .then((res) => res.json())
      .then((itemData) => {
        setItem(itemData)
      })
  }, [])

  return (
    <div className="item-detail-container">
      <h3 className="item-detail-name">Item details for item: {item?.name}</h3>
      <img src={item?.imageUrl} alt={item?.name} className="item-img" />
      <div className="item-details">Category: {item?.category?.name}</div>
      <div className="item-details">Season: {item?.season?.name}</div>
    </div>
  )
}
