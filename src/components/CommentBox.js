import React from 'react'

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
        // call an action creator and save the comment
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

export default CommentBox
