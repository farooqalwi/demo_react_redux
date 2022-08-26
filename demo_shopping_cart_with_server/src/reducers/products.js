import { UPDATE_PRODUCTS, UPDATE_CATEGORY, SHOW_PRODUCT } from "../actions/actionTypes"



const initialState = {
    products: [],
    categoryItems: [],
    selectedProductIds: [],
    selectedCategory: null,
}

let selectedProducts;
let selectedProductIds;

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        case UPDATE_CATEGORY:
            selectedProducts = state.products.filter((value, i) => {
                return value.categoryId === action.categoryId
            })

            selectedProductIds = selectedProducts.map(prod => prod.id)

            return {
                ...state,
                selectedCategory: action.categoryId,
                selectedProductIds: [...selectedProductIds]
            }
        case SHOW_PRODUCT:
            selectedProducts = state.products.filter((value, i) => {
                return value.categoryId === action.itemId
            })

            selectedProductIds = selectedProducts.map(prod => prod.id)

            return {
                ...state,
                selectedCategory: action.itemId,
                selectedProductIds: [...selectedProductIds]
            }

        default:
            return state;
    }
}

export default productReducer;