/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {


  // filemaker
  autoPK : false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  // layout name
  tableName : 'Contacts',

  attributes: {

    id : {
      type : 'string',
      primaryKey : true,
      unique : true
    }

  }
};

