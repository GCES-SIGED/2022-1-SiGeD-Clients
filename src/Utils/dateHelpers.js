const moment = require('moment-timezone');

const dateNow = () => {
  return moment.utc(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();
}

module.exports = { dateNow }