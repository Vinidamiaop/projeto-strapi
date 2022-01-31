'use strict';

/**
 * post service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post', ({strapi}) => ({
    async find(...args) {
      return await super.find({...args, populate: ['author', 'category', 'cover']});
    },
}));


