import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/redux/cartSlice";
import MenuItem from "./MenuItem";

  const Cart =()=>{

    const dispatch =useDispatch();
    const cartList =useSelector(store => store.cart.items);
    const onClearItem = ()=>dispatch(clearItem());

    console.log(cartList);
    return (
    <div className="w-6/12 m-auto p-4 border border-gray">
        <div className="flex justify-between">
            <span className="p-4 font-bold text-xl">Cart</span>
            <span>
            {
                cartList.length > 0 ? (<div className="p-2 m-4 h-7 text-sm flex items-center cursor-pointer bg-orange-200  rounded"
                                        onClick={onClearItem}>Clear Cart</div>
                ) :('')
            }
            </span>
        </div>
        <div>
            {cartList.length > 0 ? (cartList.map((item) =>(
                                <div key={item?.id}>
                                    <MenuItem menu={item} cart={true}/>
                                </div>
                                ))
                                ) :
                        (<div className="p-2 m-4 h-7 text-sm flex items-center cursor-pointer bg-orange-200  rounded font-bold">Cart is empty!!</div>)
            }
        </div>
    </div>)
  }

  export default Cart;