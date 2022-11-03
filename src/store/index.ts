import { combineReducers, configureStore } from '@reduxjs/toolkit'
import systemSlice from './slices/system.slice'

export const rootReducer = combineReducers({
  system: systemSlice,
})

export const store = configureStore({
	devTools: import.meta.env.DEV,
	reducer: rootReducer,
})

export type IStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type GetState = () => RootState