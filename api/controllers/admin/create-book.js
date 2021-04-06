module.exports = {
    
    exits: {
        
        redirect: {
            responseType: 'redirect'
        }
    },
    
    
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
        coverUrl: { type: 'string' },
    },


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
        movieId,
        coverUrl }) {

            sails.log(title)
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
            movieId,
            coverUrl
        })
        .fetch();
        sails.log(`new book was create with ID: ${createdBook.title}`);

        throw { redirect: '/admin/books' };

    }

}