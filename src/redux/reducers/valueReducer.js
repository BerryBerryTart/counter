import {INCREMENT, DECREMENT} from "../actionTypes";

const initialState = {
    value: 0;
}

export default function(state = initialState, action){
    switch (action.type){
        case INCREMENT: {
            const {value} = action.payload;
            return
                value + 1
        }
        case DECREMENT: {
            const {value} = action.payload;
            return
                value - 1
        }
        default:
            return state;
    }
}
