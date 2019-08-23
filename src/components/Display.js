import React from 'react';
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions"

function Display ({value, increment, decrement}) {
    return (
        <div>
        <p>{value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.valueReducer.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
