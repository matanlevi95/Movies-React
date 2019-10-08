import Actions from "./actions.config";

const initialState = {
    feedbackArray: [],
}

export function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.SET_FEEDBACK: {
            const { feedbackArray } = state
            const { title, feedback } = action.payload
            console.log(feedbackArray);
            
            return {
                ...state,
                feedbackArray: [...feedbackArray, { title, feedback }]
            }
        }
        default: {
            return state;
        }
    }
}
