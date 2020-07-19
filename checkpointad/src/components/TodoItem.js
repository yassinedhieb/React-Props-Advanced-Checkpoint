import React, { Component } from 'react';
import Proptypes from 'prop-types';


export class TodoItem extends Component{
    render() {
        return (
            <table style={{
            border:'1px solid black'}}>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>
                        {this.props.todo.name}
                    </td>
                    <td>
                        {this.props.todo.category}
                    </td>
                    <td>
                        {this.props.todo.price}
                    </td>
                </tr>
            </table>
        )
    }
}
TodoItem.propTypes = {
    todos: Proptypes.object.isRequired
}
export default TodoItem;