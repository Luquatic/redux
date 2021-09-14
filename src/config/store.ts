import {createStore} from '@reduxjs/toolkit';

// reducers
import {combineReducers} from 'redux';
import counterReducer from '../store/counter/reducer';
import authReducer from '../store/auth/reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

const store = createStore(rootReducer);

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
