import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'
import { CloseModal } from '../features/modalSlice'

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
        <div className='modal'>
           <h4>remove all items from your shopping cart?</h4>
           <div className='btn-container'>
            <button className='btn confirm-btn'
            onClick={()=>{
                dispatch(clearCart())
                dispatch(CloseModal())
            }} 
            >confirm</button>
            <button className='btn confirm-btn' 
           onClick={()=>{
            dispatch(CloseModal())
           }}
            >cancel</button>
           </div>
        </div>

    </aside>
  )
}

export default Modal