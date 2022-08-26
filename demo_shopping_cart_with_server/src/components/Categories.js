import React from "react";
import { connect } from 'react-redux'
import CategoryItem from "./CategoryItem";
import { categoryClick } from "../actions"

const Categories = (props) => {
    const { categoryItems, categoryClick, selectedCategory } = props

    return (

        <div className="categories">
            {
                categoryItems.map((item, i) =>
                    <CategoryItem key={i} item={item} selectedCategory={selectedCategory} categoryClick={categoryClick} />
                )
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    selectedCategory: state.productReducer.selectedCategory,
})

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryClick: (id) => dispatch(categoryClick(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)