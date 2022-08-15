import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

console.log(rootReducer)
export const store = configureStore({ reducer: rootReducer, middleware: [thunk]})