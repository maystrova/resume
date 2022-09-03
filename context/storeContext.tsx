import React, { createContext, Dispatch, ReactChild, useReducer } from 'react'
import { ACTION } from 'context/actions'
import { LANGUAGE } from 'service/language'
import { reducer } from 'context/reducer'

export interface StoreType {
    currentLang: LANGUAGE
}

const INITIAL_STORE: StoreType = {
    currentLang: LANGUAGE.RU,
}

export const ResumeContext = createContext<{
    store: StoreType
    dispatch: Dispatch<{ action: ACTION; data: any }>
}>({
    store: INITIAL_STORE,
    dispatch: () => null,
})

interface ResumeProviderProps {
    children: React.ReactElement
}

export const ResumeProvider = ({ children }: ResumeProviderProps) => {
    const [store, dispatch] = useReducer(reducer, INITIAL_STORE)

    return <ResumeContext.Provider value={{ store, dispatch }}>{children}</ResumeContext.Provider>
}
