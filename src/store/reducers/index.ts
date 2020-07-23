import { combineReducers } from 'redux';
import { postReducer } from './postReducer';

let rootReducer = combineReducers({
    posts: postReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer;
