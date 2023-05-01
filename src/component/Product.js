import React from "react"


function Product({product,addtocard}){
    return (
    <div className="flex div1">{
        product.map((item,index)=>{return <div style={{width:"50%"}}>
            <img src={item.url} width="70%" height="250px"/>
        <p>Name : {item.name}   |  
        Price : {item.price}</p>
        <button onClick={()=>{addtocard(item)}}> Buy Now</button>
        </div>})

    }</div>
    )
}

export default Product