import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
    const [ success, setSuccess ] = useState( false );
    const [ successMessage, setSuccessMessage ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs.sendForm( 'service_3uzzm9x', 'template_wqb7uwh', e.target, 'jNhOjCmeiDHZxun4G' )
            .then( ( result ) => {
                setSuccess( true );
                setSuccessMessage( "Your message sent sent successfully. We'll get in touch soon." );
            }, ( error ) => {
                setSuccess( false );
                setError( error.text );
            } );
        e.target.reset();
    };


    return (
        <div>
            {
                success ? <h6 className="text-success" style={ { marginLeft: "6rem" } }>{ successMessage }</h6> : <h6 className="text-danger" style={ { marginLeft: "6rem" } }>{ error }</h6>
            }
            <div className='my-5'>
                <Form onSubmit={ sendEmail } className="form w-75 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Control type="text" placeholder="Subject" name='subject' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Your Name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Your Email" name='email' required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fw-bold'>Please Write Your Message Here</Form.Label>
                        <Form.Control as="textarea" rows={ 5 } name='message' required />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ContactForm;