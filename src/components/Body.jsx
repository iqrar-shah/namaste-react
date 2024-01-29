import React, { useEffect, useState } from 'react'
import Card ,{withPromotedLabel} from './Card';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body =() =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [fliteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const onlineStatus=useOnlineStatus();

    const PromotedCard= withPromotedLabel(Card);
    
    useEffect(()=>{
        fetchData();
        // demo purpose for unmounting
        const interval=setInterval(()=>{
            console.log("setInterval");
        },1000)

        //return method inside useeffect for unmounting
        return() =>{
            clearInterval(interval);
            console.log("unmount phase!!");
        }
    },[]);

    const fetchData =async () =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const formattedData =await data.json();

        formattedData?.data?.cards.forEach(cardCategory =>{
            if(cardCategory.card?.card?.["@type"] == "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"){
                setListOfRestaurants(cardCategory.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurants(cardCategory.card?.card?.gridElements?.infoWithStyle?.restaurants);
                return;
            }
        })
        //setListOfRestaurants(formattedData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurants(formattedData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    handleTopRated=()=>{
        let topRated= listOfRestaurants.filter((data)=>{
            return data.info.avgRating >= 4.5
        });
        setFilteredRestaurants(topRated);  //changing copy of original rest means filtered restaurant
    }
    //normal function in js
    function onHandleSearch(event){
        event.preventDefault();
        const filteredRestaurant =listOfRestaurants.filter(data => data.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredRestaurant);
    }

    if(!onlineStatus){
        return <h1>You are offline, Please connect with internet!!</h1>
    }
    
//        if(listOfRestaurants.length ==0){
//         return <Shimmer/>
//        } 
    console.log('Body Comp');
    return listOfRestaurants.length == 0 ? 
         (<Shimmer/>) 
        :(
        <div className="m-4 px-[70px]">
            <div className="flex justify-between mb-4 ">
                <div>
                    <input type="text" className="w-[350px] border border-solid border-black p-1.5 rounded" placeholder="search food, restaurant ..." value={searchText} 
                            onChange={(e)=>{
                                setSearchText(e.target.value)
                                console.log(searchText)}}/>
                    <span className="px-4 py-2 mx-4 bg-green-100 rounded" onClick={ (event)=>{onHandleSearch(event)} }>Search</span>
                </div>
                
                <div className="px-4 flex h-8 items-center bg-orange-200 rounded" onClick={ ()=>{handleTopRated()} }>Top Rated</div>
            </div>
            <div className="my-4 flex flex-wrap">
                {fliteredRestaurants?.map((restaurant)=>(
                    //  if veg  true, then show card with promoted label -- use higher order component 
                    restaurant.info.veg ? (<PromotedCard key={restaurant.info.id} resData={restaurant}/>) : 
                                                (<Card key={restaurant.info.id} resData={restaurant}/>)
                    // <Card key={restaurant.info.id} resData={restaurant}/>
                    )
                )}
            </div>
        </div>
    );
}

export default Body