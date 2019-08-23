import {INCREMENT, DECREMENT, DOUBLE, HALF, RESET} from "./actionTypes";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const double = () => ({
    type: DOUBLE
})

export const half = () => ({
    type: HALF
})

export const reset = () => ({
    type: RESET
})
