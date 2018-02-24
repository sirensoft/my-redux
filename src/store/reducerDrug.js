export default (state=[],action)=>{
    switch (action.type) {
        case "RxAdd":
            state.push(action.payload)
            break;
    
        default:
            break;
    }

    return state;

}