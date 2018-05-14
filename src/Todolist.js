import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './actions/Todolistactions';


class Todolist extends Component {
    onClickEvent = (key) =>{
        console.log(key)
        this.props.toggleTodo(key);
    }
    renderList = () =>{
        return this.props.todolist.list.map((element)=>{
            let temp='notdone';
            if(element.isDone){temp='done'}
            return <li key={element.id} className={temp} onClick={()=>{this.onClickEvent(element.id)}}>{element.name}</li>
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
const mapDispatchToProps = dispatch =>{
    return{
        toggleTodo: (key)=>{dispatch(toggleTodo(key))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);