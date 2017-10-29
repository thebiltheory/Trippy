import { assert } from 'chai';
import { trippyGet } from '../../app/api/api';

const endpoint = '../../app/api/reponse.json';

describe('API', function () {
  it('Should resolve a promise', function (done) {
    const api = trippyGet(endpoint);
      api.then((response) => {
        console.log(reponse);

        try {
          done()
        } catch (e) {
          done(e)
        }

      });
  });
});
