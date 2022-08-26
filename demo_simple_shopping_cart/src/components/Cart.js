import React from "react";
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap';
import {deleteItemFromCart, decItemFromCart, addAndUpdateItemToCart, handleRemoveCart} from "../actions" 

const Cart = (props) => {
    const { cart } = props;

    let grandTotal = 0;

    cart.map((item) => (
        grandTotal += item.totalPrice
    ))

    return (
        <div className="cart">
            <h1>Cart</h1>

            {cart && cart.length > 0 &&
                <div className="clearCart">
                    <Button variant="danger" size="sm" onClick={() => props.handleRemoveCart()}>Clear Cart</Button>
                </div>
            }

            {cart && cart.length > 0 && <Table bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td> <Button variant="primary" size="sm" onClick={() => props.decItem(item.id)}> - </Button>  {item.qty} <Button variant="primary" size="sm" onClick={() => props.incItem(item.id)}> + </Button></td>
                                <td>{item.totalPrice}</td>
                                <td><Button variant="danger" size="sm" onClick={() => props.handleDeleteItem(item.id)}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>}

            {cart && cart.length > 0 &&
                <div className="grandTotal">
                    <hr/>
                    <h4>Total Items: {cart.length}</h4>
                    <h4>Grand Total: {grandTotal}</h4>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    cart: state.cartReducer.cart
}}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        handleDeleteItem: (id) => dispatch(deleteItemFromCart(id)),
        decItem: (id) => dispatch(decItemFromCart(id)),
        incItem: (id) => dispatch(addAndUpdateItemToCart(id)),
        handleRemoveCart: () => dispatch(handleRemoveCart())
    }
  }
// export default Cart;
export default connect(mapStateToProps, mapDispatchToProps)(Cart)



