
module.exports = {

    friendlyName: 'Reader',
    description: 'The place where the journey begins',

    exits: {
        success: {
            viewTemplatePath: 'pages/account/reader'
        },
        redirect: {
            responseType: 'redirect'
        }
    },


    fn: async function () {

        // find the user that is logged in 
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId }).meta({ skipRecordVerification: true });
        }

        //  ===== If the user doesn't own the book redirect him to buy it ===== 
        // Find the transactions of the logged in user.
        let myebookTransactions = await Userbook.find({ userId: user.id }).meta({ skipRecordVerification: true });

        // Extract the bookId from the purchased ebooks.
        let myBooksIds = []
        myebookTransactions.forEach(transaction => {
            myBooksIds.push(transaction.bookId)
        });

        let purchased = myBooksIds.includes(parseInt(this.req.params.id))
        if (!purchased) {
            throw { redirect: `/payment/${this.req.params.id}` };
        }
        // ======================


        // Find the ebook that the user wants to buy.
        let ebook = await Book.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });

        return { user, ebook };
    }
}
