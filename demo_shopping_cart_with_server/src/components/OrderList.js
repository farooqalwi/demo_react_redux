import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { addAndUpdateItemToCart } from "../actions"
import { connect } from 'react-redux'

const OrderList = (props) => {
    const { shoppingItems, handleItemClick } = props

    return (

        <div className="orderList">
            {
                shoppingItems.map((item, i) =>
                    <OrderItem key={i} item={item} handleItemClick={handleItemClick} />
                )
            }
        </div>
    )
}

//export default OrderList;

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
  return {
      handleItemClick: (id) => dispatch(addAndUpdateItemToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)