import React from 'react';
import { connect } from "react-redux";
import { double } from "../redux/actions"

function Multiply ({double}) {
    return (
        <div>
        <button onClick={double}>Double (x2)</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        double: () => dispatch(double()),
        dispatch
    }
};

export default connect(null, mapDispatchToProps)(Multiply);
