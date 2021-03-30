
module.exports = {


    friendlyName: 'View edit password',


    description: 'Display "Edit password" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/account/edit-password'
        }

    },


    fn: async function () {

        let user = null;
        if (this.req.session.userId) {
            user = await User.findOne({ id: this.req.session.userId })
            return { user }
        }
        // Respond with view.
        return { user };

    }


};