const reducer = (initialState = 0, action) => {
    switch (action.type) {
        case "deposit":
            return initialState + action.payload
        case "withdraw":
            return initialState - action.payload
        default:
            return initialState
    }
};

export default reducer;