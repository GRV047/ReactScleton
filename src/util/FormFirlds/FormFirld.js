const SimpleTextBox = (props) => {
    return (
        <>
            <label htmlFor={props.labelName}
                className={props.labelClassName}>
                {props.labelText}
            </label>
            <input type={props.inputType}
                className={props.textClassName}
                id={props.formId}
                autoComplete={props.textautoComplete}
                name={props.name}
                value={props.textValue}
                onChange={props.onChange} />
        </>
    )
}



export {
    SimpleTextBox
}