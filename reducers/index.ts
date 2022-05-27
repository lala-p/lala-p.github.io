import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import ModeSlice, { ModeState } from '../reducers/ModeSlice'

export interface RootState {
    mode: ModeState,

}

const rootReducer = (state: RootState, action: AnyAction): CombinedState<RootState> => {
    switch (action.type) {
        case HYDRATE:
            return action.payload
    
        default:
            const combineReducer = combineReducers({
                mode: ModeSlice,
                
            }) 

            return combineReducer(state, action)
    }

} 

export default rootReducer