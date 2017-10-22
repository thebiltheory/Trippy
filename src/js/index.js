import Itinerary from './app/modules/Itinerary';
import { groupBy, append, getValue, listenTo, resetHtml, docReady, getRadioValue, totalSum } from './app/utils/helpers';
import { trippyGet } from './app/api/api';
import Card from './app/components/card.ejs';
import Form from './app/components/form.ejs';
import Oops from './app/components/oops.ejs';

const deals = '../response.json';

const trippy = {
  renderList(values) {
    const { mode, departure, arrival } = values;

    if (departure === arrival) {
      const oops = Oops();
      append('board-list', oops);
    } else {
      this.getItinerary(mode, departure, arrival)
        .then((itinerary) => {
          itinerary.forEach((card, i) => {
            setTimeout(() => {
              console.log(itinerary);
              this.renderCard(card);
            }, 100 * i);
          });

          const v = itinerary.reduce((a, b) => {
            console.log(a.cost + b.cost);
          });
          console.log(v);
        });
    }

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
    append('trip-form-wrapper', form);
  },

  formValues() {
    const formVal = {
      departure: getValue('trip-from'),
      arrival: getValue('trip-to'),
      mode: getRadioValue('trip-mode'),
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

  watchForm() {
    listenTo('trip-form-wrapper', 'change', (e) => {
      e.preventDefault();
      const { departure, arrival } = this.formValues();

      if (departure && arrival !== '') {
        document.getElementById('trip-button').disabled = false;
      } else if ((!departure && arrival) || (departure && !arrival)) {
        document.getElementById('trip-button').disabled = true;
      }
    });

    listenTo('trip-form-wrapper', 'submit', (e) => {
      e.preventDefault();
      resetHtml('board-list');
      this.renderList(this.formValues());
    });
  },

  init() {
    this.loadDestinations();
    this.watchForm();
  },
};

docReady(() => {
  trippy.init();
});
