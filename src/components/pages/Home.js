import React, { useState } from 'react'
import '../cssfiles/Home.css';
import background from '../assets/background.jpg'
import { GoLocation } from 'react-icons/go';
import { BsCalendarCheck } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { GiEarthAmerica } from 'react-icons/gi';
import { GiUmbrella } from 'react-icons/gi';
import { GiPiggyBank } from 'react-icons/gi';
import { BsLightningFill } from 'react-icons/bs';
import one from '../assets/one.jpg';
import Footer from './Footer';
import Main from './Main';

function Home() {
    const [opendate, setopendate] = useState(false)
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        setopendate(false)
    }
    const handleopendate = () => {
        setopendate(true);
    }
    return (
        <>
            <Main />
            <div className='home-main'>
                <div className='hm-img'>
                    <img src={background} alt="HOME" className='home-img' />
                    <div className='img-home'>
                        <h3>Find Your Perfect Hotels</h3>
                        <p>Get the best prices on 20,000+ properties</p>
                    </div>
                    <div className='img-cntnr'>
                        <div className='dest'>
                            <GoLocation />
                            <div className='dest-hd'>
                                <p className='dest-title'>Destination</p>
                                <p className='dest-cnt'>Where are you going?</p>
                            </div>
                        </div>
                        <div className='checkin'>
                            <BsCalendarCheck />
                            <p className='cal-dt' onClick={handleopendate}>{moment(dateState).format('MM/DD/YYYY')}</p>
                            {opendate ? <Calendar
                                value={dateState}
                                onChange={changeDate}
                            /> : ''}
                        </div>
                        <div className='people'>
                            <BsPeople />
                        </div>
                        <button className='hm-btn'>SEARCH</button>
                    </div>
                </div>
                <div className='hm-two'>
                    <div className='hmtwo-one'>
                        <GiEarthAmerica className='earth' />
                        <div className='dest-hd'>
                            <p className='hm-hdone'>20,000+ properties</p>
                            <p className='hm-cntone'>oii hjsdfw hasfdgsa iqwuee</p>
                        </div>
                    </div>
                    <div className='hmtwo-one'>
                        <GiUmbrella className='earth' />
                        <div className='dest-hd'>
                            <p className='hm-hdone'>Trust & Safety</p>
                            <p className='hm-cntone'>oii hjsdfw hasfdgsa iqwuee</p>
                        </div>
                    </div>
                    <div className='hmtwo-one'>
                        <GiPiggyBank className='earth' />
                        <div className='dest-hd'>
                            <p className='hm-hdone'>Best Price Guarantee</p>
                            <p className='hm-cntone'>oii hjsdfw hasfdgsa iqwuee</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='hm-three'>
                    <h3>Last Minute Deals</h3>
                    <div className='prop-main'>
                        <div className='prop-one'>
                            <img className='prop-img' src={one} alt="IMAGE" />
                            <div className='prop-cntone'>
                                <h6 className='prop-cntone-hd'>EnVision Hotel Boston</h6>
                                <p className='prop-cntone-p'><GoLocation />Boston, MA, USA</p>
                            </div>
                            <div className='prop-cnttwo'>
                                <p className='prop-cnttwo-hd'>4.4 /5 Excellent 2 Reviews</p>
                                <p className='prop-cnttwo-p'><BsLightningFill />from €244,00/night</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hm-four'>
                    <h1>Top Destinations</h1>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home