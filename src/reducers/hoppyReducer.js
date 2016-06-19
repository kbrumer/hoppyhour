import objectAssign from 'object-assign';
import CONST from '../constants';

export default function hoppyReducer(state = {}, action) {
  switch (action.type) {
    case CONST.FETCH:
      return objectAssign({}, state);

    default:
      return state;
  }
}
