import React from 'react';
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions"

function Controls ({increment, decrement}) {
    return (
        <div class="row">
        <button class="col-sm" onClick={increment}>Increment</button>
        <button class="col-sm" onClick={decrement}>Decrement</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
};

export default connect(null, mapDispatchToProps)(Controls);
