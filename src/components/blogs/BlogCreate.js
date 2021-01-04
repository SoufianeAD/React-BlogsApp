import React from "react";
import { connect } from 'react-redux';
import { createBlog } from "../../actions";
import BlogForm from "./BlogForm";

class BlogCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createBlog(formValues, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h3>Blog Create</h3>
                <BlogForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createBlog })(BlogCreate);