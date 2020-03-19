import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer';
import games from './game_reducer'

const RootReducer = combineReducers({
    errors,
    session,
    games
});

export default RootReducer;