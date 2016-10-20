'use strict';

var momentTimezone = require('moment-timezone');

module.exports = function(timezone) {
  timezone = /\//.test(timezone) ?
    momentTimezone.timezone(timezone).format('Z') : timezone;

  if (/^[\+\-][0-1][0-9]:[0-5][0-9]$/.test(timezone)) {
    throw Error('invalid timezone:' + timezone);
  }

  if (timezone !== '+00:00') {
    timezone = timezone.charAt(0) === '+' ?
      timezone.replace('+', '-') : timezone.replace('-', '+');
  }

  return timezone;
};
