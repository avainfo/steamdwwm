import {createStore} from 'redux';

const initialState = {
    counter: 0,
    text: "Coucou",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            };
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: state.text === "Coucou" ? "Changé" : "Coucou",
            }
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;