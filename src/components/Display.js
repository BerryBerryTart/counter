import React from 'react';
import { connect } from "react-redux";

function Display ({value}) {
    return (
        <div>
        <p class="text-center">{value}</p>
        </div>
    );
};

function mapStateToProps (state, ownProps){
    const {valueReducer} = state
    return {
        value: valueReducer.value
    };
};

export default connect(mapStateToProps)(Display);
