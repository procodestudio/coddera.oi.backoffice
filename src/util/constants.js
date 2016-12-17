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
      save: 'INSERT INTO "PROCODE_S2S"."OFERTA"(ID, NOME, DESCRICAO, SCRIPT, PRECO, EXIBIR, ID_PROGRAMA, ID_BENEFICIO) ' +
      'VALUES (:ID, :NOME, :DESCRICAO, :SCRIPT, :PRECO, :EXIBIR, :ID_PROGRAMA, :ID_BENEFICIO)',
      remove: 'DELETE FROM "PROCODE_S2S"."OFERTA" WHERE ID = :ID',
      update: 'UPDATE "PROCODE_S2S"."OFERTA" SET NOME = :NOME, DESCRICAO = :DESCRICAO, SCRIPT = :SCRIPT, PRECO = :PRECO, ' +
        ' EXIBIR = :EXIBIR, ID_PROGRAMA = :ID_PROGRAMA, ID_BENEFICIO = :ID_BENEFICIO WHERE ID = :ID'
    },
    checkpoint: {
      getAll: 'SELECT * FROM "PROCODE_S2S"."CHKPOINT" ORDER BY ID',
      get: 'SELECT * FROM "PROCODE_S2S"."CHKPOINT" WHERE ID = :ID',
      save: 'INSERT INTO "PROCODE_S2S"."CHKPOINT"(ID, NOME, STATUS, TIME_OUT) VALUES (:ID, :NOME, :STATUS, :TIME_OUT)',
      remove: 'DELETE FROM "PROCODE_S2S"."CHKPOINT" WHERE ID = :ID',
      update: 'UPDATE "PROCODE_S2S"."CHKPOINT" SET NOME = :NOME, DESCRICAO = :DESCRICAO, STATUS = :STATUS, ' +
      'TIME_OUT = :TIME_OUT WHERE ID = :ID'
    }
  }

};
module.exports = constants;
