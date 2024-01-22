import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const Card =(resData) =>{
    // console.log(resData.resData);
  const {id,name,cuisines,areaName,avgRating,cloudinaryImageId,costForTwo}=resData?.resData?.info;
  const {deliveryTime}=resData?.resData?.info?.sla;

  const navigate=useNavigate();

  handleRoute=()=>{
    navigate(`/restaurantDetails/${resId}`);
  }
    return (
    <div className="card" onClick={()=>{handleRoute()}}>
        <div className="img">
            <img width="250" height="220" src={`${IMG_CDN}/${cloudinaryImageId}`} alt="card-img"/>
        </div>
        <div className="card-details">
            <h3>{name}</h3>
            <div className="cusine">
                {cuisines.join(', ')}
            </div>
            <div className="time-rating">
                <p>{deliveryTime} min</p>
                <p>{avgRating} Star</p>
            </div>
            <div className="time-rating">
             <p>{costForTwo}</p>
            </div>
        </div>
    </div>
    );
}

export default Card