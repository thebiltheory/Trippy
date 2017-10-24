import Itinerary from './app/modules/Itinerary';
import { groupBy, append, getValue, listenTo, resetHtml, docReady, getRadioValue, toHours } from './app/utils/helpers';
import { trippyGet } from './app/api/api';
import Card from './app/components/card.ejs';
import Form from './app/components/form.ejs';
import Oops from './app/components/oops.ejs';
import Total from './app/components/total.ejs';

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
          const totalTrip = {
            departure,
            arrival,
            cost: 0,
            duration: 0,
          };

          itinerary.forEach((card, i) => {
            totalTrip.cost += card.cost;
            totalTrip.duration += card.duration.total;

            setTimeout(() => {
              this.renderCard(card);
            }, 100 * i);
          });

          return totalTrip;
        })
        .then((total) => {

          const { departure, arrival, cost, duration } = total;
          const renderTotalData = {
            departure,
            arrival,
            cost,
            duration: toHours(duration),
          }

          this.renderTotal(renderTotalData);
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

  renderTotal(totalData) {
    const total = Total(totalData);
    append('trip-total', total);
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
      console.log(cities);
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
      resetHtml('trip-total');
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
