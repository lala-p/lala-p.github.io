import { AnyAction, configureStore, Reducer, Store } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer, { RootState } from '../reducers'

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer as Reducer<RootState, AnyAction>,
    })

    return store
}

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const wrapper = createWrapper<Store<RootState>>(createStore)
export default wrapper