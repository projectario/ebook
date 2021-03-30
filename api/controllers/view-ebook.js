module.exports = {

    friendlyName: 'View e book',
    description: 'Display eBook - id page.',


    // inputs: {
    //     genre: {
    //         type: 'string',
    //     },
    //     isBestseller: {
    //         type: 'boolean'
    //     },
    //     isEditorChoice: {
    //         type: 'boolean'
    //     }

    // },

    exits: {
        success: {
            viewTemplatePath: 'pages/ebook'
        }
    },


    fn: async function () {
        // find the user that is logged in 
        let sessionUserId = this.req.session.userId;
        // sails.log(`sessionUserId from view-book.js: ${sessionUserId}`)
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId });
            // sails.log(`user from view-book.js: ${user}`)
        }

        let ebook = await Book.findOne({ id: this.req.params.id }).meta({ skipRecordVerification: true });

        return { ebook, user };
    }


}
