function Account (props) {

    return (
        <section className="account">
            <div className="account__content">
                <h3 className="account__title">{props.title}</h3>
                <p className="account__amount">{props.amount}</p>
                <p className="account__description">{props.description}</p>
            </div>
            <div><button className="button">View transactions</button>
            </div>
        </section>
    )
}

export default Account
