import React from 'react';
import { connect } from "react-redux";
import { reset } from "../redux/actions"

function Reset ({ reset }) {
    return (
        <div>
        <button onClick={reset}>Reset</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset())
    }
};

export default connect(null, mapDispatchToProps)(Reset);
