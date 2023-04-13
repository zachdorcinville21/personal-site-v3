import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import styles from './Contact.module.sass';
import gsap from 'gsap';

import Check from '/public/assets/icons/contact/check.svg';
import EmailIcon from '/public/assets/icons/contact/email.svg';

init('user_4gGAJTUE5UFmqkyzrNtBd');

const Text = styled.div`
    color: #fffafa;
    font-weight: normal;
`;

const Input = styled.input`
    width: 100%;
    padding: 15px 20px;
    border-radius: 3px;
    border: none;
    margin-bottom: 20px;
    background-color: #36454f;
    color: #fff;

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: #fff;
    }
`;

const MsgInput = styled.textarea`
    width: 100%;
    padding: 15px 20px;
    border-radius: 3px;
    border: none;
    margin-bottom: 20px;
    background-color: #36454f;
    color: #fff;

    ::placeholder {
        color: #fff;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 15px 20px;
    border-radius: 3px;
    border: none;
    background-color: #000000;
    color: #fffafa;
    font-weight: bold;
    transition: ease 0.2s;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 2px 2px #000000;
    }

    &:focus {
        outline: none;
    }
`;

const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        formSubmitted: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, subject, message } = state;
        let templateParams = {
            from_name: email,
            to_name: 'zdorcinville@gmail.com',
            subject: subject,
            message: message,
        };
        emailjs.send(
            'website-email-form',
            'template_y4m89vi',
            templateParams,
            'user_4gGAJTUE5UFmqkyzrNtBd'
        );
        resetForm();
        setState({ ...state, formSubmitted: true });
    };

    const resetForm = () => {
        setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            formSubmitted: false,
        });
    };

    const handleChange = (
        param: string,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setState({ ...state, [param]: e.target.value });
    };

    const fadeInTitle = (selector: string) => {
        gsap.to(selector, { autoAlpha: 1, duration: 1 });
    };

    useEffect(() => {
        gsap.delayedCall(0.3, fadeInTitle, ['.heading-animate']);
    }, []);

    return (
        <div className={styles['contact-container']}>
            <div className={styles['contact-innerContainer']}>
                <Text
                    id={styles['contact-heading']}
                    className="heading-animate"
                    as="h1"
                >
                    <EmailIcon width={50} height={50} />
                    Get in touch
                </Text>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <form
                        className={styles['contact-form']}
                        onSubmit={handleSubmit}
                    >
                        <Input
                            placeholder="Name"
                            type="text"
                            onChange={(e) => handleChange('name', e)}
                            value={state.name}
                            required
                        />
                        <Input
                            placeholder="Email"
                            type="email"
                            onChange={(e) => handleChange('email', e)}
                            value={state.email}
                            required
                        />
                        <Input
                            placeholder="Subject"
                            type="text"
                            onChange={(e) => handleChange('subject', e)}
                            value={state.subject}
                            required
                        />
                        <MsgInput
                            placeholder="Message"
                            onChange={(e) => handleChange('message', e)}
                            value={state.message}
                            required
                        />
                        <SubmitButton type="submit">Send</SubmitButton>
                    </form>
                    {state.formSubmitted && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            <Check width={50} height={50} />
                            <Text as="h3">Thank you for reaching out</Text>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
