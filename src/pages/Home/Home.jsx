import Card from "../../components/Cards/Card";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Nav";
import Service1 from "../../components/Services/Service1";
import Service2 from "../../components/Services/Service2";
import Service3 from "../../components/Services/Service3";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-sec">
        <Card
          image=""
          title="Order a Kuda card on the app with pickup and delivery options."
        />
        <Card
          image=""
          title="Order a Kuda card on the app with pickup and delivery options."
        />
        <Card
          image=""
          title="Order a Kuda card on the app with pickup and delivery options."
        />
        <Card
          image=""
          title="Order a Kuda card on the app with pickup and delivery options."
        />
        <Card
          image=""
          title="Order a Kuda card on the app with pickup and delivery options."
        />
      </div>
      <Service1 />
      <Service2 />
      <Service3 />
    </div>
  );
}

export default Home