import Ali from '../assets/Aliexpress_logo.png';
import Amazon from '../assets/Amazon-logo.png';
import Adidas from '../assets/Adidas1.png';

const Hero = () => {
  return (
    <main className="hero container">
    <div className='herotext'>
      <h1>Your Feet Deserve The best</h1>
      <p>Your feet deserve the best – comfort, style, and support that 
        carry you through every step. Experience premium footwear 
        designed with care, combining durability, elegance, and unmatched
         everyday performance.</p>
         <div className="herobtn">
            <button className="herobutton">Shop Now</button>
            <button className="herobutton1">Category</button>
         </div>

         <div className="find">
            <p>Also available at</p>
                <div className='findlogo'>
              <img src={Ali} alt="" />
              <img src={Amazon} alt="" />
              </div>
         </div>
    </div>
    <div className="hero-image">
    <img src={Adidas} alt="Adidas" />
    </div>
    </main>
  );
};

export default Hero;