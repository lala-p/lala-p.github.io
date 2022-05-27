import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import ModeSlice, { ModeState } from '../reducers/ModeSlice'

export interface IState {
    mode: ModeState,

}

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
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