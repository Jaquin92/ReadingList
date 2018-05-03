import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";



class Books extends Component {


    render() {
        let books
        if (this.props.data.loading) {
            books = <div>Books are Loading</div>
        } else {
            books = this.props.data.books.map((item, i) => {
                return <li key={i}  >{item.name} <br />{item.author.name}</li>
            })
        }


        console.log(this.props.data)
        return (

            <div>

                <ul id="book-list" >
                    {books}
                </ul>

            </div>
        )
    }

}
export default graphql(getBooksQuery)(Books);