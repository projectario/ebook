module.exports = {
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
        success: {
            viewTemplatePath: 'admin/createBook'
        },
        redirect: {
            responseType: 'redirect'
        }
    },

    inputs: {},


    fn: async function ({ 
        title,
        author,
        genre,
        price,
        description,
        language,
        releasedYear,
        rating,
        isBestSeller,
        isEditorChoice,
        movieId }) {

        let createdBook = await Book.create({ 
            title,
            author,
            genre,
            price,
            description,
            language,
            releasedYear,
            rating,
            isBestSeller,
            isEditorChoice,
            movieId 
        })
        .fetch();
        sails.log(`new book was create with ID: ${createdBook.id}`);

        throw { redirect: '/admin/books' };

    }

}