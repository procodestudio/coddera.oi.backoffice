CREATE TABLE PERMISSAO
(
  CODIGO CHARACTER VARYING(50) NOT NULL
, NOME CHARACTER VARYING(40) NOT NULL
, CONSTRAINT PERMISSAO_PK PRIMARY KEY
  (
    CODIGO
  )
  ENABLE
);

-- Admin
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('d1d622cc-76ba-49fe-a94b-5de7de9966a8', 'Administrador');

-- Ofertas
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('577d7c2a-bb7a-46a7-955d-ca0b93d004a0', 'Visualizar Ofertas');
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('11d4dac1-b07b-420d-b13e-6e11e613856b', 'Alterar Ofertas');
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('a79cc299-3194-4dc0-b33e-dd67bdf739ca', 'Cadastrar Ofertas');
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('55eec7b2-2061-4655-a17b-f76e9ec32ccb', 'Excluir Ofertas');

-- Checkpoints
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('ffc7885a-e746-4b6f-a9d8-3434b6b62109', 'Visualizar Checkpoints');
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('16a483c4-41d0-478d-9145-aedcc9c70dd0', 'Alterar Checkpoints');
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('c7df36df-ff49-40ff-952d-5056add273d9', 'Cadastrar Checkpoints');
INSERT INTO PERMISSAO(CODIGO, NOME) VALUES('9cee1d86-e3b6-47be-a652-aea23ee496ae', 'Excluir Checkpoints');
