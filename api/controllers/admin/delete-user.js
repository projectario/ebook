module.exports = {
    inputs: {
        id: {type: 'number'},
        firstName: { type: 'string'},
        lastName: { type: 'string'},
        isAdmin: {type: 'boolean'}
    },

    exits: {
        redirect : {
            responseType : 'redirect'
        }
    },

    
    fn: async function ({id}) {
        loggedInUser = await User.findOne({ id: this.req.session.userId })
        const thisUser = this.req.params.id;
        let user = await User.findOne({ id: thisUser });

        const burnedUser = await User.destroyOne({id: id});
        if (burnedUser) {
            sails.log(`Deleted User with ID: ${id}`);
            throw {redirect: '/admin/users'};
        }
        else {
            sails.log(`We didn't find a user with ID: ${id}`);
        }

        return { loggedInUser, user };
    }
}