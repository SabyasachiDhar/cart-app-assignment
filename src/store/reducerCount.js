const innitialState = {
    count: 0,
    quantity: 0,
    addToCardHistory:[]
}

const reducerCount = (state = innitialState, action) =>{
    const newState = {...state};

    switch(action.type){
        case "COUNT_ADD":
        return{
            ...state,
            count: newState.count + 1
        }
        break;

        case "COUNT_SUB":
        return{
            ...state,
            count: newState.count - 1
        }
        break;
        case "ADD_TO_CART":
        console.log(newState.addToCardHistory.concat(action.historyAddToCart))
        return{
            ...state,
            quantity: newState.quantity + 1,
            addToCardHistory: newState.addToCardHistory.concat(action.historyAddToCart)
        }
        break;
        
    }

    return newState;
} 

export default reducerCount;