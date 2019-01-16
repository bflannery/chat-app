var moment = require('moment');

var generateMessage = (from, text) => ({
  from,
  text,
  createdAt: moment().valueOf()
});

var generateLocationMessage = (from, lat, long) => ({
  from,
  url: `https://www.google.com/maps?q=${lat},${long}`,
  createdAt: moment().valueOf()
})

module.exports = { generateMessage, generateLocationMessage };
