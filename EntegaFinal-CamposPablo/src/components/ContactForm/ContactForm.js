import React, { useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import './contactForm.css'

const ContactForm = () => {

    // const [id, setId] = useState();
    const [form, setForm] = useState({
        name: '',
        email: '',
        mensaje: '',
    });

    const submitHandler = (ev) => {

        console.log("entro")
        ev.preventDefault();
        console.log("paso prevent")

        const db = getFirestore();
        console.log("hago getFirestore")
        const formCollection = collection(db, 'formulario');
        console.log("hago formCollection")
        addDoc(formCollection, form).then(res => {
            console.log("conexion de contacto")
            console.log(res);
            // setForm({});
            console.log("addDoc")
        });

    }

    const changeHandler = (ev) => {
        const { value, name } = ev.target;
        setForm({ ...form, [name]: value });
    }


    return (
        <form className='backGround p-5 mb-5' onSubmit={submitHandler}>
            <div className='text-center mb-4'>
                <h1>Completar formulario</h1>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="name">Nombre</label>
                <input className="form-control" id="name" name="name" value={form.name} rows="3" onChange={changeHandler} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={changeHandler} />
            </div>
            <div className="mb-5">
                <label className="form-label" htmlFor="mensaje">Mensaje</label>
                <input className="form-control" id="mensaje" name='mensaje' rows="3" value={form.mensaje} onChange={changeHandler} />
            </div>
            {/* <div className='text-center'> */}
            <button className="btn btn-success w-25">Enviar</button>
            {/* </div> */}
        </form>
    )
}

export default ContactForm;