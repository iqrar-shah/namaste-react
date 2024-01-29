import React from 'react'
import { IMG_CDN } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const Card =(resData) =>{
    // console.log(resData.resData);
  const {id:resId,name,cuisines,areaName,avgRating,cloudinaryImageId,costForTwo}=resData?.resData?.info;
  const {deliveryTime}=resData?.resData?.info?.sla;

  const navigate=useNavigate();

    return (
    <div className="m-4 p-4 w-[260px] bg-gray-100 hover:bg-orange-200 rounded shadow-lg" onClick={()=>{navigate(`/restaurants/${resId}`);}}>
        <div className="img">
            <img className='w-[230px] h-[220px] rounded-lg' src={`${IMG_CDN}/${cloudinaryImageId}`} alt="card-img"/>
        </div>
        <div className="card-details">
            <h3 className="font-bold py-3 text-lg text-black-700">{name}</h3>
            <div className="font-semibold text-sm text-gray-700">
                {cuisines.join(', ')}
            </div>
            <div className="flex justify-between my-2">
                <p>{deliveryTime} min</p>
                <p>{avgRating} Star</p>
            </div>
            <div className="font-semibold italic text-md">
             <p>{costForTwo}</p>
            </div>
        </div>
    </div>
    );
}

// Higher order component

// input - Restaurant card ==> Card with promoted label

export const withPromotedLabel =(Card)=>{
    return (resData)=>{
        return (
            <div>
                <label className='absolute  text-sm bg-black text-white p-2 rounded-lg'>Promoted</label>
                <Card {...resData}/>
            </div>
        )
    }
}

export default Card