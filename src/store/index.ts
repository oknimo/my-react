import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  // system: systemReducer,
})

export const store = configureStore({
	devTools: import.meta.env.DEV,
	reducer: rootReducer,
})
