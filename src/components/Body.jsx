import React, { useEffect, useState } from 'react'
import Card from './Card';
import Shimmer from './Shimmer';

const Body =() =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [fliteredRestaurants,setFilteredRestaurants]=useState([]);
   const [searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async () =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const formattedData =await data.json();
        console.log(formattedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(formattedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(formattedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
// //show shimmer UI, if loading
//        if(listOfRestaurants.length ==0){
//         return <Shimmer/>
//        } 
    console.log('Body Comp');
    return listOfRestaurants.length == 0 ? 
         (<Shimmer/>) 
        :(
        <div className="body">
            <div className="search-container">
                <div className="search-container">
                    <input type="text" placeholder="search food, restaurant ..." className="search" value={searchText} 
                            onChange={(e)=>{
                                setSearchText(e.target.value)
                                console.log(searchText)}}/>
                    <span className="search-btn" onClick={ (event)=>{onHandleSearch(event)} }>Search</span>
                </div>
                <div>
                    <div className="filter-btn" onClick={ ()=>{handleTopRated()} }>Top Rated</div>
                </div>
            </div>
            <div className="res-card-container">
                {fliteredRestaurants?.map((data)=>(
                    <Card key={data.info.id} resData={data}/>
                ))}
            </div>
        </div>
    );
}

export default Body