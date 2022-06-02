import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
function AddItem(){
const [counter,setCounter]=useState(1)

const incCounter=()=>{
    if(counter<5)
    setCounter(counter+1)
    else 
    return
  }
  const decCounter=()=>{
    if(counter>1){
    setCounter(counter-1 )
    }
    else{
     return 
    }
  }

    return(<>
    <div className="addItem">
       <div className="item" onClick={decCounter}><BiMinus className='mp'/></div> 
       <div className="item_count">{counter}</div>
       <div className="item" onClick={incCounter}><BsPlus className='mp'/></div>
    </div>
    </>)
}
export default AddItem