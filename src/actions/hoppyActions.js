'use strict';

import CONST from '../constants';

export function search(address, radius){
  console.log('hoppyActions::search called', arguments);

  const url = `http://localhost:4000/db/-122.678204/45.522536/${action.payload.radius}`;
  return (dispatch) => {
    return fetch(url)
      .then(req => req.json())
      .then(json => {
        console.log('bars', json);
      });
    }


  //
  // return {
  //   type: CONST.SEARCH_FORM,
  //   payload: {
  //     address,
  //     radius
  //   }
  // };
}
