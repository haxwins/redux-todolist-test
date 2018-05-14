import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/Todolistactions';

class AddBar extends Component {
    state = {
        addValue: '',
    }
    onChangeEvent = e =>{
        this.setState({addValue: e.target.value});
    }
    addEvent = () =>{
        this.props.addTodo(this.state.addValue);
        this.setState({addValue: ''})
    }
    render(){
        return(
            <div>
                <input onChange={this.onChangeEvent} value={this.state.addValue}/>
                <button onClick={this.addEvent}>add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (name)=>dispatch(addTodo(name))
    }
  }

export default connect(null,mapDispatchToProps)(AddBar);