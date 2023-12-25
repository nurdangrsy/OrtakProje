import React from 'react';
import './Portifolio.css'
import icon1 from '../../React-Proje-foto1/foto1.jpg';
import icon4 from '../../React-Proje-foto1/foto4.jpg';
import icon5 from '../../React-Proje-foto1/foto5.jpg';



const Portifolio=()=> {
   return <div className='portfolio section container'> 
<div className="secContainer grid">
   <div className="leftContent">
      <div className="secHeading">
         <h3>Why Should You Choose Us</h3>
         <p>Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Iusto, sint.!</p>
      </div>

      <div className="grid">
         <div className="singlePortifolio flex">
            <div className="iconDiv">
               <img src={icon1} alt="IconImage" />
            </div>

            <div className="infor">
               <h4>Safety and support</h4>
               <p>Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Impedit, delectus!</p>
            </div>

         </div>

         <div className="singlePortifolio flex">
            <div className="iconDiv">
               <img src={icon4} alt="IconImage" />
            </div>
         
            <div className="infor">
               <h4>Safety and support</h4>
               <p>Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Impedit, delectus!</p>
            </div>
         </div>

          <div className="singlePortifolio flex">
            <div className="iconDiv">
               <img src={icon5} alt="IconImage" />
            </div>

            <div className="infor">
               <h4>Safety and support</h4>
               <p>Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Impedit, delectus!</p>
            </div>
          </div>

        
      </div>
   </div>

   <div className="rightContent">
      
   </div>
</div>
   </div>
};

export default Portifolio;
