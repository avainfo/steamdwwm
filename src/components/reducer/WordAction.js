export const add = (word) => {
    return {
        type: 'ADD',
        payload: word,
    };
};

export const remove = (word) => {
    return {
        type: 'REMOVE',
        payload: word,
    };
};