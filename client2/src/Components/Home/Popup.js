import React, { useState } from 'react';
import './css/popup.css'

const Popup = (props) => {

    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    return (


        <>

            <div>
                {isPopupOpen && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>{props.heading}</h2>
                            <p>{props.content}</p>
                            <button onClick={closePopup}>OK</button>
                        </div>
                    </div>
                )}
            </div>

        </>

    )
}

export default Popup