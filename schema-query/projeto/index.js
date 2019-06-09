const {ApolloServer, gql} = require('apollo-server')

const y = gql``

const x = {}

const server = new ApolloServer({
    typeDefs:y,
    resolvers:x
})

server.listen().then(({ url }) => {
    console.log('executando em ${url}')
})