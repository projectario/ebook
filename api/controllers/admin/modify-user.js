module.exports = {


    friendlyName: 'View user page',


    description: 'Display an "administrator" page. Here the admin user can use CRUD commands to alter the datastorage units',

    inputs: {
        firstName: { type: 'string'},
        lastName: { type: 'string'},
        isAdmin: {type: 'boolean'}
    },

    exits: {

        success: {
            viewTemplatePath: 'admin/modifyUser'
        }

    },


    fn: async function ({}) {
        loggedInUser = await User.findOne({ id: this.req.session.userId })
        let user = await User.findOne({ id: this.req.params.id });



        return { loggedInUser, user }
    }
}