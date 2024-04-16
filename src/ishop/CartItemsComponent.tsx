import { useState, useContext, useEffect } from "react"


export default function CartItemsComponent()
{
    
    const [count, setCount] = useState<number>(0);

    return(
        <div> 
            <button className="btn btn-warning">
                <span className="bi bi-cart3"></span> 
                 [{count}] Your Cart Items
                
            </button>
        </div>
    )
}