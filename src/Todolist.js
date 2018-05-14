import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todolist extends Component {
    onClickEvent = (e) =>{
        console.log(e.target)
    }
    renderList = () =>{
        return this.props.todolist.list.map((element,index)=>{
            return <li key={index} onClick={this.onClickEvent}>{element.name}</li>
        })
    }
    render(){
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = state =>{
    return{
        todolist: state.todolist
    }
}

export default connect(mapStateToProps)(Todolist);