import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";




class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    render() {
        let books
        if (this.props.data.loading) {
            books = <div>Books are Loading</div>
        } else {
            books = this.props.data.books.map((item, i) => {
                return <li key={i} onClick={e => { this.setState({ selected: item.id }) }}  >{item.name}</li>
            })
        }



        return (

            <div>

                <ul id="book-list" >
                    {books}
                </ul>
                <BookDetails bookId={this.state.selected} />
            </div>
        )
    }

}
export default graphql(getBooksQuery)(Books);