import React, {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [inputValid, setinputValid] = useState(false)
    const [phoneError, setphoneError] = useState(false)


    useEffect( () => {
        for (const validation in validations) {

            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLengthError':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)

                    break;
                case  'isEmail':
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                     re.test(String(value).toLowerCase()) ? setemailError(false) : setemailError(true)
                    break;
                case  'isPhone':
                    const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
                    return regex.test(value) ? setphoneError(false) : setphoneError( true);
                    break;
            }
        }
    }, [value])

    useEffect( () => {
        if ( isEmpty || minLengthError || maxLengthError ||emailError) {
            setinputValid(false)
        }else  {
            setinputValid(true)
        }
    }, [ isEmpty, minLengthError, maxLengthError,emailError])

    return{
        isEmpty, minLengthError, maxLengthError,emailError, inputValid, phoneError
    }
}
const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }
    const onClear = (e) => {
        setValue('')
    }

    return{
        value, onChange, onClear,  onBlur, isDirty, ...valid
    }
}



const ContactForm = () => {
    const name = useInput('', {isEmpty:true, minLength:1, maxLength:5,})
    const email = useInput('', {isEmpty:true, minLength:3, isEmail:true,})
    const phone = useInput('', {isEmpty:true, minLength:5, isPhone:true,  maxLength:15,})
    const message = useInput('', {isEmpty:true, minLength:5, maxLength:8,})

    let handleUploadFile = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("phone", phone);
        data.append("message", message);
        createDataPeople(data);
    };

    const URI: string = "http://localhost:8888";

    const createDataPeople = async (people: any) => {
        try {
            const request = async () => {
                const res = await fetch(`${URI}/api/person`, {
                    credentials: "same-origin",
                    method: "POST",
                    body: people,
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data);
                }
            };
            if (people) {
                await request();
            }
        } catch (e) {
            return e;
        }
    };


    return (
        <Container >
            <form onSubmit={handleUploadFile} id={"personForm"} >
                <h1 style={{ textAlign:"center", marginTop:"5%", marginBottom:"10px"}}>Contact us</h1>

                {/*{(name.isDirty && name.maxLengthError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>maxLengthError</div>}*/}
                {/*{(name.isDirty && name.minLengthError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>minLenghtError</div>}*/}
                {(name.isDirty && name.isEmpty) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>This field is required</div>}
                <input style={{width:"50%", height:"50px", marginTop:"10px", borderInline:"blue", marginLeft:"25%"}} name={"name"} type={"name"} placeholder={"Enter your name"}
                       onChange={e => name.onChange (e)} onBlur={e => name.onBlur (e)} value={name.value}/><br/>

                {(email.isDirty && email.isEmpty) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>This field is required</div>}
                {/*{(email.isDirty && email.minLengthError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>minLenghtError</div>}*/}
                {(email.isDirty && email.emailError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>emailError</div>}
                <input style={{width:"50%", height:"50px", marginTop:"10px", borderInline:"blue",  marginLeft:"25%"}} name={"email"} type={"text"} placeholder={"Enter your email"}
                       onChange={e => email.onChange (e)} onBlur={e => email.onBlur (e)} value={email.value}/><br/>

                {/*{(phone.isDirty && phone.minLengthError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>minLenghtError</div>}*/}
                {/*{(phone.isDirty && phone.maxLengthError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>maxLengthError</div>}*/}
                {(phone.isDirty && phone.isEmpty) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>This field is required</div>}
                {(phone.isDirty && phone.phoneError) && <div style={{color:"red", width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}}>phoneError</div>}
                <input style={{width:"50%", height:"50px", marginTop:"10px", borderInline:"blue",  marginLeft:"25%"}} name={"phone"} type={"number"} placeholder={"Enter your phone"}
                       onChange={e => phone.onChange (e)} onBlur={e => phone.onBlur (e)} value={phone.value}/><br/>


                <input style={{width:"50%", height:"50px", marginTop:"10px", borderInline:"blue", marginLeft:"25%"}} name={"text"} type={"text"} placeholder={"Enter your message"}
                       onChange={e => message.onChange (e)} onBlur={e => message.onBlur (e)} value={message.value}/><br/>

                <Button disabled={!email.inputValid || !message.inputValid || !name.inputValid || !phone.inputValid}
                        style={{width:"100px", height:"50px", marginTop:"10px", marginLeft:"25%"}}
                        variant={"primary"} type={"submit"} >

                    {console.log(name, email, message, phone)}Submit</Button>
            </form>
        </Container>

    );


};

export default ContactForm;