import Actions from "./actions.config"

export const setFeedback = (feedback: any, title: any) => {
    return {
        type: Actions.SET_FEEDBACK,
        payload: { feedback, title }
    }
}

