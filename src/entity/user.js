'use strict';

module.exports = {
 name: 'USUARIO',
  columns: {
    ID: {
     primary: true,
     type: 'int'
    },
    USUARIO: {
      type: 'string',
      length: 20
    },
    SENHA: {
      type: 'string',
      length: 200
    },
    NOME: {
      type: 'string',
      length: 20
    }
  }
};
