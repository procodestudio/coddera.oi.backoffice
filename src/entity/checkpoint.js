'use strict';

module.exports = {
 name: 'CHCKPOINT',
  columns: {
    ID: {
     primary: true,
     type: 'int',
     generated: true
    },
    NOME: {
      type: 'string',
      length: 30
    },
    STATUS: {
      type: 'string',
      length: 50
    },
    TIME_OUT: {
      type: 'int'
    }
  }
};
