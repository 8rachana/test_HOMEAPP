import React from 'react'
import '../cssfiles/Footer.css';

function Footer() {
    return (
        <div className='footer-main'>
            <div className='help'>
                <h6 className='ft-hd'>NEED HELP?</h6>
                <div className='help-cnt'>
                    <p className='ft-call'>Call us</p>
                    <p className='ft-num'>+ 00 222 44 666</p>
                </div>
                <div className='help-cnt'>
                    <p className='ft-call'>Email for Us</p>
                    <p className='ft-num'>+ 00 222 44 666</p>
                </div>
                <div className='help-cnt'>
                    <p className='ft-call'>Follow Us</p>
                    <p className='ft-num'>+ 00 222 44 666</p>
                </div>
            </div>
            <div className='company'>
                <h6 className='ft-hd'>COMPANY</h6>
                <p className='ft-cmp'>About Us</p>
                <p className='ft-cmp'>Community Blog</p>
                <p className='ft-cmp'>Rewards</p>
                <p className='ft-cmp'>Work with Us</p>
                <p className='ft-cmp'>Meet the Team</p>
            </div>
            <div className='support'>
                <h6 className='ft-hd'>SUPPORT</h6>
                <p className='ft-cmp'>Account</p>
                <p className='ft-cmp'>Legal</p>
                <p className='ft-cmp'>Contact</p>
                <p className='ft-cmp'>Privacy policy</p>
            </div>
            <div className='settings'>
                <h6 className='ft-hd'>SETTING</h6>
                <label>Currencies</label>
                <select name="currency" id="currency" className='curr'>
                    <option selected value="volvo">EUR</option>
                    <option value="saab">USD</option>
                    <option value="opel">AUD</option>
                </select>
            </div>
        </div>
    )
}

export default Footer