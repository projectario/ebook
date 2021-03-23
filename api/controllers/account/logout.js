module.exports = {


    friendlyName: 'Logout',


    description: 'Log out of this app.',



    exits: {
        redirect: {
            responseType: 'redirect'
        }
    },


    fn: async function () {

        delete this.req.session.userId;

        // Broadcast a message that we can display in other open tabs.
        // if (sails.hooks.sockets) {
        //     await sails.helpers.broadcastSessionChange(this.req);
        // }

        // Then finish up, sending an appropriate response.
        // > Under the covers, this persists the now-logged-out session back
        // > to the underlying session store.
        if (!this.req.wantsJSON) {
            throw { redirect: '/login' };
        }
    }
}
