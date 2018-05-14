const initialState = {
    list: [{name: 'do something', isDone: false},{name: 'asdasd', isDone: true}],
}

export default function Todolistreducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':{
            return{
                ...state,
                list: [...state.list,{name: action.payload.newTodo, isDone: false}]
            }
        }
        default:{
            return state;
        }
    }
}
