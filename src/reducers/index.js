// Set up your root reducer here...
import { combineReducers } from 'redux';

import hoppyReducer from './hoppyReducer';

const rootReducer = combineReducers({
  hoppyReducer
});

export default rootReducer;
