
module.exports = {


    friendlyName: 'Update email',


    description: 'Update the email for the logged-in user.',


    inputs: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },



    },
    exits: {
        redirect: {
            responseType: 'redirect'
        },
        problem: {
            responseType: 'badCombo'
        },
    },


    fn: async function ({ firstName, lastName }) {

        let userId = this.req.session.userId;
        let user = await User.findOne({ id: userId });
        // sails.log(user)
        // sails.log(user)

        //update firstname
        var newFirstname = firstName;
        await User.updateOne({ id: userId })
            .set({ firstName: newFirstname });


        // update lastname
        var newLastname = lastName;
        await User.updateOne({ id: userId })
            .set({ lastName: newLastname });





        throw { redirect: '/ebooks' }

    }

};
