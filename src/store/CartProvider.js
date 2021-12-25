import { useReducer } from "react";

import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount: 0
};


const cartReducer = (state,action) =>{
    if(action.type === 'ADD'){
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return{
            items : updateItems,
            totalAmount:updateTotalAmount,
        };
    }
    return  defaultCartState;
};

const CartProvider = (props) =>{
    const[cartState, dispatchCarAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item)=>{
        dispatchCarAction({type:'ADD', item:item});
    };


    const removeItemFromCartHandler = (item)=>{
        dispatchCarAction({type:'REMOVE', id:id});
    };

    const CartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItem


    };

     


    const 


}














