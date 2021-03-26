var bcrypt = require('bcryptjs')
module.exports = {


    friendlyName: 'Update password',


    description: 'Update the password for the logged-in user.',


    inputs: {
        password: { type: 'string' },
        newPassword: { type: 'string' },
        confirmPassword: { type: 'string', required: true },
    },
    exits: {
        redirect: {
            responseType: 'redirect'
        },
        problem: {
            responseType: 'badCombo'
        },
        message: {
            responseType: 'Password update'
        }
    },


    fn: async function ({ password, newPassword, confirmPassword }) {

        let userId = this.req.session.userId;
        let user = await User.findOne({ id: userId });
        // sails.log(user)
        let match = await bcrypt.compare(password, user.password)

        if (match) {
            if (!(newPassword === confirmPassword)) {

                return { redirect: '/account/password' }
            } else {
                var changedPassword = await bcrypt.hash(newPassword, 12)
                await User.updateOne({ id: userId })
                    .set({ password: changedPassword });
                delete this.req.session.userId;
                throw { redirect: '/login', };
            }
        } else {

            return { problem: 'Wrong password' }
        }




    }

};