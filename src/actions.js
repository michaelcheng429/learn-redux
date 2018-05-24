export const UPDATE_APP = 'updateApp';

export function updateApp(event) {
    return {
        type: UPDATE_APP,
        payload: {
            appValue: event.target.value
        }
    }
}
