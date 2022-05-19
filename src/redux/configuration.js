import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Mission from './mission/mission';

const rootReducer = combineReducers({
  missions: Mission,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
