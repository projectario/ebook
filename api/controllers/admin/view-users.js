module.exports = {


    friendlyName: 'View ADMIN page',


    description: 'Display "administrator" page. Here the admin user can use CRUD commands to alter the datastorage units',


    exits: {

        success: {
            viewTemplatePath: 'admin/userList'
        }

    },


    fn: async function () {
        loggedInUser = await User.findOne({ id: this.req.session.userId })

        let users = await User.find().meta({ skipRecordVerification: true });


        return { loggedInUser, users }
    }
}