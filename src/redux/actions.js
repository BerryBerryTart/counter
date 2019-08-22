import {INCREMENT, DECREMENT} from "./actionTypes";

export const increment = value => ({
    type: INCREMENT,
    payload: {
        value
    }
});

export const decrement = value => ({
    type: DEREMENT,
    payload: {
        value
    }
})
