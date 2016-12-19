'use strict';

module.exports = {
 name: 'RECUSA_CLIENTE',
  columns: {
    ID: {
      type: 'int'
    },
    UCID: {
      type: 'string',
      length: 16
    },
    RECUSA: {
      type: 'string',
      length: 200
    },
    DATA_REGISTRO: {
      type: 'timestamp'
    }
  }
};
