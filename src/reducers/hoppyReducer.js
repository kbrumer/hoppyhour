'use strict';

import { List } from 'immutable';
import InitialState from '../state/hoppyState';
import CONST from '../constants';

export default function reduce(state = InitialState, action) {
  // console.log('hoppyReducer::reduce called', state, action);
  switch (action.type) {
    case CONST.FETCH:
      return state;

    case CONST.SEARCH_INIT:
      return state;

    case CONST.SEARCH_FORM:
      return state;

    case CONST.SEARCH_SUCCESS:{
      let newState = state.set('bars', new List(action.json.results));
      return newState;
    }

    default:
      return state;
  }
}
