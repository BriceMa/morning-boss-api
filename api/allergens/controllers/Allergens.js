'use strict';

/**
 * Allergens.js controller
 *
 * @description: A set of functions called "actions" for managing `Allergens`.
 */

module.exports = {

  /**
   * Retrieve allergens records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.allergens.search(ctx.query);
    } else {
      return strapi.services.allergens.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a allergens record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.allergens.fetch(ctx.params);
  },

  /**
   * Count allergens records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.allergens.count(ctx.query);
  },

  /**
   * Create a/an allergens record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.allergens.add(ctx.request.body);
  },

  /**
   * Update a/an allergens record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.allergens.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an allergens record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.allergens.remove(ctx.params);
  }
};
