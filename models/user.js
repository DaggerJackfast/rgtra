import db from 'config/db';
import Role from './role';

const User = db.Model.extend({
    tableName: 'users',
    role: function () {
        return this.belongsTo(Role);
    }
});
export default User;