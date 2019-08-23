import { createStore, compose } from 'redux';
import rootReducer from "./reducers/index";

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(rootReducer, enhancers);

