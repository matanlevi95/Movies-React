import Actions from "./actions.config"

export const setFeedback = (feedback: any) => {
    return {
        type: Actions.SET_FEEDBACK,
        payload: { feedback }
    }
}