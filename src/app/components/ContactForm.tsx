"use client"

import emailjs from '@emailjs/browser';
import { useState } from "react";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sucessEmail, setSucessEmail] = useState(false);
    const [topic, setTopic] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [topicError, setTopicError] = useState('');

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateName(name: string): boolean {
        // Verifica se o nome contém apenas letras e tem pelo menos 3 caracteres
        const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
        return nameRegex.test(name);
    }

    function validatePhone(phone: string): boolean {
        const phoneRegex = /^[0-9]+$/;
        return phoneRegex.test(phone);
    }



    function validateForm(): boolean {
        let isValid = true;

        if (!validateName(name)) {
            setNameError("O nome deve ter pelo menos 3 letras.");
            setName('');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError("Por favor, insira um e-mail válido.");
            setEmail('');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!phone.trim()) {
            setPhoneError("Por favor, insira um numero válido");
            isValid = false;
        } else if (!validatePhone(phone)) {
            setPhoneError("Por favor, insira um numero válido");
            setPhone('');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (!topic.trim()) {
            setTopicError("Por favor, insira assunto");
            isValid = false;
        } else if (!validatePhone(phone)) {
            setTopicError("Por favor, insira assunto");
            setTopic('');
            isValid = false;
        } else {
            setTopicError('');
            console.log(topicError)
        }


        if (message.trim().length < 10) {
            setMessageError("A mensagem deve conter pelo menos 10 caracteres.");
            isValid = false;
        } else {
            setMessageError('');
        }

        return isValid;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            phone: phone,
            topic: topic
        };

        console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)

        emailjs.send("", "", templateParams, "")
            .then((response) => {
                console.log("email Enviado", response.status, response.text);
                setMessage('');
                setEmail('');
                setName('');
                setPhone('');
                setTopic('');
                setSucessEmail(true);
            }, () => {
            });
    }

    return (
        <>
            <div className='w-full h-full flex justify-center items-center flex-col text-[15px] font-nexa text-justify md:pl-0 xl:w-[95%]'>
                <div className="w-full h-full flex justify-center items-start flex-col md:items-start">
                    <span className="w-full  uppercase mb-2 font-conthrax text-xl text-center text-black font-bold lg:text-3xl">
                        Entre em contato</span>

                    <form className="w-full h-full flex justify-center items-center mb-10 flex-col md:items-center md:text-[12px] 
                           md:justify-center md:flex-col lg:text-[15px]" onSubmit={sendEmail}>
                        <div className="w-full h-full flex items-center justify-center flex-col md:flex-row md:w-[100%]">
                            <div className="w-full h-full flex items-center flex-col md:items-start">
                                <span className="text-[14px] text-laranja text-lafraco md:text-[14px]">N</span>
                                <input type="text"
                                    placeholder={nameError || "Nome"}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[100%] h-[36px] bg-black/25 text-white rounded-md font-bold md:w-[95%]
                                        ${nameError ? 'placeholder-red-600' : 'placeholder-white'} pl-4`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col items-center md:items-start">
                                <span className="text-[14px] text-laranja text-lafraco md:text-[14px]">a</span>
                                <input type="text"
                                    placeholder={emailError || "Email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[100%] h-[36px] bg-black/25 text-white font-bold rounded-md md:w-[95%]
                                        ${emailError ? 'placeholder-red-600' : 'placeholder-white'} pl-4`}
                                />
                            </div>
                        </div>

                        <div className="w-full h-full mt-4 flex justify-center items-center md:mt-0 md:w-[100%]">
                            <div className="w-full h-full flex justify-start items-center flex-col md:items-start">
                                <span className="text-[14px] mb-2 md:text-[15px]"></span>
                                <textarea
                                    placeholder={messageError || "Mensagem"}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    maxLength={500}
                                    className={`w-[100%] h-[130px] bg-black/25 text-white font-bold rounded-md md:w-[98%] 2xl:w-[98%] 
                                        ${messageError ? 'placeholder-red-600' : 'placeholder-white pt-2'} pl-4`}
                                />

                                <button type="submit" className="mt-4 font-conthrax text-[16px] bg-vermelho text-black bg-black/25 border border-white
                                    px-3 rounded-lg uppercase font-bold cursor-pointer">Enviar</button>
                            </div>
                        </div>
                        
                        {sucessEmail &&
                            <h1 className='text-veforte'>Formulario Enviado!</h1>
                        }
                    </form>
                </div>

            </div>
        </>
    )
}
