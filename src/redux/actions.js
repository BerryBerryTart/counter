import {INCREMENT, DECREMENT, DOUBLE} from "./actionTypes";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const double = () => ({
    type: DOUBLE
})