import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Form.css"

function Form(){
    const company = useParams();
    const history = useHistory();

    const [textArea, setTextArea] = useState();
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [textIsValid, setTextIsValid] = useState(true);

    const [nameWasTouched, setNameWasTouched] = useState(false);
    const [emailWasTouched, setEmailWasTouched] = useState(false);
    const [textWasTouched, setTextWasTouched] = useState(false);

    useEffect(() => {
        setTextArea(`Shank chuck boudin buffalo, venison bacon picanha.  Frankfurter cow ham hock sirloin.  Porchetta ground round pork, rump tenderloin jowl pork belly t-bone short ribs corned beef pig.  Tail sausage pancetta, jerky landjaeger cow brisket pork belly.","Shank alcatra kielbasa, flank boudin pig porchetta salami pancetta meatloaf brisket strip steak pork loin.  Andouille prosciutto spare ribs flank ball tip chicken sausage chislic beef ribs picanha filet mignon pork loin corned beef salami.  Turkey kielbasa meatloaf, sausage pastrami chicken doner bresaola brisket pork chop buffalo filet mignon t-bone spare ribs.  Leberkas jerky short ribs biltong, pork loin bacon turducken pastrami ball tip brisket venison beef ribs boudin.  Landjaeger boudin beef ribs tenderloin kielbasa ball tip.  Corned beef short ribs pig buffalo ground round beef shankle salami.  Shoulder spare ribs chuck, pork chop brisket pork landjaeger sirloin corned beef salami bresaola.`);
    }, [])

    const nameChangeHandler = (e) =>{
        setNameInput(e.target.value);
        if(e.target.value.trim() !== "" && e.target.value.trim().includes(" ")){
            setNameIsValid(true);
        } else{
            setNameIsValid(false);
        }
    }

    const emailChangeHandler = (e) =>{
        console.log("touching mail")
        setEmailInput(e.target.value.trim());

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = e.target.value.trim();

        if(e.target.value.trim() !== "" && pattern.test(email)){
            setEmailIsValid(true);
        } else{
            setEmailIsValid(false);
        }
    }

    const textChangeHandler = (e) =>{
        setTextArea(e.target.value);
        if(e.target.value.trim() !== ""){
            setTextIsValid(true);
        } else{
            setTextIsValid(false);
        }
    }

    const nameBlurHandler = () => {
        setNameWasTouched(true);
    }

    const emailBlurHandler = () => {
        setEmailWasTouched(true)
    }

    const textBlurHandler = () => {
        setTextWasTouched(true)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(nameIsValid && emailIsValid && textIsValid){
            console.log("submitted:","\n", nameInput,"\n", emailInput,"\n", textArea);
            history.push("/summary");
        }
    };

    if(company.code === "xyz" || company.code === "abc" || company.code === "rnq")
        return (
        <div>
            <form className="dataForm" onSubmit={submitHandler}>
                <label htmlFor="daneOsobowe">First name and Last name:</label><br/>
                <input type="text" value={nameInput} onChange={nameChangeHandler} onBlur={nameBlurHandler} id="daneOsobowe"></input><br/>
                {(!nameIsValid && nameWasTouched) && <p className="error">Input must include both First name and Last name</p>}
                <label htmlFor="email">Email:</label><br/>
                <input type="email" value={emailInput} onChange={emailChangeHandler} onBlur={emailBlurHandler} id="email"></input><br/>
                {(!emailIsValid && emailWasTouched) && <p className="error">Email cannot be empty and must be formatted correctly</p>}
                <label htmlFor="zgloszenie">Treść Zgłoszenia:</label><br/>
                <textarea id="zgloszenie" maxLength="5000" value={textArea} onChange={textChangeHandler} onBlur={textBlurHandler}></textarea><br/>
                {(!textIsValid && textWasTouched) && <p className="error">Text cannot be empty</p>}
                <button type="submit">"Send"</button>
            </form>
        </div>
        )
    else {
        history.push("/home");
        return null;
    }
}

export default Form;