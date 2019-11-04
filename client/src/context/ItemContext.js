import createDataContext from './createDataContext';

const itemReducer = (state, action) => {
    switch (action.type) {
        case "select_item":
            return [...state,
            {
                itemId: action.payload.itemId,
            }];
        default:
            return state;
    }
};

const selectItem = (dispatch) => {
    return (itemId) => {
        dispatch({ type: 'select_item', payload: { itemId } });
    };
};


export const { Context, Provider } = createDataContext(
    itemReducer,
    { selectItem },
    []
);