import React, { FormEvent, useState } from "react";
import { BankInput, BankInputType } from "../components/BankInput";
import { useUser, UserContext } from "../providers/UserProvider";
import { Public } from "../routes";

/* eslint-disable react/react-in-jsx-scope */
export function LoginPage ()
{
    const { login } = useUser();
    const [userInput, setUserInput] = useState('');
    const [passInput, setPassInput] = useState('');

    function userInputHandler (target : HTMLInputElement)
    {
        const t = target as any;
        console.log(t.value);
        
        setUserInput(t.value);
    }

    function passInputHandler (target : HTMLInputElement)
    {
        const t = target as any;
        console.log(t.value);
        setPassInput(t.value);
    }

    function loginHandler (e : React.MouseEvent<HTMLButtonElement>)
    {
        console.log(`Login to ${userInput}:${passInput}`)
        if(login) login(userInput, passInput);
    }

    return (
        <Public>
            <section className="flex flex-col w-full h-full justify-center items-center">
                <BankInput label="CPF" type={BankInputType.CPF} onInput={userInputHandler} value={userInput}></BankInput>
                <BankInput label="Senha" type={BankInputType.Password} onInput={passInputHandler} value={passInput}></BankInput>
                {/* <input type="text" onInput={userInputHandler} value={userInput}/>
                <input type="password" onInput={passInputHandler} value={passInput}/> */}
                <button onClick={loginHandler}>Entrar</button>
            </section>
        </Public>
    );
}