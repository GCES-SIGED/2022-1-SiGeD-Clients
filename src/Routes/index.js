const ClientRouter = require('./ClientRouter');
const FeatureRouter = require('./FeatureRouter');
const LotacaoRouter = require('./LotacaoRouter');

const routes = [
  ClientRouter,
  FeatureRouter,
  LotacaoRouter
]

module.exports = routes;