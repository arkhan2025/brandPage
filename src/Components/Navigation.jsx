import logo from "../assets/Adidas_logo.png";

const Navigation = () => {
  return (
    <nav >
            <img src={logo} className='logoimg' />
    
            <ul>
              <li href='#'>Menu</li>
              <li href='#'>Location</li>
              <li href='#'>About</li>
              <li href='#'>Contact</li>
            </ul>
    
            <button className='login'>LogIn</button>
        </nav>
  );
};

export default Navigation;