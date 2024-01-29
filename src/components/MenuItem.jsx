import React from 'react'
import { MENU_ITEM_IMG } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/redux/cartSlice';

const MenuItem = ({menu,cart=false}) => {
    const {name,price,description,imageId,id}=menu;
    const dispacth=useDispatch();

    onRemove =() =>{
      dispatch(removeItem(id));

    }
    handleItem =(item)=>{
      //dispatch an itme to the store
      dispacth(addItem(item));
      //action.payload ="Lemon"
    }
  return (
    <div className='bg-gray-100 m-4 p-4 flex  shadow-slate-200 rounded'>
                <div className='w-[200px]'>
                    <img className="w-[200px] h-[200px] rounded" alt="Image-missing" src={`${MENU_ITEM_IMG}/${imageId}` }/>
                </div>
                  <div>
                    <div className="flex justify-between">
                      <span className='m-2 p-2 font-semibold text-2xl'>{name}</span>
                      {
                        cart && <span className="p-2 m-4 h-7 text-sm flex items-center cursor-pointer bg-orange-200  rounded" 
                        onClick={onRemove}>Remove</span>
                      }
                    </div>
                    <div className='m-2 p-2 text-xs'>{description}</div>
                    <div className='mx-2 p-2 font-italic text-xl'>₹ {price/100}</div>
                    <div>
                        {
                          !cart &&  <div className="p-2 m-4 h-7 text-sm flex w-[94px] items-center cursor-pointer bg-orange-200  rounded" 
                                      onClick={ ()=>{handleItem(menu)} }>Add to Cart
                          </div>
                        }
                    </div>
                    
                  </div> 
     </div>
  )
}

export default MenuItem