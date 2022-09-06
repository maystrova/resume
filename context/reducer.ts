import { StoreType } from 'context/storeContext'
import { ACTION } from 'context/actions'

export const reducer = (
    currentState: StoreType,
    payload: { action: ACTION; data: any },
): StoreType => {
    switch (payload.action) {
        case ACTION.SET_LANGUAGE:
            return {
                ...currentState,
                currentLang: payload.data,
            }
        default:
            return currentState
    }
}
