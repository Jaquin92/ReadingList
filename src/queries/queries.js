import { gql } from "apollo-boost";


const getAuthorsQuery = gql`
{
    authors{
        name
        age
        id
        
    }
}
`
const getBooksQuery = gql`
{
    books{
        name
        genre
        id
        author{
            name
            age
        }
    }
}
`

const addBookMutation = gql`
mutation($name:String!, $genre:String!, $authorID:ID!){
    addBook(name:$name,genre:$genre, authorId:$authorID){
        name
        id
    }
}
`

const getBookQuery = gql`
query($id:ID){
    book(id:$id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery }