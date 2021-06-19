import { ADD_RATE } from '../actions/appActions';

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_RATE:
            return [...state, action.payload];
        default:
            console.warn(`Nie mamy akcji typu: ${action.type}`);
            return state;
    }
}