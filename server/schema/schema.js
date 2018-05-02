const graphql = require("graphql");
const _ = require("lodash");
const Book = require("../models/book");
const Author = require("../models/author");

const { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

var books =
    [{ name: 'name of the wind', genre: 'fantasy', id: "1", authorId: "1" },
    { name: 'whats up', genre: 'fantasy', id: "2", authorId: "2" },
    { name: 'hello world', genre: 'sci-fi', id: "3", authorId: "3" },
    { name: 'hello world', genre: 'sci-fi', id: "4" },
    { name: 'hello world', genre: 'sci-fi', id: "5", length: "75" }]

var authors = [{ name: "Jigsaw", age: 25, id: "1" },
{ name: "Henry", age: 21, id: "3" },
{ name: "Hudson", age: 20, id: "2" }]


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // return _.find(authors, { id: parent.authorId })
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        id: { type: GraphQLID },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                // return _.filter(books, { authorId: parent.id })
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {

                // return _.find(books, { id: args.id })

                //code to get data from data / other source


            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(authors, { id: args.id })
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve() {
                // return books
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve() {
                // return authors
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: GraphQLString },
                genre: { type: GraphQLString },
                authorId: { type: GraphQLString }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
