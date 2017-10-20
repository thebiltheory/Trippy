import Itinerary from './app/modules/Itinerary';
import { groupBy, append, getValue, listenTo } from './app/utils/helpers';
import { trippyGet } from './app/api/api';
import Card from './app/components/card.ejs';
import Form from './app/components/form.ejs';

const deals = '../response.json';

const trippy = {
  renderList(values) {
    const { mode, departure, arrival } = values;
    this.getItinerary(mode, departure, arrival)
      .then((itinerary) => {
        itinerary.forEach((card, i) => {
          setTimeout(() => {
            this.renderCard(card);
          }, 100 * i);
        });
      });
  },

  loadDestinations() {
    const getCities = trippyGet(deals);
    const allCities = [];
    const cities = [];

    getCities
      .then((dest) => {
        dest.deals.map((city) => {
          allCities.push(city.departure);
          allCities.push(city.arrival);
        });
      })
      .then(() => {
        // Runs after all cities have been pushed
        allCities.forEach((city) => {
          if (!cities.includes(city)) {
            cities.push(city);
          }
        });
      })
      .then(() => {
        this.renderForm({ cities });
      })

    return { cities };
  },

  renderCard(itinerary) {
    const card = Card(itinerary);
    append('board-list', card);
  },

  renderForm(data) {
    const form = Form(data);
    append('trip-form', form);
  },

  formValues() {
    const formVal = {
      departure: getValue('trip-from'),
      arrival: getValue('trip-to'),
      mode: 'cheapest',
    };

    return formVal;
  },

  getItinerary(mode, departure, arrival) {
    const trips = trippyGet(deals);

    return trips.then((cities) => {
      const { currency, deals } = cities;
      const destinations = groupBy(deals, 'departure');
      const route = new Itinerary(destinations);

      return route.findRoute(mode, departure, arrival);
    });
  },

  init() {
    this.loadDestinations();
    listenTo('trip-form', 'submit', (e) => {
      e.preventDefault();
      console.log(this.formValues());

      this.renderList(this.formValues());
    })
  },

};

trippy.init();
