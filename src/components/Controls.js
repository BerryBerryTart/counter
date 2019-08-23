import React from 'react';
import { connect } from "react-redux";

function Controls() {
    return (
        <div>
        <button>Increment</button>
        <button>Decrement</button>
        </div>
    );
}

export default connect(null)(Controls);