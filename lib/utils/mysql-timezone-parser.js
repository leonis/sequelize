'use strict';

var momentTimezone = require('moment-timezone');

module.exports = function(timezone) {
  if (/\//.test(timezone)) {
    var m = momentTimezone.tz(timezone);
    if (!m.tz()) {
      throw Error('timezone has no data for ' + timezone);
    }
    timezone = m.format('Z');
  }

  if (!/^[\+\-][0-1][0-9]:[0-5][0-9]$/.test(timezone)) {
    throw Error('invalid timezone time:' + timezone);
  }

  return timezone;
};
