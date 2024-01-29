import React, { useState } from 'react'
import MenuItem from './MenuItem';

const RestaurantCategory =({data,showItem,setShowIndex}) =>{
    const {title,itemCards} =data.card.card;
    //const [showItem,setShowItem]=useState(false);

    handleClickHeader =() =>{
       // setShowItem(!showItem);
       setShowIndex()
    }
    return (
         <div className="text-xl font-bold  m-4 p-4 bg-orange-200 shadow-slate-200 rounded">
            <div className="flex justify-between" onClick={handleClickHeader}>
                <span>{title} ({itemCards.length})</span>
                <span className='text-black-600'>🔽</span>
            </div>
          
           <div>
                { showItem && itemCards.map((item) =>(
                                <div key={item?.card?.info?.id}>
                                    <MenuItem menu={item?.card?.info}/>
                                </div>
                                ))
                }
           </div>
        </div>
     )
}
export default RestaurantCategory;