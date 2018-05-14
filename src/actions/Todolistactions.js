export function addTodo(name){
    return dispatch => {
        dispatch({type: 'ADD_TODO', payload:{
            newTodo: name
        }})
    }
} 