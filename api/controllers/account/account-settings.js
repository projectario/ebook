module.exports = {


    friendlyName: 'View account settings',


    description: 'Display "settings" page.',


    exits: {

        success: {
            viewTemplatePath: 'pages/account/account'
        },
        redirect: {
            responseType: 'redirect'
        }

    },


    fn: async function () {

        let sessionUserId = this.req.session.userId;
        let user;
        if (sessionUserId) {
            user = await User.findOne({ id: sessionUserId });
        }
        return { user };


    }


};
