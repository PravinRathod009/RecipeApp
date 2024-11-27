
import './App.css';
import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo'
import { Route ,Routes } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import img1 from './img/gallary_1.jpg'
import img2 from './img/Hot_dog.jpg'
import img3 from './img/main_img.png'
import img4 from './img/buger.jpg'
import img5 from './img/chocolate_Drink.jpg'
import img6 from './img/gallary_4.jpg'
import img7 from './img/gallary_6.jpg'
import img8 from './img/Hot_dog.jpg'
import img9 from './img/sandwich.jpg'
import img10 from './img/pizza.jpg'
import img11 from './img/ice_cream.jpg'
import img12 from './img/pasta.jpg'
import img13 from './img/Food-Plate.png'

function App() {
  return (
   <>
   
     <Routes>

       <Route path='/' element={<Mainpage/>}/>

       <Route path='/:mealid' element={<Mealinfo/>}/>
     </Routes>

     <Marquee  className="mar" direction="right" speed={100} delay={5}>
                   
               <div>
               <img className='imgs' src={img1}/>
               </div>
             
               <div>
               <img className='imgs' src={img2}/>
               </div>
             
               <div>
               <img className='imgs' src={img3}/>
               </div>
             
               <div>
               <img className='imgs' src={img4}/>
               </div>
             
               <div>
               <img className='imgs' src={img5}/>
               </div>
             
               <div>
               <img className='imgs' src={img6}/>
               </div>
             
               <div>
               <img className='imgs' src={img7}/>
               </div>
             
               <div>
               <img className='imgs' src={img8}/>
               </div>
             
               <div>
               <img className='imgs' src={img9}/>
               </div>
               <div>
               <img className='imgs' src={img10}/>
               </div>
               <div>
               <img className='imgs' src={img11}/>
               </div>
               <div>
               <img className='imgs' src={img12}/>
               </div>
               <div>
               <img className='imgs' src={img13}/>
               </div>
     
             
             
               
                    
                
                </Marquee>
     <div className='container1'>
        <hr></hr>
        <div className='row py-5'>
            
            <div className='col-md-3 col-sm-12'>
                <h4>Services</h4>
                <p>About</p>
                
                <p>Customer serc</p>
                <p>Customer serv</p>
            </div>
            <div className=''>
                <h4>Useful Links</h4>
                <p>sitemap</p>
              
            
            </div>
            <div className=''>
                <h4>
                    Address
                </h4>
                Pune...
             
            
            </div>
        </div>
      </div>
      <div className='cop'>&copy;  All Right Reserved | 2024  Pravin </div>

   </>
    
  );
}

export default App;
