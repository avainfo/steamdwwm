// initialState, si vous en avez besoin
const initialState = {
    data: [],
    loading: false,
    error: null,
};

// Votre reducer
const yourReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload,
            };
        // Autres cas pour gérer d'autres actions si nécessaire

        default:
            return state;
    }
};

export default yourReducer;