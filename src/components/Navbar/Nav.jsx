import { IoMdArrowDropdown } from "react-icons/io";
import "./Nav.css"
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo-links">
        <div className="nav-logo-hold" >
          <img
          className="nav-logo"
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1729523551/kuda-bank-icon-2048x458-v3ajyagk_ph2yng.png"
          alt="logo"
        />
        </div>
        
        <section className="nav-links" >
          <nav>
            <a href="#">Personal</a>
            <IoMdArrowDropdown />
          </nav>
          <nav>
            <a href="#">Business</a>
            <IoMdArrowDropdown />
          </nav>
          <nav>
            <a href="#">Company</a>
            <IoMdArrowDropdown />
          </nav>
          <nav>
            <a href="#">Help</a>
            <IoMdArrowDropdown />
          </nav>
        </section>
          
      </div>

      <div className="nav-btn">
        <button className="nav-btn1">Sign In</button>
        <button className="nav-btn2">Join Kuda</button>
        <button className="nav-btn3">
          <img
            className="nav-btn-logo"
            src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730301704/Flag_of_Nigeria_tvfejo.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
