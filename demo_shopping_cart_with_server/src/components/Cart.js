import React from "react";
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap';
import { deleteItemFromCart, decItemFromCart, addAndUpdateItemToCart, handleRemoveCart } from "../actions"

const Cart = (props) => {
    const { cart } = props;

    let grandTotal = 0;

    cart.map((item) => (
        grandTotal += parseInt(item.totalPrice)
    ))

    return (
        <div className="cart">
            <h1 className="text-center display-4">Cart</h1>
            
            {cart && cart.length > 0 &&
                <div className="m-2 d-flex flex-column align-items-end">
                    <Button variant="danger" size="sm" onClick={() => props.handleRemoveCart()}>Clear Cart</Button>
                </div>
            }

            {cart && cart.length > 0 && <div className="m-4">
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, i) => (
                                <tr key={i} item={item}>
                                    <td>{item.name}</td>
                                    <td> <Button variant="primary" size="sm" onClick={() => props.decItem(item.id)}> - </Button>  {item.qty} <Button variant="primary" size="sm" onClick={() => props.incItem(item)}> + </Button></td>
                                    <td>{item.price}</td>
                                    <td>{item.totalPrice}</td>
                                    <td className="text-center"><Button variant="danger" size="sm" onClick={() => props.handleDeleteItem(item.id)}>Delete</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>}

            {cart && cart.length > 0 &&
                <div>
                    <hr />
                    <div className="m-4">

                        <h4>Total Items: {cart.length}</h4>
                        <h4>Grand Total: {grandTotal}</h4>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        incItem: (product) => dispatch(addAndUpdateItemToCart(product)),
        decItem: (id) => dispatch(decItemFromCart(id)),
        handleDeleteItem: (id) => dispatch(deleteItemFromCart(id)),
        handleRemoveCart: () => dispatch(handleRemoveCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)



// >>>>>>>>>> old code <<<<<<<<<<<<
// import React from "react";
// import { connect } from 'react-redux'
// import { Table, Button } from 'react-bootstrap';
// import {deleteItemFromCart, decItemFromCart, addAndUpdateItemToCart, handleRemoveCart} from "../actions"

// const Cart = (props) => {
//     const { cart } = props;

//     let grandTotal = 0;

//     cart.map((item) => (
//         grandTotal += item.totalPrice
//     ))

//     return (
//         <div className="cart">
//             <h1>Cart</h1>

//             {cart && cart.length > 0 &&
//                 <div className="clearCart">
//                     <Button variant="danger" size="sm" onClick={() => props.handleRemoveCart()}>Clear Cart</Button>
//                 </div>
//             }

//             {cart && cart.length > 0 && <Table bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Quantity</th>
//                         <th>Total Price</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         cart.map((item) => (
//                             <tr>
//                                 <td>{item.name}</td>
//                                 <td> <Button variant="primary" size="sm" onClick={() => props.decItem(item.id)}> - </Button>  {item.qty} <Button variant="primary" size="sm" onClick={() => props.incItem(item.id)}> + </Button></td>
//                                 <td>{item.totalPrice}</td>
//                                 <td><Button variant="danger" size="sm" onClick={() => props.handleDeleteItem(item.id)}>Delete</Button></td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </Table>}

//             {cart && cart.length > 0 &&
//                 <div className="grandTotal">
//                     <hr/>
//                     <h4>Total Items: {cart.length}</h4>
//                     <h4>Grand Total: {grandTotal}</h4>
//                 </div>
//             }
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//     cart: state.cartReducer.cart
// }}

// const mapDispatchToProps = (dispatch, getState) => {
//     return {
//         handleDeleteItem: (id) => dispatch(deleteItemFromCart(id)),
//         decItem: (id) => dispatch(decItemFromCart(id)),
//         incItem: (id) => dispatch(addAndUpdateItemToCart(id)),
//         handleRemoveCart: () => dispatch(handleRemoveCart())
//     }
//   }
// // export default Cart;
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)



