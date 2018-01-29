import Role from 'models/role';

export const queryText = `
    roles: [Role]
    role(id: ID): Role
`;

export const queries = {
    async roles() {
        const allUsersRoles = await Role
            .fetchAll()
            .then(roles => {
                return roles.toJSON()
            });
        return allUsersRoles;
    },
    async role(_, {id: roleId}) {
        const singleUserRole = await Role
            .where('id', roleId)
            .fetch()
            .then(role => {
                if (!role) return;
                return role.toJSON()
            });
        return singleUserRole;
    }
};