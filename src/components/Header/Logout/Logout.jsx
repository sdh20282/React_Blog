import React from 'react'
import { Link } from 'react-router-dom'
import login from '../../../assets/icon-login.svg'
import register from '../../../assets/icon-register.svg'
import './logout.css'

export default function Logout() {
    return (
        <>
            <li>
                <a href="#" class="button gray">
                    <img src={login} alt="" />
                    <span>Login</span>
                </a>
            </li>
            <li class="only-pc">
                <a href="#" class="button gray">
                    <img src={register} alt="" />
                    <span>Register</span>
                </a>
            </li>
        </>
    )
}