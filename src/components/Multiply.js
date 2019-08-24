import React from 'react';
import { connect } from "react-redux";
import { double, half } from "../redux/actions"

function Multiply ({double, half}) {
    return (
        <div class="row">
        <button class="col-sm" onClick={double}>Double (x2)</button>
        <button class="col-sm" onClick={half}>Half (x0.5)</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        double: () => dispatch(double()),
        half: () => dispatch(half())
    }
};

export default connect(null, mapDispatchToProps)(Multiply);
