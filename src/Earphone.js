import React from "react";
import { data } from "./data";
import Add from "./Add";

function Earphone() {
  const { obj } = data;
  
  return (
    <div>
     {obj.map((item) =>{
       return (
         <div key={item.id}>
         <h1>{item.name}</h1>
         <p>{item.dis}</p>
         <div>${item.price}</div>
         <div>
<Add/>
         </div>
         </div>

       )
     })}
     
      
    </div>
  );
}

export default Earphone;
