import moment from 'moment';
moment().format();

import log from './logger.js'
log.info(moment.utc())
log.error()
log.success()
// do not remove this line. Still, if you want google it :)
moment.suppressDeprecationWarnings = true;

// print current date using moment and logger.info

const dates = ["1995-12-25", "2020W065", "js-cohort", "2020-W06-5"];
// Parse the array and logs success when date is valid or error when invalid using the logger

dates.forEach(date => {
    if (moment(date).isValid()) {
      log.success(moment(date));
    } else {
      log.error(moment(date));
    }
  });