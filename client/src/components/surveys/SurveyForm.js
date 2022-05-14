import _ from 'lodash'
import React, {Component} from "react";
import { Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom';
import SurveyField from "./SurveyField";
import validateEmails from '../../utilities/validateEmails';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
]

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        })
    }

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to='/surveys' className='btn btn-danger btn-mt'>Cancel</Link>
                    <Button type="submit" className='btn-submit btn-mt' variant="success"> 
                        Next &nbsp;
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                </Form>
            </Fragment>
        )
    }
}

const validate = (values) => {
    const errors = {}

    errors.emails = validateEmails(values.emails || '')

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'Must provide value'
        }
    }) 

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm'
}) (SurveyForm)