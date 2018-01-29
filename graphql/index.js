import {makeExecutableSchema} from 'graphql-tools';
import loadModules from 'utils/loadModules';
import Role from './Role';
import User from './User';
export default makeExecutableSchema(
    loadModules([
        Role,
        User
    ])
)