module.exports = {


    friendlyName: 'View ADMIN page',


    description: 'Display an "administrator" page. Here the admin user can use CRUD commands to alter the datastorage units',


    inputs: {
        title: { type: 'string' },
        author: { type: 'string' },
        genre: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        language: { type: 'string' },
        releasedYear: { type: 'number' },
        rating: { type: 'number' },
        isBestSeller: { type: 'boolean' },
        isEditorChoice: { type: 'boolean' },
        movieId: { type: 'number' },
    },

    exits: {

        redirect: {
            responseType: 'redirect'
        }

    },


    fn: async function (inputs) {
        let user = await User.findOne({ id: this.req.session.userId })

        const book = await Book.findOne({ id: this.req.params.id })

        
        await Book.updateOne({id: this.req.params.id}).set({
            title: inputs.title,
            author: inputs.author,
            genre: inputs.genre,
            price: inputs.price,
            description: inputs.description,
            language: inputs.language,
            releasedYear: parseInt(inputs.releasedYear),
            rating: parseInt(inputs.rating),
            isBestSeller: inputs.isBestSeller,
            isEditorChoice: inputs.isEditorChoice,
            movieId: parseInt(inputs.movieId),
        })

        throw { redirect: '/admin/books' }
    }
}