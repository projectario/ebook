
module.exports = {

    friendlyName: 'Reader',
    description: 'The place where the journey begins',

    exits: {
        success: {
            viewTemplatePath: 'pages/account/reader'
        }
    },


    fn: async function () {
        // find the user that is logged in 
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
        }

        // Find the ebook that the user wants to buy.
        let ebook = await Book.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });

        return { user, ebook };
    }
}
