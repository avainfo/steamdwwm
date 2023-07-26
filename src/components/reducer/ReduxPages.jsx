import React from 'react';
import {connect} from 'react-redux';

const App = ({counter, text, increment, decrement, changeText}) => {
    return (
        <div>
            <h1>{text} {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={changeText}>Change Text</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        text: state.text,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        changeText: () => dispatch({type: 'CHANGE_TEXT'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);