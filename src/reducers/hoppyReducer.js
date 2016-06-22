'use strict';

// import objectAssign from 'object-assign';

import InitialState from '../state/hoppyState';
import CONST from '../constants';


export default function reduce(state = InitialState, action) {
  console.log('hoppyReducer::reduce called', JSON.stringify(state), action);
  switch (action.type) {
    case CONST.FETCH:
      return state;

    case CONST.SEARCH_FORM:
      return state;
      
    case CONST.SEARCH_SUCCESS:
      return state;

    default:
      return state;
  }
}
