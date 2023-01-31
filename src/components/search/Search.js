// import React from 'react'
// import './SearchStyles.css'


// function Search() {
//     return (
//         <div name='book' className='search'>
//             <div className="container">
//                 <div className="left">
//                     <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
//                     <p>Come experience the very pinnacle of luxury stay at Caribbean vacations set along the most gorgeous tropical settings and exquisite beaches in Cancun, Cozumel, Tulum, Playa del Carmen, and the Bahamas.</p>
//                     <div className="search-col-2">
//                         <div className="box">
//                             {/* <div>
//                                 <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
//                             </div> */}
//                             <div>
//                                 <h3>LEADING</h3>
//                                 <p>ALL-INCLUSIVE COMPANY</p>
//                             </div>
//                         </div>
//                         <div className="box">
//                             <div>
//                                 <h3>NO ONE INCLUDES MORE</h3>
//                                 <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
//                                 <button>View Packages</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="right">
//                     <div className="promo">
//                         <h4 className="save">Book before the month end to enter the drawing!</h4>
//                         <p className="timer">1 week left!</p>
//                         <p className="offers"></p>
//                     </div>
//                     <form>
//                         <div className="input-wrap">
//                             <label>Destination</label>
//                             <select>
//                                 <option value="1">Cancun</option>
//                                 <option value="1">Cozumel</option>
//                                 <option value="1">Playa Del Carmen</option>
//                                 <option value="1">Riviera Maya</option>
//                                 <option value="1">Tulum</option>
//                             </select>
//                         </div>
//                         <div className="date">
//                             <div className="input-wrap">
//                                 <label>Check-In</label>
//                                 <input type="date" />
//                             </div>
//                             <div className="input-wrap">
//                                 <label>Check-Out</label>
//                                 <input type="date" />
//                             </div>
//                         </div>
//                         <button>Rates & Availabilities </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Search

import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>FOR 20 YEARS IN-A-ROW</p>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <form>
                    <div className="input-wrap">
                        <label>Destination</label>
                        <select>
                            <option value="1">Grande Antigua</option>
                            <option value="1">Grenda</option>
                            <option value="1">Emerald Bay</option>
                            <option value="1">Bora Bora</option>
                            <option value="1">Key West</option>
                            <option value="1">Maldives</option>
                            <option value="1">Barbados</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label>Check-Out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <button>Rates & Availabilities </button>
                </form> */}
            </div>
        </div>
    )
}

export default Search