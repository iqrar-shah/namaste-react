import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetails = () => {
    const {id}=useParams();

  return (
    <div>
        <h2>RestaurantDetails</h2>
        <p>{id}</p>
    </div>
  )
}

export default RestaurantDetails