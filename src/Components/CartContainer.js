import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './Cart'
import {clearCart} from '../features/cartSlice'
import { openModal } from '../features/modalSlice'



const CartContainer = () => {
    const {cartItems, total, amount} = useSelector((store)=> store.cart)
     const dispatch = useDispatch();

    if (amount < 1) {
        return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
        )
    }

  return (
    <section className='cart'>
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {cartItems.map((item)=>{
                return <Cart key={item.div} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div className='cart-total'>
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
                <button className='btn clear-btn'
                onClick={()=>{
                    dispatch(openModal())
                }}
                >
                 clear
                </button>

            </div>
        </footer>

    </section>
  )
}

export default CartContainer
