import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs, deleteBlog } from "../../actions";
import Modal from "../Modal";
import {Link} from "react-router-dom";

class BlogDelete extends React.Component {

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <div className="ui buttons"> {/*can be written on short format <></>*/}
                <button
                    onClick={() => this.props.deleteBlog(id, this.props.history)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <div className="or"></div>
                <Link to={`/blogs/show/${this.props.match.params.id}`} className="ui button">Cancel</Link>
            </div>
        );
    }

    renderContent() {
        if(!this.props.blog) {
            return "Are sure you want to delete this Blog?";
        }
        return `Are sure you want to delete Blog with title : ${this.props.blog.title}`;
    }

    render() {
        return (
           <React.Fragment>
               <Modal
                   title="Blog Delete"
                   content={this.renderContent()}
                   actions={this.renderActions()}
                   onDismiss={() => this.props.history.push(`/blogs/show/${this.props.match.params.id}`)}
               />
           </React.Fragment>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { blog: state.blogs[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchBlogs, deleteBlog })(BlogDelete);