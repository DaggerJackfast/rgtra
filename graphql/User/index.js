import {schema} from './schema'
import resolvers from './resolvers'
import {queries, queryText} from './queries'
import {mutations, mutationText} from './mutations'

export default {
    name: 'User',
    schema,
    resolvers,
    queries,
    queryText,
    mutations,
    mutationText
}