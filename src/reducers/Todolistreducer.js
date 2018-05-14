const initialState = {
    list: [{id: 0, name: 'do something', isDone: false},{id:1, name: 'asdasd', isDone: true}],
}

export default function Todolistreducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':{
            return{
                ...state,
                list: [...state.list,{name: action.payload.newTodo, isDone: false}]
            }
        }
        case 'TOGGLE_TODO':{
            let tempList = state.list;
            tempList[action.payload.id].isDone = !tempList[action.payload.id].isDone;
            return{
                ...state,
                list: tempList,
            }
        }
        default:{
            return state;
        }
    }
}
