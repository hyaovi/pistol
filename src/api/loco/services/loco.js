'use strict';

/**
 * loco service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loco.loco');
