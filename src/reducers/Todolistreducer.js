let id = 1;
const initialState = {
    list: [{id: 0, name: 'add something to tasks', isDone: false},{id:1, name: 'eat something', isDone: true}],
}

export default function Todolistreducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':{
            id++;
            return{
                ...state,
                list: [...state.list,{id: id, name: action.payload.newTodo, isDone: false}]
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
