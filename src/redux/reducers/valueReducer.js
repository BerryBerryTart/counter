import {INCREMENT, DECREMENT, DOUBLE} from "../actionTypes";

const initialState = {
    value: 0
}

export default function(state = initialState, action){
    switch (action.type){
        case INCREMENT: {
            return {
                value: state.value + 1
            };
        }
        case DECREMENT: {
            return {
                value: state.value - 1
            };
        }
        case DOUBLE: {
            return {
                value: state.value * 2
            }
        }
        default:
            return state;
    }
}
