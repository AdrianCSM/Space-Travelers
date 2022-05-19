import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/Rockets';
import missionsReducer from './missions/Missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
