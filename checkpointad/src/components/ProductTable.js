import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { render } from 'react-dom';
import Proptypes from 'prop-types';

class ProductTable extends Component{
    render (){
        return (
            this.props.Products.map((todo)=>(
            <TodoItem todo={todo}/>
            )))
        
    }
}
ProductTable.propTypes = {
    todos: Proptypes.array.isRequired
}

export default ProductTable;