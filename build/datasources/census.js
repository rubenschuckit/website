const _ = require('lodash/fp')

const fixItem = _.flow(
  _.zipObject(['population', 'update', 'fips']),
  _.update('population', Number),
)

const statesPop = {
  app: 'json',
  url: 'https://api.census.gov/data/2019/pep/population?get=POP,LASTUPDATE&for=state',
  ttl: false,
  fixItems: _.flow(
    _.tail,
    _.map(fixItem),
  ),
}

module.exports = {
  statesPop,
}
