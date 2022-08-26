import { ADD_TO_CART, UPDATE_TO_CART, DELETE_FROM_CART, DEC_FROM_CART, REMOVE_CART } from "./actionTypes"

const dispatchAddItem = (itemId) => ({
    type: ADD_TO_CART, itemId
})

const dispatchUpdateItem = (itemId, index, isItemFound) => ({
    type: UPDATE_TO_CART, itemId, index, isItemFound
})

const dispatchDeleteItem = (cart) => ({
    type: DELETE_FROM_CART, cart
})

const dispatchDecItem = (itemId, index, isItemFound) => ({
    type: DEC_FROM_CART, itemId, index, isItemFound
})


const addAndUpdateItemToCart = (itemId) => (dispatch, getState) => {
    const { cartReducer } = getState();
    let index = -1;
    const isItemFound = cartReducer.cart.find((value, i) => {
        if (value.id === itemId) {
            index = i
            return true
        }
        return false
    })

    if (isItemFound) {
        dispatch(dispatchUpdateItem(itemId, index, isItemFound))
    } else {
        dispatch(dispatchAddItem(itemId))
    }
}

const deleteItemFromCart = (itemId) => (dispatch, getState) => {
    const { cartReducer } = getState();

    const newCart = cartReducer.cart.filter((value) => {
        return value.id !== itemId
    });

    dispatch(dispatchDeleteItem(newCart))
}

const decItemFromCart = (itemId) => (dispatch, getState) => {
    const { cartReducer } = getState();
    let index = -1;
    const isItemFound = cartReducer.cart.find((value, i) => {
      if (value.id === itemId) {
        index = i
        return true
      }
      return false
    })

    dispatch(dispatchDecItem(itemId, index, isItemFound))
}


const handleRemoveCart = () => (dispatch, getState) => {
    
    dispatch({type: REMOVE_CART})
}

export {
    addAndUpdateItemToCart, deleteItemFromCart, decItemFromCart, handleRemoveCart
}