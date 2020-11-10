import React from 'react'
import { connect } from 'react-redux'

// this is going to grab all the actions out of our actions index.js file
import * as actions from 'actions';

class CommentBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add a Comment</h3>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox)
