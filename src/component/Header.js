import "../App.css"
import React from "react"

function Header(props) {
    
  return (<div>

    <div id="heder"className="flex shopping-card"><div>Shopping Card For Game</div>
    
    <div className="card" onClick={props.handel}>Card<sup>{props.count}</sup></div>
    <div><button id="button1" onClick={props.handel}>HOME</button></div>
    </div>
    </div>
  );
}

export default Header;
