import { SAVE_USER } from "../actions/useraction";

export default (state = [], action) => {
    switch (action.type) {
        case SAVE_USER:
            return action.payload.data;
        default:
            return state;
    }
}
