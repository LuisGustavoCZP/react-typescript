import React, { useState } from "react";
import { BankInput, BankInputType } from "../components/BankInput";
import { useUser } from "../providers/UserProvider";
import { Public } from "../routes";
import { Link } from 'react-router-dom';
import ReactLogo  from "../assets/logo.svg";
import '../styles/inputs.css';

/* eslint-disable react/react-in-jsx-scope */
export function RegisterPage ()
{
    const [nameInput, setNameInput] = useState('');
    const [cpfInput, setCpfInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const [passConfirm, setpassConfirm] = useState('');

    /*function inputHandler (target : HTMLInputElement){
        const type = target?.type;
        const t = target as any;
        console.log(type);

        switch (type){
            case '0':
                setCpfInput(t.value);
                break;
            case '1':
                setDateInput(t.value);
                break;
            case '2':
                setPassInput(t.value);
                break;
            case '6':
                setNameInput(t.value);
                break;
            case '7':
                setEmailInput(t.value);
                break;
        }
    }*/;

    function cpfHandler (target : HTMLInputElement){
        const type = target?.type;
        const t = target as any;
        setCpfInput(t.value);
    }

    function nameHandler (target : HTMLInputElement){
        const type = target?.type;
        const t = target as any;
        setNameInput(t.value);
    }

    function dateHandler (target : HTMLInputElement){
        const type = target?.type;
        const t = target as any;
        setDateInput(t.value);
    }

    function passHandler (target : HTMLInputElement){
        const type = target?.type;
        const t = target as any;
        setPassInput(t.value);
    }

    function emailHandler (target : HTMLInputElement){
        const type = target?.type;
        const t = target as any;
        setEmailInput(t.value);
    }

    function passConfirmHandler (target : HTMLInputElement)
    {
        const t = target as any;
        console.log(t.value);
        setpassConfirm(t.value);
    }

    function registerHandler (e : React.MouseEvent<HTMLButtonElement>)
    {
        console.log(`Registring ${nameInput}`);
    }

    return (
        <Public>
            <div>
                <section className="flex flex-col w-full h-full justify-center items-center">
                    <div className="max-w-[75%] flex flex-col w-full h-full justify-center items-center" >
                        <img src={ReactLogo} alt="Alpha Bunker" width="103px" height="103px" />
                        <h3 className="titlePages">Crie sua conta</h3>
                        <BankInput className="input" type={BankInputType.Name} onInput={nameHandler} value={nameInput} placeholder={"Digite seu Nome"} ></BankInput>
                        <BankInput className="input" type={BankInputType.Date} onInput={dateHandler} value={dateInput} placeholder={"Digite sua Data de Nascimento"} ></BankInput>
                        <BankInput className="input" type={BankInputType.CPF} onInput={cpfHandler} value={cpfInput} placeholder={"Digite seu CPF"} ></BankInput>
                        <BankInput className="input" type={BankInputType.Email} onInput={emailHandler} value={emailInput} placeholder={"Digite seu Email"} ></BankInput>
                        <BankInput className="input" type={BankInputType.Password} onInput={passHandler} value={passInput} placeholder={"Digite sua Senha"}></BankInput>
                        <BankInput className="input" type={BankInputType.Password} onInput={passConfirmHandler} value={passConfirm} placeholder={"Confirme sua Senha"}></BankInput>
                        <button className="btn-primary-base w-full" onClick={registerHandler}>Cadastrar</button>
                        <Link className="logintransfer" to={'/login'}>Entrar</Link>
                    </div>
                </section>
            </div>
        </Public>
    );
}