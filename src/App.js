import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { calculate } from './features/cartSlice'
import Modal from './components/Modal'

const App = () => {
  const {cartItems} = useSelector((store)=> store.cart)
  const dispatch = useDispatch()
  const {isOpen} = useSelector((state) => state.modal)
  useEffect(()=>{
    dispatch(
      calculate()
    );
  }, [cartItems]);
  
  return (
    <div>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </div>
  )
}

export default App