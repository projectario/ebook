
module.exports = {

    friendlyName: 'ebook Transaction',
    description: 'The user is buying an ebook.',

    inputs: {
        ebookPrice: { type: 'number' },
    },

    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },

    fn: async function ({ ebookPrice }) {
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
        }


        await Userbook.create({ userId: user.id, bookId: this.req.params.id, totalPrice: ebookPrice })

        throw { redirect: `/title/${this.req.params.id}` };





    }

};