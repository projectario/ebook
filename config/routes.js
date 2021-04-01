/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  // login
  'GET /login': { action: 'entrance/view-login' },
  'POST /login': { action: 'entrance/login' },
  // signup
  'GET /signup': { action: 'entrance/view-signup' },
  'POST /signup': { action: 'entrance/signup' },
  // logout
  'GET /logout': { action: 'account/logout' },
  //chat
  'GET /chat': { action: 'chat/chat' },
  'POST /chat': { action: 'chat/chat' },

  'GET /ebooks': { view: 'pages/ebooks' },


  //Account settings 
  'GET /account': { action: 'account/account-settings' },

  //Update password
  'GET /account/password': { action: 'account/settings/view-edit-password' },
  'POST /account/password': { action: 'account/settings/update-password' },

  //Update email 
  'GET /account/email': { action: 'account/settings/view-edit-email' },
  'POST /account/email': { action: 'account/settings/update-email' },

  //Update name 
  'GET /account/name': { action: 'account/settings/view-edit-name' },
  'POST /account/name': { action: 'account/settings/update-name' },



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
