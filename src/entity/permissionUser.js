'use strict';

module.exports = {
 name: 'PERMISSAO_USUARIO',
  columns: {
    ID_USUARIO: {
      type: 'int'
    },
    CODIGO_PERMISSAO: {
      type: 'string',
      length: 50
    }
  }
};
