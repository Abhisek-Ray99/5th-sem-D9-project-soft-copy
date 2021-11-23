import React from 'react'
import { UilUser, UilAt, UilCommentMessage, UilMessage } from '@iconscout/react-unicons'

import { style, Div, FormContainer, ThreeColumn, Column1, Column2, Column3, InputContainer, Label, Input, TextArea, SubmitButton, Field } from './Contactelements';

const Contact = () => {

    async function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {};

        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        // console.log(formData);
    }

    return (
        <Div id="contact-hero">
            <FormContainer>
                <form method="post" onSubmit={handleOnSubmit}>
                    <ThreeColumn>
                        <h1 className="form-title">Contact Us</h1>
                        <p className="form-description">Let me connect</p>
                        <Column1>
                            <InputContainer>
                                <Label htmlFor="name-input">First Name</Label>
                                <Field>
                                    <UilUser style={style} />
                                    <Input id="name-input" type="text" name="name" placeholder="E.g. Ricky" />
                                </Field>
                            </InputContainer>
                            <InputContainer>
                                <Label htmlFor="name-input">Last Name</Label>
                                <Field>
                                    <UilUser style={style} />
                                    <Input id="name-input" type="text" name="name" placeholder="E.g. Ray" />
                                </Field>
                            </InputContainer>
                        </Column1>
                        <Column2>
                            <InputContainer>
                                <Label htmlFor="email-input">Your Email Address</Label>
                                <Field>
                                    <UilAt style={style} />
                                    <Input id="email-input" type="email" name="email" placeholder="E.g. mymail@mail.com" />
                                </Field>
                            </InputContainer>
                        </Column2>
                        <Column3>
                            <InputContainer>
                                <Label htmlFor="name-input">Your Message</Label>
                                <Field>
                                    <UilCommentMessage style={style} />
                                    <TextArea id="message-input" name="message" placeholder="E.g. Hello I want to connect with you" />
                                </Field>
                            </InputContainer>
                        </Column3>
                    </ThreeColumn>
                    <SubmitButton>
                        <span>Submit</span>
                        <UilMessage />
                    </SubmitButton>
                </form>
            </FormContainer>
        </Div>
    )
}

export default Contact;
