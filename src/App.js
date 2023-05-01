 import Header from "./component/Header"
import './App.css';
import Product from "./component/Product"
import { useState } from "react";
import Cardlist from "./component/Cardlist"
import Add from "./component/Add"

function App() {
  const [product,setproduct]=useState([{url:"https://3.bp.blogspot.com/-KnBUzHJE9Lc/XLIgdKoC6mI/AAAAAAAAATg/-Gt-udABGM0fCRwC-gpmSJm76fwKH_vmwCLcBGAs/s1600/787866.jpg",
name:"subway surfers",price:800},
{url:"https://venturebeat.com/wp-content/uploads/2017/08/ab2-1.jpeg?fit=1920%2C1080&strip=all",name:"Angry Brids 2",price:1000},
{
  url:"https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2017/02/hero-xl.jpg.adapt.crop191x100.1200w.jpg",name:"Real Racing 3",price:2001
},
{
  url:"https://image.winudf.com/v2/image1/Y29tLmVpdmFhZ2FtZXMuUmVhbENoZXNzM0RGcmVlX3NjcmVlbl8yM18xNTQ1MDY5ODI0XzA0Nw/screen-23.jpg?fakeurl=1&type=.jpg",name:"Real Chess 3d",price:200
},{
  url:"https://www.naldotech.com/wp-content/uploads/2014/10/fruit-ninja-2.jpg",name:"Fruit Ninja",price:2001
},{
  url:"https://tse1.mm.bing.net/th?id=OIP.biNXmbzkdYDJuKGi-7iybgHaEK&pid=Api&P=0",name:"Marvel's Spider-Man",price:4000
},{
  url:"https://tse3.mm.bing.net/th?id=OIP.EMuQywO1b1Flo1sXg1itewHaEK&pid=Api&P=0",name:"Persona 5 The Royal",price:3000
},{
  url:"https://www.windowscentral.com/sites/wpcentral.com/files/styles/mediumplus/public/field/image/2021/06/battlefield-2042-cover-art-standard.jpg",name:"Battlefield 2042",price:7000
},{
  url:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/God-of-War-Ragnarok-Featured-image.jpg",name:"God Of War Ragnarok",price:3999
},{
  url:"https://tse4.mm.bing.net/th?id=OIP.ThyDm2g3wRiTQGGkbi_MWAHaKT&pid=Api&P=0",name:"Doom Eternal Pc",price:3030
}
])
const [cart,setcart]=useState([])
const[showcomponent,setshowcomponent]=useState(false)

const addtocard=(data)=>{
  
  setcart([...cart,{...data,quantity:1}])

}

const handel=()=>{
  setshowcomponent(!showcomponent)
}
  return (
    <div><Header count={cart.length} handel={handel}/>
    {showcomponent?
    <Cardlist cart={cart} />:
    <Product product={product} addtocard={addtocard}/>}
    
    </div>
    
  );
}

export default App;
