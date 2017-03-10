'use strict';

const constants = {

  db: {
    host: process.env.DB_HOST ||'s2s.coddera.com',
    username: process.env.DB_USER || 'PROCODE_S2S',
    password: process.env.DB_PASSWORD || 'PROCODE_S2S',
    sid: process.env.SID || 'XE',
    port: process.env.DB_PORT || 15210
  },

  app: {
    name: 'OI S2S Backoffice'
  },

  server: {
    port: 4500
  },

  query: {
    offer: {
      getAll: 'SELECT * FROM "PROCODE_S2S"."OFERTA"',
      get: 'SELECT * FROM "PROCODE_S2S"."OFERTA" WHERE ID = :ID',
      save: 'INSERT INTO "PROCODE_S2S"."OFERTA"(NOME, DESCRICAO, SCRIPT, PRECO, EXIBIR, ID_PROGRAMA, ID_BENEFICIO) ' +
      'VALUES (:NOME, :DESCRICAO, :SCRIPT, :PRECO, :EXIBIR, :ID_PROGRAMA, :ID_BENEFICIO)',
      remove: 'DELETE FROM "PROCODE_S2S"."OFERTA" WHERE ID = :ID',
      update: 'UPDATE "PROCODE_S2S"."OFERTA" SET NOME = :NOME, DESCRICAO = :DESCRICAO, SCRIPT = :SCRIPT, PRECO = :PRECO, ' +
        ' EXIBIR = :EXIBIR, ID_PROGRAMA = :ID_PROGRAMA, ID_BENEFICIO = :ID_BENEFICIO WHERE ID = :ID'
    },
    checkpoint: {
      getAll: 'SELECT * FROM "PROCODE_S2S"."CHKPOINT" ORDER BY ID',
      get: 'SELECT * FROM "PROCODE_S2S"."CHKPOINT" WHERE ID = :ID',
      save: 'INSERT INTO "PROCODE_S2S"."CHKPOINT"(NOME, STATUS, TIME_OUT) VALUES (:NOME, :STATUS, :TIME_OUT)',
      remove: 'DELETE FROM "PROCODE_S2S"."CHKPOINT" WHERE ID = :ID',
      update: 'UPDATE "PROCODE_S2S"."CHKPOINT" SET ID = :ID, NOME = :NOME, STATUS = :STATUS, TIME_OUT = :TIME_OUT WHERE ID = :ID'
    },
    user: {
      getAll: 'SELECT * FROM "PROCODE_S2S"."USUARIO" ORDER BY USUARIO, NOME',
      get: 'SELECT * FROM "PROCODE_S2S"."USUARIO" WHERE ID = :ID',
      save: 'INSERT INTO "PROCODE_S2S"."USUARIO"(USUARIO, SENHA, NOME) VALUES (:USUARIO, :SENHA, :NOME)',
      remove: 'DELETE FROM "PROCODE_S2S"."USUARIO" WHERE ID = :ID',
      login: 'SELECT * FROM "PROCODE_S2S"."USUARIO" WHERE USUARIO = :USUARIO AND SENHA = :SENHA',
      update: 'UPDATE "PROCODE_S2S"."USUARIO" SET USUARIO = :USUARIO, SENHA = :SENHA, NOME = :NOME ' +
      ' WHERE ID = :ID'
    },
    permission: {
      getAll: 'SELECT * FROM "PROCODE_S2S"."PERMISSAO" ORDER BY NOME',
      get: 'SELECT * FROM "PROCODE_S2S"."PERMISSAO" WHERE CODIGO = :CODIGO',
      save: 'INSERT INTO "PROCODE_S2S"."PERMISSAO"(CODIGO, NOME) VALUES (:CODIGO, :NOME)',
      remove: 'DELETE FROM "PROCODE_S2S"."PERMISSAO" WHERE CODIGO = :CODIGO',
      update: 'UPDATE "PROCODE_S2S"."PERMISSAO" SET NOME = :NOME WHERE CODIGO = :CODIGO'
    },
    permissionUser: {
      get: 'SELECT CODIGO_PERMISSAO FROM "PROCODE_S2S"."PERMISSAO_USUARIO" WHERE ID_USUARIO = :ID_USUARIO',
      save: 'INSERT INTO "PROCODE_S2S"."PERMISSAO_USUARIO"(CODIGO_PERMISSAO, ID_USUARIO) VALUES (:CODIGO_PERMISSAO, :ID_USUARIO)',
      remove: 'DELETE FROM "PROCODE_S2S"."PERMISSAO_USUARIO" WHERE CODIGO_PERMISSAO = :CODIGO_PERMISSAO AND ID_USUARIO = :ID_USUARIO'
    },
    clientRefusal: {
      getAll: 'SELECT * FROM "PROCODE_S2S"."RECUSA_CLIENTE"',
      get: 'SELECT * FROM "PROCODE_S2S"."RECUSA_CLIENTE" WHERE ID = :ID',
      save: 'INSERT INTO "PROCODE_S2S"."RECUSA_CLIENTE"(ID, UCID, RECUSA) ' +
      'VALUES (:ID, :UCID, :RECUSA)',
      remove: 'DELETE FROM "PROCODE_S2S"."RECUSA_CLIENTE" WHERE ID = :ID',
      update: 'UPDATE "PROCODE_S2S"."RECUSA_CLIENTE" SET UCID = :UCID, RECUSA = :RECUSA WHERE ID = :ID'
    }
  }

};
module.exports = constants;
