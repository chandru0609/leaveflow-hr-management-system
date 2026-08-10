import "../../css/Card.css";

function Card({ title, value, children }) {

    return (

        <div className="custom-card">

            {title && <h3>{title}</h3>}

            {value && <h1>{value}</h1>}

            {children}

        </div>

    );

}

export default Card;