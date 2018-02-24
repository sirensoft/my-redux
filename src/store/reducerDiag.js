
export default (state=[],action)=>{
    switch (action.type) {
        case "DxAdd":
            state.push(action.payload)
            break;
    
        default:
            break;
    }
    return state;
}

 