import assert from 'Chai';
import Itinerary from '../../app/modules/Itinerary';
import deals from '../../app/api/response.json';
import { groupBy } from '../../app/utils/helpers';


describe('Itinerary', function () {
  it('Should return a path', function () {
      const destinations = groupBy(deals.deals, 'departure');
      const route = new Itinerary(destinations);
      const itinerary = route.findRoute('cheapest', 'Brussels', 'Istanbul');
      return itinerary[0].departure === 'Brussels' && itinerary[itinerary.length - 1].arrival === 'Istanbul';
  });
});
