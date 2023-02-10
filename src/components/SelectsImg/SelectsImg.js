// import React from 'react'
// import "./SelectsImgStyles.css"


// function SelectsImg(props) {
//     return (
//         <div className="selects-location ">
//             <img src={props.bgImg} alt="/" />
//             <div className="overlay">
//                 <p>{props.text}</p>
//             </div>
//         </div>
//     )
// }

// export default SelectsImg

import React from 'react'
import './SelectsImgStyles.css'

function SelectsImg({ bgImg, text }) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg