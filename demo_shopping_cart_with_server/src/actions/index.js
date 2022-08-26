import { UPDATE_PRODUCTS,UPDATE_CATEGORY, ADD_TO_CART, UPDATE_TO_CART, SHOW_PRODUCT, DEC_FROM_CART, DELETE_FROM_CART, REMOVE_CART} from "./actionTypes"

const dispatchAddItem = (product) => ({
    type: ADD_TO_CART, product
})

const dispatchUpdateItem = (index, isItemFound) => ({
    type: UPDATE_TO_CART, index, isItemFound
})


const dispatchDecItem = (itemId, index, isItemFound) => ({
    type: DEC_FROM_CART, itemId, index, isItemFound
})


const dispatchUpdateProducts = (products) => ({
    type: UPDATE_PRODUCTS, products
})

const dispatchCategoryClick = (itemId) => ({
    type: SHOW_PRODUCT, itemId
})

const dispatchDeleteItem = (cart) => ({
    type: DELETE_FROM_CART, cart
})

const updateProducts = (products) => (dispatch) => {
    
    dispatch(dispatchUpdateProducts(products))
}

const updateSelectedCategory = (categoryId) => {
    return {
        type: UPDATE_CATEGORY, categoryId
    }
    
    // dispatch(dispatchUpdateSelectedCategory(categoryId))
}

const addAndUpdateItemToCart = (product) => (dispatch, getState) => {
    const { cartReducer } = getState();
    let index = -1;
    const isItemFound = cartReducer.cart.find((value, i) => {
        if (value.id === product.id) {
            index = i
            return true
        }
        return false
    })

    if (isItemFound) {
        dispatch(dispatchUpdateItem(index, isItemFound))
    } else {
        dispatch(dispatchAddItem(product))
    }
}

const categoryClick = (itemId) => (dispatch) => {
    
    dispatch(dispatchCategoryClick(itemId))
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

const deleteItemFromCart = (itemId) => (dispatch, getState) => {
    const { cartReducer } = getState();

    const newCart = cartReducer.cart.filter((value) => {
        return value.id !== itemId
    });

    dispatch(dispatchDeleteItem(newCart))
}

const handleRemoveCart = () => (dispatch, getState) => {
    
    dispatch({type: REMOVE_CART})
}

export {
    updateProducts, updateSelectedCategory, addAndUpdateItemToCart, categoryClick, decItemFromCart, deleteItemFromCart, handleRemoveCart
}


// old code
// import { ADD_TO_CART, UPDATE_TO_CART, DELETE_FROM_CART, DEC_FROM_CART, REMOVE_CART, SHOW_PRODUCT } from "./actionTypes"

// const dispatchAddItem = (itemId) => ({
//     type: ADD_TO_CART, itemId
// })

// const dispatchUpdateItem = (itemId, index, isItemFound) => ({
//     type: UPDATE_TO_CART, itemId, index, isItemFound
// })

// const dispatchDeleteItem = (cart) => ({
//     type: DELETE_FROM_CART, cart
// })

// const dispatchDecItem = (itemId, index, isItemFound) => ({
//     type: DEC_FROM_CART, itemId, index, isItemFound
// })

// const dispatchCategoryClick = (itemId) => ({
//     type: SHOW_PRODUCT, itemId
// })

// const addAndUpdateItemToCart = (itemId) => (dispatch, getState) => {
//     const { cartReducer } = getState();
//     let index = -1;
//     const isItemFound = cartReducer.cart.find((value, i) => {
//         if (value.id === itemId) {
//             index = i
//             return true
//         }
//         return false
//     })

//     if (isItemFound) {
//         dispatch(dispatchUpdateItem(itemId, index, isItemFound))
//     } else {
//         dispatch(dispatchAddItem(itemId))
//     }
// }

// const deleteItemFromCart = (itemId) => (dispatch, getState) => {
//     const { cartReducer } = getState();

//     const newCart = cartReducer.cart.filter((value) => {
//         return value.id !== itemId
//     });

//     dispatch(dispatchDeleteItem(newCart))
// }

// const decItemFromCart = (itemId) => (dispatch, getState) => {
//     const { cartReducer } = getState();
//     let index = -1;
//     const isItemFound = cartReducer.cart.find((value, i) => {
//       if (value.id === itemId) {
//         index = i
//         return true
//       }
//       return false
//     })

//     dispatch(dispatchDecItem(itemId, index, isItemFound))
// }


// const handleRemoveCart = () => (dispatch, getState) => {
    
//     dispatch({type: REMOVE_CART})
// }

// const categoryClick = (itemId) => (dispatch) => {
    
//     dispatch(dispatchCategoryClick(itemId))
// }

// export {
//     addAndUpdateItemToCart, deleteItemFromCart, decItemFromCart, handleRemoveCart, categoryClick
// }