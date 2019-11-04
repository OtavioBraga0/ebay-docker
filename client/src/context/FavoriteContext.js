import createDataContext from './createDataContext';

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "favorite_form":
            return [...state,
            {
                email: action.payload.email,
                time: action.payload.time,
                search: action.payload.search,
                itemId: action.payload.itemId
            }];
        default:
            return state;
    }
};

const favoriteForm = (dispatch) => {
    return (email, time, search, itemId) => {
        dispatch({ type: 'favorite_form', payload: { email, time, search, itemId } });
    };
};


export const { Context, Provider } = createDataContext(
    favoriteReducer,
    { favoriteForm },
    []
);