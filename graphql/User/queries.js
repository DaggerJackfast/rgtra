import User from 'models/user';

export const queryText = `
    users: [User]
    user(id: ID): User
`;
export const queries = {
    async users() {
        const allUsers = await User
            .forge()
            .orderBy('first_name', 'ASC')
            .fetchAll({withRelated: ['role']})
            .then(users => {
                return users.toJSON()
            });
        return allUsers;
    },
    async user(_, {id: userId}) {
        const singleUser = await User
            .where({id: userId})
            .fetch({withRelated: ['role']})
            .then(user => {
                if (!user) return null;
                return user.toJSON()
            });
        return singleUser;
    }
};