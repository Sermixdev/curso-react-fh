import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'sermixdev@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(()=>{
        // console.log("useEffect called.");
    }, []); 

    useEffect(()=>{
        // console.log("formState changed.");
    }, [formState]);

    useEffect(()=>{
        // console.log("email changed.");
    }, [email]);
    /*
    Poniendo un array vacío hace que el useEffect se dispare una única vez
    cuando el componente se renderice.
    React recomienda que usemos useEffect por cada trigger que queremos que 
    se dispare, mas que hace un solo hook que controle todo. Arriba un ejemplo.
    */



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type='text' className='form-control' placeholder='username' name='username' value={username} onChange={onInputChange}/>
            <input type='email' className='form-control mt-2' placeholder='sermixdev@gmail.com' name='email' value={email} onChange={onInputChange}/>
            
            {
                (username === 'strider2') && <Message />
            }
        </>
    );

};
