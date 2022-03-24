import PlaceHolder from './Placeholder'
import { Link } from 'react-router-dom'

const FormSurvey = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Welcome to your Dashboard</h1>
                <Link to='/surveys/new'>Add Survey</Link>
            <PlaceHolder />
        </div>
    )
}

export default FormSurvey