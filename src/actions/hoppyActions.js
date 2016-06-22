'use strict';

import CONST from '../constants';
import * as config from '../config';

export function search(address, radius){
  console.log('hoppyActions::search called', arguments);

  const url = `${config.DATABASE_SERVER_API}/-122.678204/45.522536/${radius}`;
  console.log('url', url);
  return (dispatch) => {
    dispatch({ type: CONST.SEARCH_INIT });
    return fetch(url)
      .then(req => req.json())
      .then(json => {
        dispatch({ type: CONST.SEARCH_SUCCESS, json });
      });
  };
}
