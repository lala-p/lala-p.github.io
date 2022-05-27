import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModeState {
    currentMode: string;
}

const initialState: ModeState = {
    currentMode: 'home',

}

export const ModeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setCurrentMode: (state, actions: PayloadAction<string>) => {
            state.currentMode = actions.payload
        }
        
    }
})

export const ModeActions = ModeSlice.actions

export default ModeSlice.reducer