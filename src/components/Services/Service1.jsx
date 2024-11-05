import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Service1 = () => {
  return (
    <div className="service-content">
      <div>
        <h1>Your phone + our app + a debit card = a simpler life.</h1>
        <p>
          We designed a money app for your lifestyle, and you can get a debit
          card to go with it. That is all you need to make the right money
          moves.
        </p>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730720949/kuda2_ybsdqw.png"
          alt=""
        />
      </div>

      <div>
        <a href="">Open An Account in Minutes</a>
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
};

export default Service1;
