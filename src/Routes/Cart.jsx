import { useContext } from 'react';
import {MdDelete } from 'react-icons/md';
import { AuthContext } from '../Context/AuthContext';
import AddItem from './AddItem';
function Cart(){
const [state]=useContext(AuthContext)

    return(
        <>
       {state.token && <h3> Token: {state.token}</h3>}
      <h3>Shopping Item</h3>
     <hr />
     <br /><br />
<div className="cart">
       <div className="p_img"><img src="" alt="" /></div>
       <div className="cart_item">
       <div className="p_name p_name1" >Name</div>
       <div><AddItem/></div>
       <div className="p_price p_name1">price</div>
       <div className="p_remove p_name1" onClick={()=>{}}><MdDelete className='icon'/></div>
       </div>
</div>
        </>
    )
}
export default Cart