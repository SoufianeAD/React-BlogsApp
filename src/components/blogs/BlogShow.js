import React from 'react';
import ReactDom from 'react-dom';
import  { connect } from 'react-redux';
import { fetchBlogs, deleteBlog } from "../../actions";
import {Link} from "react-router-dom";
import Modal from "../Modal";

class BlogShow extends React.Component {

    componentDidMount() {
        if (!this.props.blog) {
            this.props.fetchBlogs();
        }
    }

    render() {

        if (!this.props.blog) {
            return <div>Loading..</div>
        }

        return (
            <div className="ui raised very padded text container segment">
                <Link to="/" className="ui active button primary">
                    <i className="arrow left icon" />
                    Back
                </Link>
                <Link
                    className="ui active button right floated negative"
                    to={`/blogs/delete/${this.props.match.params.id}`}
                >
                    <i className="trash icon" />
                     Delete
                </Link>
                <h2 className="ui header">{this.props.blog.title}</h2>
                <p>{this.props.blog.content}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { blog: state.blogs[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchBlogs, deleteBlog })(BlogShow);