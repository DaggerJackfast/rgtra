import db from 'config/db';
import User from './user';
const Role = db.Model.extend({
    tableName: 'roles'
});
export default Role;