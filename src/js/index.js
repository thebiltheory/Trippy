import Itinerary from './app/modules/Itinerary';
import { groupBy } from './app/utils/helpers';
import { trippyGet } from './app/api/api';

const deals = '../response.json';
const trippy = {
  init() {
    // Init destinations
    // Init UI
    // Init App

    this.getItinerary('cheapest', 'Stockholm', 'Madrid');
  },

  getItinerary(mode, departure, arrival) {
    const trips = trippyGet(deals);
    trips.then((cities) => {
      const { currency, deals } = cities;
      const destinations = groupBy(deals, 'departure');
      const route = new Itinerary(destinations);

      return route.findRoute(mode, departure, arrival);
    });
  },

  cheapestItinerary() {},
  fastestItinerary() {},

};

trippy.init();
