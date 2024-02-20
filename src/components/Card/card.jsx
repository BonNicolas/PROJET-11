function Card (props) {
    return(
        <div className="features__item">
            <img src={props.image} alt={props.alt} className="features__icon"/>
            <h2 className="features__title">{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default Card