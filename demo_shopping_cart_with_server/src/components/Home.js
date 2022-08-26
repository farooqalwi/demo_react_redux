import '../App.css';
import Categories from './Categories';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { updateProducts, updateSelectedCategory } from "../actions"


const Home = (props) => {
  const { updateProducts, updateSelectedCategory } = props;

  const [products, setProducts] = useState([])
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {

    const getData = async () => {
      const dataRequest = await fetch("http://localhost:4000/db")
      const data = await dataRequest.json()
      setProducts(data.products)
      setCategoryItems(data.categoryItems)
    }
    getData()

    

  }, [])

  useEffect(() => {
    if(categoryItems.length > 0){
      const categoryId = categoryItems[0].id
      updateSelectedCategory(categoryId)
    }
  }, [categoryItems])

  return (
    <div>
      <Container>
        <Row>
          <Col className='mt-5 pt-5' md={4}>
            <Categories categoryItems={categoryItems} />
          </Col>

          <Col className='center' md={8}>
            <Products products={products} updateProducts={updateProducts(products)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedCategory: state.productReducer.selectedCategory,
})

const mapDispatchToProps = (dispatch, getState) => {
  return {
    updateProducts: (products) => dispatch(updateProducts(products)),
    updateSelectedCategory: (selectedCategoryId) => dispatch(updateSelectedCategory(selectedCategoryId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
