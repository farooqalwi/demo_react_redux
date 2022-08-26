import { ADD_TO_CART, UPDATE_TO_CART, DELETE_FROM_CART, DEC_FROM_CART, REMOVE_CART } from "../actions/actionTypes"


const initialState = {
    cart: []
}


const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                ...action.product,
                qty: 1,
                totalPrice: action.product.price,
            }

            const newCartItems = state.cart;
            newCartItems.push(newItem)

            return {
                ...state,
                cart: [...newCartItems]
            }
        case UPDATE_TO_CART:
            const newQty = action.isItemFound.qty + 1;
            const item = {
                ...action.isItemFound,
                qty: newQty,
                totalPrice: action.isItemFound.price * newQty
            }

            let cartItems = state.cart;
            cartItems[action.index] = item;

            return {
                ...state,
                cart: [...cartItems]
            }
        case DEC_FROM_CART:
            const updatedQty = action.isItemFound.qty - 1;
            const updatedItem = {
                ...action.isItemFound,
                qty: updatedQty,
                totalPrice: action.isItemFound.price * updatedQty
            }

            if (updatedQty < 1) {
                const newCart = state.cart.filter((value) => {
                    return value.id !== action.itemId
                });

                return {
                    ...state,
                    cart: [...newCart]
                }
            }
            else {
                let cartItems = state.cart;
                cartItems[action.index] = updatedItem;

                return {
                    ...state,
                    cart: [...cartItems]
                }
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: [...action.cart]
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }

}

export default cartReducer;


// old code
// import { ADD_TO_CART, UPDATE_TO_CART, DELETE_FROM_CART, DEC_FROM_CART, REMOVE_CART } from "../actions/actionTypes"


// const initialState = {
//     cart: [],
//     shopableItem: [
//         { id: 1, name: "Cup", price: 100 },
//         { id: 2, name: "Bottle", price: 80 },
//         { id: 3, name: "Jug", price: 120 },
//         { id: 4, name: "Chair", price: 1000 },
//         { id: 5, name: "Table", price: 2000 },
//         { id: 6, name: "Mug", price: 50 },
//         { id: 7, name: "Cupboard", price: 7000 },
//         { id: 8, name: "Drawer", price: 1500 },
//     ]
// }


// const cartReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case ADD_TO_CART:
//             const itemFound = state.shopableItem.find((value, i) => {
//                 return value.id === action.itemId
//             })
//             const newItem = {
//                 ...itemFound,
//                 qty: 1,
//                 totalPrice: itemFound.price,
//             }

//             const newCartItems = state.cart;
//             newCartItems.push(newItem)

//             return {
//                 ...state,
//                 cart: [...newCartItems]
//             }
//         case UPDATE_TO_CART:
//             const newQty = action.isItemFound.qty + 1;
//             const item = {
//                 ...action.isItemFound,
//                 qty: newQty,
//                 totalPrice: action.isItemFound.price * newQty
//             }

//             let cartItems = state.cart;
//             cartItems[action.index] = item;

//             return {
//                 ...state,
//                 cart: [...cartItems]
//             }
//         case DELETE_FROM_CART:
//             return {
//                 ...state,
//                 cart: [...action.cart]
//             }
//         case DEC_FROM_CART:
//             const updatedQty = action.isItemFound.qty - 1;
//             const updatedItem = {
//                 ...action.isItemFound,
//                 qty: updatedQty,
//                 totalPrice: action.isItemFound.price * updatedQty
//             }

//             if (updatedQty < 1) {
//                 const newCart = state.cart.filter((value) => {
//                     return value.id !== action.itemId
//                 });

//                 return {
//                     ...state,
//                     cart: [...newCart]
//                 }
//             }
//             else {
//                 let cartItems = state.cart;
//                 cartItems[action.index] = updatedItem;

//                 return {
//                     ...state,
//                     cart: [...cartItems]
//                 }
//             }
//         case REMOVE_CART:
//             return {
//                 ...state,
//                 cart: []
//             }

//         default:
//             return state;
//     }

// }

// export default cartReducer;