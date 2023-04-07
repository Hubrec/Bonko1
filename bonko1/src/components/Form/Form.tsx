import './Form.css';

type FormProps = {
    type: string;
    fieldText: string;
    buttonText: string;
}

function Form(props: FormProps) {

    return (
        <div className="form">
            <h1>{props.type}</h1>
            <form>
                <label htmlFor="value">{props.fieldText}</label>
                <input type="text" id="value" name="value" />

                <button type="submit">{props.buttonText}</button>
            </form>
        </div>
    );

}

export default Form;