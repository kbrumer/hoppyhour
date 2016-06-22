'use strict';

import CONST from '../constants';
import * as config from '../config';
import { resolveLocation } from '../utils/gmap';

export function search(address, radius, dispatch){
  console.log('hoppyActions::search called', arguments);
  resolveLocation(address).then((data) => {
    const geom =  data.results.map(function(address) {
      return {lon: address.geometry.location.lng, lat: address.geometry.location.lat};
    });
    if (geom.length !== 1){
      throw new Error(`Could not determine latitude/longtitude from address ${address}`);
    }
    const url = `${config.DATABASE_SERVER_API}/${geom[0].lon}/${geom[0].lat}/${radius}`;
    dispatch({ type: CONST.SEARCH_INIT });
    return fetch(url)
      .then(req => req.json())
      .then(json => {
        dispatch({ type: CONST.SEARCH_SUCCESS, json });
      });
  });
}
