module.exports = {


    friendlyName: 'View ADMIN page',


    description: 'Display "administrator" page. Here the admin user can use CRUD commands to alter the datastorage units',


    exits: {

        success: {
            viewTemplatePath: 'admin/bookList'
        }

    },


    fn: async function () {
        user = await User.findOne({ id: this.req.session.userId })

        let books = await Book.find().meta({ skipRecordVerification: true });


        
        return { user, books }
    }
}