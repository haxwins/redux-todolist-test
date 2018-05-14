export function addTodo(name){
    return dispatch => {
        dispatch({type: 'ADD_TODO', payload:{
            newTodo: name
        }})
    }
} 

export function toggleTodo(key){
    return dispatch => {
        dispatch({type: 'TOGGLE_TODO', payload:{
            id: key
        }})
    }
}