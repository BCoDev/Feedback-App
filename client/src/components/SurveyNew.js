import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SurveyNew() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Subject: </Form.Label>
                <Form.Control placeholder="Enter Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Body: </Form.Label>
                <Form.Control as="textarea" placeholder="Enter Body" style={{ height: '200px' }} />
            </Form.Group>

                <Form.Group controlId="formGridCity">
                    <Form.Label>Recipients: </Form.Label>
                    <Form.Control />
                </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}