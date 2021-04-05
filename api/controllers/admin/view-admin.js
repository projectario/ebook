module.exports = {


    friendlyName: 'View ADMIN page',


    description: 'Display "administrator" page. Here the admin user can use CRUD commands to alter the datastorage units',


    exits: {

        success: {
            viewTemplatePath: 'admin/admin'
        }

    },


    fn: async function () {

        return {};
    }
}