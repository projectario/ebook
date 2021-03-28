var bcrypt = require('bcryptjs')
module.exports = {


  friendlyName: 'Signup',


  description: 'Signup to the movie club.',


  inputs: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    confirmPassword: { type: 'string', required: true },
  },


  exits: {
    redirect: {
      responseType: 'redirect'
    },
    problem: {
      responseType: 'badCombo'
    }
  },


  fn: async function ({ firstName, lastName, email, password, confirmPassword}) {
    sails.log(firstName, lastName, email, password, confirmPassword, isKid);
    this.email = email.toLowerCase().trim(); // this propably works
    var isUser = await User.findOne({ email: email });
    if (isUser) throw { problem: '<h2> Email already in use! </h2>' }
    else {
      if (password === confirmPassword) {
        let newUser = await User.create({ firstName, lastName, email, password: await bcrypt.hash(password, 12)})
        throw { redirect: '/login' };
      }
      else {
        throw { problem: '<h1>Passwords not match!!!</h1>' }
      }
    }
  }

};
