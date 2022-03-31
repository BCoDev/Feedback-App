import PlaceHolder from './Placeholder'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Welcome to your Dashboard</h1>
                <Button variant="danger"><Link to='/surveys/new'><FontAwesomeIcon icon={faPlus} className="color"/></Link></Button> 
            <PlaceHolder />
        </div>
    )
}

export default Dashboard