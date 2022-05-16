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

const SimpleEmailFirld = (props) => {
    return (
        <>
            <label htmlFor={props.labelName}
                className={props.labelClassName}>
                {props.labelText}
            </label>
            <input
                type={props.inputType}
                className={props.textClassName}
                id={props.formId}
                autoComplete={props.textautoComplete}
                name={props.name}
                value={props.textValue}
                onChange={props.onChange} />
        </>
    )
}

const PasswordField = (props) => {
    return (
        <>
            <label
                htmlFor={props.labelName}
                className={props.labelClassName}>
                {props.labelText}
            </label>
            <input
                type={props.inputType}
                className={props.textClassName}
                id={props.formId}
                autoComplete={props.textautoComplete}
                name={props.name}
                value={props.textValue}
                onChange={props.onChange} />
        </>
    )
}

const SubmitButton = () => {
    return (
        <>
        </>
    )
}

const ResetButton = () => {
    return (
        <>
        </>
    )
}

const CancelButton = () => {
    return (
        <>
        </>
    )
}

export {
    SimpleTextBox,
    PasswordField,
    SubmitButton,
    ResetButton,
    CancelButton,
    SimpleEmailFirld
}