import React, { useState } from 'react'
import Main from './Main'
import Footer from './Footer';
import one from '../assets/one.jpg';
import { GoLocation } from 'react-icons/go';
import { BsLightningFill } from 'react-icons/bs';
import '../cssfiles/Search.css';
import background from '../assets/background.jpg';
import { BsCalendarCheck } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { FcRating } from 'react-icons/fc';
import Slider from '@mui/material/Slider';

function Search() {
    const [opendate, setopendate] = useState(false)
    const [dateState, setDateState] = useState(new Date())
    const [value, setValue] = useState([10, 37]);


    const changeDate = (e) => {
        setDateState(e)
        setopendate(false)
    }
    const handleopendate = () => {
        setopendate(true);
    }
    const handleChange = () => {
        setValue();
    };
    return (
        <>
            <Main />
            <div>
                <div className='search-one'>
                    <div className='hm-img'>
                        <img src={background} alt="HOME" className='home-img' />
                        <div className='img-home'>
                            <h2>Search on top</h2>
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
                                <p className='dest-cntthree'>1 Adult - 0 Children</p>
                            </div>
                            <button className='hm-btn'>SEARCH</button>
                        </div>
                    </div>
                    <div className='search-two'>
                        <div className='search-flt'>
                            <h5>Filter By</h5>

                            <div className='sprice'>
                                <h6>Filter Price</h6>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    valueLabelDisplay="auto"
                                    style={{width:'100px'}}
                                    defaultValue={[20, 37]}
                                />
                            </div>
                            <div className='sreview'>
                                <h6>Review Score</h6>
                                <div className='sr-check'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1">Excellent</label>
                                </div>
                            </div>
                            <div className='sstars'>
                                <h6>Hotel Star</h6>
                                <div className='sr-check'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"><FcRating /><FcRating /><FcRating /></label>
                                </div>
                            </div>
                            <div className='sfacil'>
                                <h6>Facilities</h6>
                                <div className='sr-check'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1">Air Conditioning</label>
                                </div>
                            </div>
                            <div className='stheme'>
                                <h6>Hotel Theme</h6>
                                <div className='sr-check'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1">Best Value</label>
                                </div>
                            </div>


                        </div>
                        <div className='search-prop'>
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
                <Footer />
            </div>
        </>
    )
}

export default Search