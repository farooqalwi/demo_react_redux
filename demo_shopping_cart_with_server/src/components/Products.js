import React from "react";
import { connect } from 'react-redux'
import { addAndUpdateItemToCart, deleteItemFromCart } from "../actions"

const Products = (props) => {
    const { selectedProductIds, products, cart } = props;
    const cartIds = cart.map(prod => prod.id)
    
    return (
        selectedProductIds && selectedProductIds.length > 0 && <div className="products">
            <h1 className="display-4 text-center">Products</h1>
            <div className="row">
                {products.map((product, i) => {
                    if (selectedProductIds.includes(product.id)) {
                        return (
                            
                            <div className="col-4" key={i} product={product}>
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <p>{product.name}</p>
                                        <p>Rs. {product.price}</p>
                                        <button className="btn btn-success m-2" onClick={() => props.handleItemClick(product)}>Add</button>
                                        {cartIds.includes(product.id) && <button className="btn btn-danger m-2" onClick={() => props.handleDeleteItem(product.id)}>Remove</button>}
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div >

    )
}

const mapStateToProps = (state) => {
    return {
        selectedProductIds: state.productReducer.selectedProductIds,
        cart: state.cartReducer.cart

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleItemClick: (product) => dispatch(addAndUpdateItemToCart(product)),
        handleDeleteItem: (id) => dispatch(deleteItemFromCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)



