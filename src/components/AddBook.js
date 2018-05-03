import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";



class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            genre: "",
            author: ""
        }

    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        let authors;

        if (this.props.data.loading) {
            authors = <option>Loading authors</option>
        } else {
            authors = this.props.data.authors.map((item, i) => {
                return <option key={i} value={item.id} >{item.name}</option>
            })
        }
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)} >
                <div className="field" >
                    <label>Book name:</label>
                    <input onChange={e => this.setState({ name: e.target.value })} type="text" />
                </div>

                <div className="field" >
                    <label>Genre:</label>
                    <input onChange={e => this.setState({ genre: e.target.value })} type="text" />
                </div>
                <div className="field" >
                    <label>Author:</label>
                    <select onChange={e => this.setState({ author: e.target.value })} >
                        <option>Select author</option>
                        {authors}
                    </select>
                </div>
                <button>+</button>
            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);