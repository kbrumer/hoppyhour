'use strict';

import { Record, Map, List } from 'immutable';

const InitialState = Record({
  bars: new List(),
  config: new Map(),
  store: null
});

export default new InitialState({});
