
/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `Routed.io`
 *
 * http://routed.io/docs
 */

var RoutedIo = module.exports = integration('Routed.io')
  .channels(['server', 'mobile', 'client'])
  .endpoint('api.routed.io')
  .ensure('settings.apiKey')
  .mapper(mapper)
  .retries(2);

/**
 * Identify.
 *
 * http://routed.io/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

RoutedIo.prototype.identify = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * http://routed.io/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

RoutedIo.prototype.track = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Page.
 *
 * http://routed.io/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

RoutedIo.prototype.page = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Screen.
 *
 * http://routed.io/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

RoutedIo.prototype.screen = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Group.
 *
 * http://routed.io/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

RoutedIo.prototype.group = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Alias.
 *
 * http://routed.io/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

RoutedIo.prototype.alias = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
