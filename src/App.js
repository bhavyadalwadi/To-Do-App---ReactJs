import React, {Component} from 'react';
import './App.css';
import {FaTrash} from 'react-icons/lib/fa'
import { CSSTransitionGroup } from 'react-transition-group'

export default class App extends Component {
    constructor(props) {        super(props);
        this.state = {term: '', items: []};
        this.removeTodo = this.removeTodo.bind(this);
    }
    onSubmit = (event) =>{
        event.preventDefault()
        if(this.state.term !== ''){
            console.log(this.state.term);
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
        }else{
            alert("Please Enter Valid Task")
        }
    }
    removeTodo(name, i){
        let items = this.state.items.slice();
        items.splice(i, 1);
        this.setState({
            items:items
        });
    }
    onChg = (event) =>{
        this.setState({term: event.target.value})
    }
    render() {
        return (<div className="container-fluid">
                <div className="bg-dark mb-5">
                    <div className="text-light text-center header">To-Do list</div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 ml-5">
                        <form className="App" onSubmit={this.onSubmit}>
                            <input value={this.state.term} onChange={this.onChg} placeholder="Enter Tasks" className="align-bottom mr-2"/>
                            <button className=" btn btn-secondary btn-md">Submit</button>
                        </form>
                        <List items={this.state.items} removeTodo={this.removeTodo}/>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        );
    }
}
class List extends React.Component{
    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render(){
        const transOptions = {
            transitionName: "fade",
            transitionEnterTimeout:500,
            transitionLeaveTimeout:300
        }
        return(
            <ul className="list-unstyled ulWidth mt-3">

                <CSSTransitionGroup {...transOptions}>

                {
                    this.props.items.map((item, index) =>
                        <li key={index} className="mb-1">
                            {item}
                            <span className="marginIcons">
                                <span className="text-danger align-content-center" onClick={() => { this.removeItem(item, index)}}>
                                    <FaTrash/>
                                </span>
                            </span>
                        </li>)
                }
                </CSSTransitionGroup>
            </ul>
        )
    }
}
