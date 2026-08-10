import "../css/SuccessModal.css";

import { FaCheckCircle } from "react-icons/fa";

function SuccessModal({

    show,

    title,

    message,

    onClose

}){

    if(!show){

        return null;

    }

    return(

        <div className="success-overlay">

            <div className="success-modal">

                <div className="success-icon">

                    <FaCheckCircle/>

                </div>

                <h2>

                    {title}

                </h2>

                <p>

                    {message}

                </p>

                <button

                    onClick={onClose}

                    className="continue-btn"

                >

                    Continue →

                </button>

            </div>

        </div>

    );

}

export default SuccessModal;