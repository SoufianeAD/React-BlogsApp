import React from "react";
import { Field, reduxForm } from 'redux-form';
import {Link} from "react-router-dom";

class BlogForm extends React.Component {

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className} >
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderTextArea = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className} >
                <label>{label}</label>
                <textarea rows="3" {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderError = ({ touched, error }) => {
        if(error && touched) {
            return (
                <div className="ui error message">
                    {error}
                </div>
            );
        }
        return null;
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field component={this.renderInput} name="title" label="Title" />
                    <Field component={this.renderInput} name="categories" label="Category" />
                    <Field component={this.renderTextArea} name="content" label="Content" />
                   <div className="ui buttons">
                       <button className="ui button primary">Submit</button>
                       <div className="or"></div>
                       <Link to="/" className="ui button negative">Cancel</Link>
                   </div>
                </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if(!formValues.categories) {
        errors.categories = 'You must enter a category';
    }

    if(!formValues.content) {
        errors.content = 'You must enter a content';
    }

    return errors;
}

export default reduxForm({
    form: 'blogForm',
    validate
})(BlogForm);