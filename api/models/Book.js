/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'books',
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title: { type: 'string' },
    author: { type: 'string' },
    genre: { type: 'string' },
    price: { type: 'number' },
    description: { type: 'string' },
    language: { type: 'string' },
    releasedYear: { type: 'number' },
    rating: { type: 'number' },
    isBestSeller: { type: 'boolean' },
    isEditorChoice: { type: 'boolean' },
    coverUrl: { type: 'string' },
    purchases: {
      collection: 'Purchase',
      via: 'bookId',
    }

  },

};

