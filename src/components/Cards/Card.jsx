import "./Card.css"

const Card = (props) => {
  return (
    <div> 
    <section className="card-container">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
    </section>
    </div>
  )
}

export default Card