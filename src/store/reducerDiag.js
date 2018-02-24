
export default (state=[],action)=>{
    switch (action.type) {
        case "Add":
            state.push(action.payload)
            break;
    
        default:
            break;
    }
    return state;
}

 