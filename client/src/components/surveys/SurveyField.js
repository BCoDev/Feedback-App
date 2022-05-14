// Survey Field ontains logic to render a single label and text input

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}} className="input-border" />
            <div className="red-text" style={{color: 'red', marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    )
}

export default SurveyField