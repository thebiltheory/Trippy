import { trippyGet } from '../../app/api/api';

const endpoint = '../../app/api/reponse.json';

before(function () {
  this.jsdom = require('jsdom-global')();
});

after(function () {
  this.jsdom();
  describe('API', function () {
    it('Should return a resolved promise', function (done) {
      return trippyGet(endpoint).then(function (a) {
        console.log(a);
      })
    });
  });
});
