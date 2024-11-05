import { FaApple } from "react-icons/fa";
import {FaGooglePlay} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-content">
      {/* hero tagline */}
      <div className="hero-tagline">
        <h1>The money app for Africans.</h1>
        <p>
          Make free transfers, enjoy cashless payment options and earn interest
          on your savings with Kuda.
        </p>
        <section className="hero-btn">
          <button>
            <FaApple />
            Download on the <span>App Store</span>
          </button>
          <button>
            <FaGooglePlay />
            Download on the <span>Google Play</span>
          </button>
        </section>
      </div>
      {/* hero image */}
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730291751/kuda1_pwrj1h.png"
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
