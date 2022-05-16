import React, {Component} from "react";
import { Fragment } from 'react'
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview"


class SurveyNew extends Component {
    state = { showFormReview: false }

    renderContent() {
        if (this.state.showFormReview === true) {
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false})} />
        }
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />
    }

    render() {
        return (
        <Fragment>
            {this.renderContent()}
        </Fragment>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// <Form>
// <Row className="mb-3">
//     <Form.Group as={Col} controlId="formGridEmail">
//         <Form.Label>Title: </Form.Label>
//         <Form.Control type="text" placeholder="Enter title" />
//     </Form.Group>
// </Row>

// <Form.Group className="mb-3" controlId="formGridAddress1">
//     <Form.Label>Subject: </Form.Label>
//     <Form.Control placeholder="Enter Subject" />
// </Form.Group>

// <Form.Group className="mb-3" controlId="formGridAddress2">
//     <Form.Label>Body: </Form.Label>
//     <Form.Control as="textarea" placeholder="Enter Body" style={{ height: '200px' }} />
// </Form.Group>

//     <Form.Group controlId="formGridCity">
//         <Form.Label>Recipients: </Form.Label>
//         <Form.Control />
//     </Form.Group>

// <Button variant="primary" type="submit">Submit</Button>
// </Form>
