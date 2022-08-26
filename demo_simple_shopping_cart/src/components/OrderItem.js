import React from "react";



const OrderItem = (props) => {
const {id, name, price} = props.item;
    return(
        <div className="orderItem" onClick={() => props.handleItemClick(id)}>
            <h3>{name}</h3>
            <h5>{price}</h5>
        </div>
    )
}



export default OrderItem;

