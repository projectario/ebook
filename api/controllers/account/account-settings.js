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
        // let sessionUserId = this.req.session.userId;

        // if (sessionUserId == undefined) throw { redirect: '/login' }

        return {};


    }


};
