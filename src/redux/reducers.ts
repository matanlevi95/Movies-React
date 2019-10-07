import Actions from "./actions.config";

const initialState = {
    feedback: ""
}

export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SET_FEEDBACK: {

            // return equals to global set state - setting the store
            return {
                ...state,
                feedback: + action.payload.feedback
            }

        }
        case Actions.ANOTHER_KEY: {
            // some logic
            return {
                ...state,
                countries: ["ISR", "AFG"]
            }

        }
        default: {
            return state;
        }
    }
}