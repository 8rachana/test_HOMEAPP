import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import Treessky from '../assets/Treessky.jpg';
import '../cssfiles/Main.css';

function Main() {
    return (
        <>
            <nav class="navbar-one">
                <div class="contain">
                    <a class="navbar-brand" href="#">f</a>
                    <a class="navbar-brand" href="#">in</a>
                    <a class="navbar-brand" href="#">G</a>
                </div>
                <ul class="nav-urls">
                    <li class="nav-item">
                        <a class="navlogin" aria-current="page" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="navlogin" aria-current="page" href="#">Sign Up</a>
                    </li>
                    <li class="nav-item">
                        <a class="navlogin" aria-current="page" href="#">EUR</a>
                    </li>
                </ul>
            </nav>
            <nav class="navbar-two">

                <h1>
                    <a class="nav-link active" aria-current="page" href="/">
                        HOMAP</a></h1>
                <div class="coll" id="navbarSupportedContent">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/Search">LISTING</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/Search">HOTEL</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/Contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <BsCart4 />




            </nav>

        </>
    )
}

export default Main