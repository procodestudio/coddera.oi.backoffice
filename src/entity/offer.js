'use strict';

module.exports = {
 name: 'OFERTA',
  columns: {
    ID: {
     primary: true,
     type: 'int',
     generated: true
    },
    NOME: {
      type: 'string',
      length: 20
    },
    DESCRICAO: {
      type: 'string',
      length: 20
    },
    SCRIPT: {
      type: 'string',
      length: 200
    },
    PRECO: {
      type: 'double'
    },
    EXIBIR: {
      type: 'double'
    },
    ID_PROGRAMA: {
      type: 'string',
      length: 2
    },
    ID_BENEFICIO: {
      type: 'string',
      length: 2
    }

  }
};
