import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import IconChat from '../../assets/icon-chat.png';
import IconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';

const CardContent = [

  { 
      id : "1",
      image : IconChat,
      title : "You are our #1 priority",
      alt : "Chat Icon",
      content : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },

  {
      id : "2",
      image : IconMoney,
      title : "More savings means higher rates",
      alt : "Money Icon",
      content : "The more you save with us, the higher your interest rate will be!",

  },
  
  {
      id : "3",
      image : iconSecurity,
      title : "Security you can trust",
      alt : "Security icon",
      content : "We use top of the line encryption to make sure your data and money is always safe.",

  },
  
]

function Home() {
    return (
      <main>
        <Banner/>
        <section className='features'>
          {CardContent.map((props => {
            return(
              <Card key={props.id} 
              image={props.image} 
              alt={props.alt}
              title={props.title} 
              content={props.content} 
              />
            )
          }))}
        </section>
      </main>
    )
  }
  
  export default Home