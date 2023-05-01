import {useEffect,useState} from "react"


function Cardlist({cart}){
    const [CART,setcart]=useState([])
    useEffect(()=>{
        setcart(cart)
    },[cart])
    

return (<div><div className="flex">{
    CART.map((data,index)=>{
        return<div ><img src={data.url} alt="image of game"width="100px" height="100px"className="image"/><span className="text">name : {data.name} || price : {data.price *data.quantity}</span>
       <span> <button  onClick={()=>{const _CART=CART.map((item,cardindex)=>{
            return index===cardindex ?{...item,quantity:item.quantity>0 ?item.quantity-1:0}: item
        })
        setcart(_CART)}}>-</button>
        <span className="quantity">{data.quantity}</span>
        <button onClick={()=>{const _CART=CART.map((item,cardindex)=>{
            return index===cardindex ?{...item,quantity:item.quantity +1}: item
        })
        setcart(_CART)}}>+</button>
            </span>
        </div>
    })
}

    
    
    </div>
    <p> Total :
    {
     CART.map(item=>item.price * item.quantity).reduce((total,value)=>total + value,0)
    }
    
    
    
    
    
     </p>
     </div>
     )
}


export default Cardlist