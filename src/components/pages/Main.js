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
                {/* navbar-nav me-auto mb-2 mb-lg-0 */}
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
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <h1>
                    <a class="nav-link active" aria-current="page" href="/">
                        HOMAP</a></h1>
                <div class="coll" id="navbarSupportedContent">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item" className='navlist'>
                            <select>
                                <option selected hidden>LISTING</option>
                                <option>Search</option>

                            </select>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">HOTEL</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/Contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <BsCart4 />



                {/* <div class="container-fluid">
                    <a class="navbar-brand" href="#">f</a>
                    <a class="navbar-brand" href="#">in</a>
                    <a class="navbar-brand" href="#">G</a>
                </div> */}
            </nav>
            {/* <div class="has-bg-img">
                <img class="img-fluid" src={Treessky} alt="" />
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default Main