const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [{ name: 'name of the wind', genre: 'fantasy', id: "1" },
{ name: 'whats up', genre: 'fantasy', id: "2" },
{ name: 'hello world', genre: 'sci-fi', id: "3" }]


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {

                return _.find(books, { id: args.id })

                //code to get data from data / other source


            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
})
