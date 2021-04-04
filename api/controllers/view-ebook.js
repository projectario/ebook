module.exports = {

    friendlyName: 'View ebook details',
    description: 'Display eBook - id page.',

    exits: {
        success: {
            viewTemplatePath: 'pages/ebook'
        }
    },

    fn: async function () {
        // If the user is logged in, find the user in db.
        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId });
        }

        // Take the book id from the url and find the ebook details.
        let ebook = await Book.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });


        // ===== Find if this ebook is owned by the logged in user. =====
        let purchased = false;
        if (user) {
            // 1. Find the transactions of the logged in user.
            let myebookTransactions = await Userbook.find({ userId: user.id }).meta({ skipRecordVerification: true });

            // 2. Extract the bookId from the purchased ebooks.
            let myBooksIds = []
            myebookTransactions.forEach(transaction => {
                myBooksIds.push(transaction.bookId)
            });

            // Check if current ebook is included in my ebooks.
            purchased = myBooksIds.includes(ebook.id);
        }

        return { ebook, user, purchased };
    }


}
