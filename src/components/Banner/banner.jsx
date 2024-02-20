
const promotedContent = [

    { 
        id : "1",
        title : "No fees.",
    },

    {
        id : "2",
        title : "No minimum deposit.",
    },

    {
        id : "3",
        title : "High interest rates.",
    },

    {
        id : "4",
        title : "Open a savings account with Argent Bank today!",
    },
]


function Banner() {
    return (
      <div className="hero">
       <section className="hero__container">
        {promotedContent.map((props, index) => {
            return (
                <p key={props.id} className={index < 3 ? "hero__title" : "hero__text"}>{props.title}</p>
            )
        })}
       </section>
      </div>
    )
  }
  
  export default Banner