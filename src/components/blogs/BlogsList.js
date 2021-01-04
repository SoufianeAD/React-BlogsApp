import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions";
import { Link } from "react-router-dom";

class BlogsList extends React.Component {

    componentDidMount() {
        this.props.fetchBlogs();
    }

    renderList() {
        return this.props.blogs.map( (blog) => {
            return (
                <div className="item" key={blog.id} >
                    <i className="large twitter middle aligned icon" />
                    <div className="content">
                        <Link to={`/blogs/show/${blog.id}`} className="header">{blog.title}</Link>
                        <div className="description">{blog.content}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (!this.props.blogs) {
            return <div>Loading..</div>;
        }
        return (
            <div className="ui relaxed divided list">
                <Link to="/blogs/new" className="ui button primary " style={{marginBottom: '10px'}}>Create Blog</Link>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { blogs: Object.values(state.blogs) };
}

export default connect(mapStateToProps, { fetchBlogs })(BlogsList);