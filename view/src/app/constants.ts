export class Constants {

  public static API_URL = 'http://localhost:4500/api';

  public static URL_PERMISSION = {
    'offer': "577d7c2a-bb7a-46a7-955d-ca0b93d004a0",
    'offer/:id': "11d4dac1-b07b-420d-b13e-6e11e613856b",
    'offer/new': "a79cc299-3194-4dc0-b33e-dd67bdf739ca",
    'checkpoint': "ffc7885a-e746-4b6f-a9d8-3434b6b62109",
    'checkpoint/:id': "16a483c4-41d0-478d-9145-aedcc9c70dd0",
    'checkpoint/new': "c7df36df-ff49-40ff-952d-5056add273d9",
    'user': "e30207b7-66e2-48c3-8caf-516fd42226aa",
    'user/:id': "438ed88d-376c-454d-9f94-93fe544c33a9",
    'permission-user/:userId': "438ed88d-376c-454d-9f94-93fe544c33a9",
    'user/new': "f10b00db-a26b-47ca-80bc-e9767c6570c7",
  };

  public static DELETE_PERMISSION = {
    'offer': "55eec7b2-2061-4655-a17b-f76e9ec32ccb",
    'checkpoint': "9cee1d86-e3b6-47be-a652-aea23ee496ae",
    'user': "9884c7b9-b9b6-4746-a02b-a9bd2261b43e"
  };
}
