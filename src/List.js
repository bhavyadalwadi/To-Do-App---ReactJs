import React from 'react';
import {FaTrash, FaCheckSquare} from 'react-icons/lib/fa'

class List extends React.Component{
    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render(){
        return(
            <ul className="list-unstyled ulWidth mt-3">
                {
                    this.props.items.map((item, index) =>
                        <li key={index} onClick={() => { this.removeItem(todo, i)}}>
                            {item}
                            <span className="marginIcons" >
                                <span className="text-danger">
                                    <FaTrash/>
                                </span>
                                <span className="text-success">
                                    <FaCheckSquare/>
                                </span>
                            </span>
                        </li>)
                }
            </ul>
        )
    }
}
export default List;


/*const List = props => (

    <ul className="list-unstyled ulWidth mt-3">
        {
            props.items.map((item, index) =>
                <li key={index}>
                    {item}
                    <span className="marginIcons">
                        <span className="text-danger">
                            <FaTrash/>
                        </span>
                        <span className="text-success">
                            <FaCheckSquare/>
                        </span>
                    </span>
                </li>)
        }
    </ul>

);*/