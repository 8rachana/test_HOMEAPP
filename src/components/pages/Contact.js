import React from 'react'
import Treessky from '../assets/Treessky.jpg';
import '../cssfiles/Contact.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import Footer from './Footer';
import Main from './Main';

function Contact() {
    return (
        <>
            <Main />
            <div className='cnt-main'>
                <div className='img-cnt'>
                    <img className='cnt-img' src={Treessky} alt="CONTACT" />
                    <h6 className='img-nm'>CONTACT</h6>
                </div>
                <div className='cnt-mainform'>
                    {/* <form className='cnt-form'>
                    <h6>We'd love to hear from you</h6>
                    <p>Send us a message and we'll respond as soon as possible</p>
                    <input className='cnt-name' placeholder='Name'></input>
                    <input className='cnt-mail' placeholder='Email'></input>
                    <textarea className='cnt-msg' placeholder='Message'></textarea>
                    <button className='cnt-btn'>SEND MESSAGE</button>
                    <div className='cnt-adr'>
                        <h6 class='font-weight-bolder'>Traveler Ltd</h6>
                        <p>Tell. + 00 111 888 22</p>
                        <p>Email.hello@site.com</p>
                        <p>1355 Market street, Suite 800San, Fransisco, CA 92445 Unkited States</p>

                    </div>
                </form> */}
                    <form className='cnt-form'>
                        <div class="form-group">
                            <input type="text" class="form-control" id="name" placeholder="Name" name="email" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Email" name="email" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder='Message'></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <div className='cnt-adr'>
                        <h6 class='font-weight-bolder'>Traveler Ltd</h6>
                        <div className='address'>
                            <p className='num'>Tell. + 00 111 888 22</p>
                            <p className='mail'>Email.hello@site.com</p>
                            <p className='addr'>1355 Market street, Suite 800San, Fransisco, CA 92445 Unkited States</p>
                        </div>
                    </div>

                </div>
                <div className='map'>
                    {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
               
            </MapContainer> */}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact