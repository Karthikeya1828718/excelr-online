import { decrement, increment } from "../actions/CounterAction";

const initialState = {
  count: 0,
};

// it is a pure function which takes the previous state
//  and an action as arguments and returns the next state
const CounterReducer = (state = initialState, action) => {
    if(action.type===increment().type){ 
     return {count : state.count + 1}
    }
    else if(action.type ===decrement().type){
        return {count : state.count - 1}
    }

    return state;
}

export default CounterReducer;