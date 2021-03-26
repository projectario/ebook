
module.exports = {


    friendlyName: 'Update email',


    description: 'Update the email for the logged-in user.',


    inputs: {

        email: { type: 'string' },

    },
    exits: {
        redirect: {
            responseType: 'redirect'
        },
        problem: {
            responseType: 'badCombo'
        },
        message: {
            responseType: 'Email update'
        }
    },


    fn: async function ({ email }) {
        let res = this.res
        let userId = this.req.session.userId;
        let user = await User.findOne({ id: userId });
        // sails.log(user)

        //update email
        var newEmail = email
        sails.log(newEmail)
        var validEmail = await User.findOne({ email: newEmail })
        sails.log(validEmail)
        // sails.log(validEmail.email)
        if (validEmail !== undefined) throw { problem: '<h2> Email already in use! </h2>' }
        else {
            await User.updateOne({ id: userId })
                .set({ email: newEmail });
            delete this.req.session.userId;
            throw { redirect: '/login' };

        }





    }

};