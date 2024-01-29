import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_ITEM_IMG, SWIGGY_MENU } from '../utils/constants';
import Shimmer from './Shimmer';
import useFetchApi from '../utils/useFetchApi';
import RestaurantCategory from './RestaurantCategory';

const ResMenu = () => {
    const {resId}=useParams();
    const [showIndex,setParentShowIndex]=useState(0);

    const menuDetails=useFetchApi(`${SWIGGY_MENU}${resId}`);  //customHooks
    console.log(menuDetails);
  
    if(menuDetails == null){    // i was wrongly comparing like if(!menuDetails)return <Shimmer/>,undefined was also considering
      return <Shimmer/>
    }

    const{name,cuisines,costForTwoMessage,veg,locality,
      city,avgRating,cloudinaryImageId,totalRatingsString}=menuDetails?.data?.cards[0].card.card.info
    const {offers}=menuDetails?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
    //const {itemCards}=menuDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const categories=(menuDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
                    .filter(data => data?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
    <div class="menu">
        <div className="flex text-center justify-center p-4 border-bottom border-solid border-gray-600">
          <div >
            <h2 className='font-bold text-3xl'>{name}</h2>
            <p className='font-sm text-gray-400'>{cuisines.join(', ')}</p>
            <p className='font-semibold'>{locality}</p>
          </div>
          
        </div>
        
        <div className="offers">
          {offers.map((offer) =>(
            <div key={offer.info.header} className="offer">
              <div><h4>{offer.info.header}</h4></div>
              <div className="coupon">
                <span><h5>{offer.info.description}</h5></span>
                <span><h5>{offer.info.couponCode}</h5></span>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-list">
          {
            categories?.map(((category,index) =>(
              <RestaurantCategory key={index} 
                    data={category}
                    showItem={index == showIndex ? true : false}
                    setShowIndex={()=>setParentShowIndex(index)}/>
            )))
          }
        
        </div>
    </div>
  )
}

export default ResMenu