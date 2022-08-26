import React from "react";



const CategoryItem = (props) => {
    const { item, selectedCategory } = props;

    return (
        <div className={(selectedCategory === item.id && "bg-info p-2 rounded").toString()} onClick={() => props.categoryClick(item.id)}>
            <h3>{item.name}</h3>
        </div>
    )
}



export default CategoryItem;

