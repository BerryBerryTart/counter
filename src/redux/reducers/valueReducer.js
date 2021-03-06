import {INCREMENT, DECREMENT, DOUBLE, HALF, RESET} from "../actionTypes";

const initialState = {
    value: 0
}

export default function valueReducer(state = initialState, action){
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
            };
        }
        case HALF: {
            return {
                value: Math.floor(state.value / 2)
            };
        }
        case RESET: {
            return {
                value: 0
            };
        }
        default:
            return state;
    }
}
