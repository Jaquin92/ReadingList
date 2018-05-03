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

export { getBooksQuery, getAuthorsQuery }