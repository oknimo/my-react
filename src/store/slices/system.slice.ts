import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface SystemState {
  loading: boolean,
  title: string,
}
const initialState: SystemState = {
  loading: false,
  title: 'hello'
}

const systemSlice = createSlice({
  name: 'system',
  initialState: initialState,
  reducers: {
    SET_LOADING: (state) => {
      state.loading = !state.loading
    },
    SET_TITLE: (state, action: PayloadAction<Pick<SystemState, 'title'>>) => {
      state.title = action.payload.title
    }
  }
})

export const { SET_LOADING, SET_TITLE } = systemSlice.actions;
export default systemSlice.reducer