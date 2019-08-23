import { RESET } from "../actionTypes";

const initialState = {
    value: 0
}

export default function resetReducer(state = initialState, action){
    switch (action.type){
        case RESET: {
            return {
                value: 0
            };
        }
        default:
            return state;
    }
}
