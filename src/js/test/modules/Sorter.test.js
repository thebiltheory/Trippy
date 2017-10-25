import { assert } from 'chai';
import { sorter } from '../../app/modules/Sorter';

const stops = [
   {
      "transport":"train",
      "departure":"Athens",
      "arrival":"Istanbul",
      "duration":{
         "h":"05",
         "m":"45",
         "total":345
      },
      "cost":120,
      "discount":25,
      "reference":"TAI0545",
      "initialPrice":160
   },
   {
      "transport":"bus",
      "departure":"Athens",
      "arrival":"Istanbul",
      "duration":{
         "h":"05",
         "m":"30",
         "total":330
      },
      "cost":30,
      "discount":25,
      "reference":"BAI0530",
      "initialPrice":40
   },
   {
      "transport":"car",
      "departure":"Athens",
      "arrival":"Istanbul",
      "duration":{
         "h":"05",
         "m":"15",
         "total":315
      },
      "cost":120,
      "discount":0,
      "reference":"CAI0515",
      "initialPrice":120
   }
];

describe('Sorter', function () {
  it('Should return the cheapest stop', function () {
    const stop = sorter('cheapest', stops, 'Istanbul');
    assert.equal(stop.cost, 22.5);
  });

  it('Should return the fastest stop', function () {
    const stop = sorter('fastest', stops, 'Istanbul');
    assert.equal(stop.duration.total, 315);
  })
});
