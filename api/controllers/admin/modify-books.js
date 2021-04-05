module.exports = {


    friendlyName: 'View ADMIN page',


    description: 'Display an "administrator" page. Here the admin user can use CRUD commands to alter the datastorage units',



    exits: {

        success: {
            viewTemplatePath: 'admin/modifyBook'
        }

    },


    fn: async function () {
        let user = await User.findOne({ id: this.req.session.userId })

        const book = await Book.findOne({ id: this.req.params.id })


        return { user, book }
    }
}