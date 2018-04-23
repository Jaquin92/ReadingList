const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

var books =
    [{ name: 'name of the wind', genre: 'fantasy', id: "1" },
    { name: 'whats up', genre: 'fantasy', id: "2" },
    { name: 'hello world', genre: 'sci-fi', id: "3" },
    { name: 'hello world', genre: 'sci-fi', id: "4" },
    { name: 'hello world', genre: 'sci-fi', id: "5", length: "75" }]

var authors = [{ name: "Jigsaw", age: 25, id: 1 },
{ name: "Henry", age: 21, id: 3 },
{ name: "Hudson", age: 20, id: 2 }]


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        name: { type: GraphQLString },
        age: { type: GraphQLID },
        id: { type: GraphQLID }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {

                return _.find(books, { id: args.id })

                //code to get data from data / other source


            }
        },
        author: {
            type: AuthorType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(authors, { name: args.name })
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
})
