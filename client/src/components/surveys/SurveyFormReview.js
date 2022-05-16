// Shows users their form inputs for review
import _ from 'lodash'
import { connect } from 'react-redux'
import formFields from "./formFields"
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

import Button from "react-bootstrap/esm/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}            
            <Button 
                className="btn-mt text-white" variant="warning"
                onClick={ onCancel }>
                Back
            </Button>
            <Button 
                onClick={() => submitSurvey(formValues, history)}
                className='btn-mt flt-r'
                variant="success">
                Send Survey &nbsp;
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))