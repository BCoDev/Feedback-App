import _ from 'lodash'
import React, {Component} from "react";
import { Fragment } from 'react'
import { reduxForm, Field, destroy } from 'redux-form'
import { Link } from 'react-router-dom';
import SurveyField from "./SurveyField";
import validateEmails from '../../utilities/validateEmails';
import formFields from './formFields';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        })
    }

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to='/surveys' className='btn btn-danger btn-mt'>Cancel</Link>
                    <Button type="submit" className='btn-mt flt-r' variant="success"> 
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

    errors.recipients = validateEmails(values.recipients || '')

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'Must provide value'
        }
    }) 

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
}) (SurveyForm)