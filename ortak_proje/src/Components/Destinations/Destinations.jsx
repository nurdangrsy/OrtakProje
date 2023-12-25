import React from 'react';
import './Destinations.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import resim3 from '../../React-Proje-foto1/foto3.jpg'
import CoffeeIcon from '@mui/icons-material/Coffee';
import resim7 from '../../React-Proje-foto1/foto7.jpg'
//import resim1 from '../../React-Proje-foto1/foto1.jpg'
import resim11 from '../../React-Proje-foto1/foto11.jpg'
import resim12 from '../../React-Proje-foto1/foto12.jpg'
import resim15 from '../../React-Proje-foto1/foto15.jpg'
import resim14 from '../../React-Proje-foto1/foto14.jpg'
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';

const destinations = [
   {
      id:1,
      img:resim7,
      name:'Kahve',
      location:'Latte',
      rating:4.8,
      kah:<FreeBreakfastIcon/>,
   },
   {
      id:2,
      img:resim11,
      name:'Kahve',
      location:'Flat White',
      rating:4.5,
      kah:<FreeBreakfastOutlinedIcon/>
   }, 
   {
      id:2,
      img:resim14,
      name:'Kahve',
      location:'White Chocolate Mocha',
      rating:4.1,
      kah:<CoffeeOutlinedIcon/>,
   }, 
   {
      id:2,
      img:resim15,
      name:'Kahve',
      location:'Filtre Kahve',
      rating:4.3,
      kah:<CoffeeMakerIcon/>,
   }, 
   {
      id:2,
      img:resim12,
      name:'Kahve',
      location:'Cappuccino',
      rating:4.3,
      kah:<CoffeeMakerIcon/>,
   }, 
   {
      id:2,
      img:resim3,
      name:'Kahve',
      location:'Espresso',
      rating:4.6,
      kah:<CoffeeIcon/>,
   }, 
];

const Destinations=()=> {
   return <div className='destination section container'> 
   <div className="secContainer">

      <div className="">
         <span className="redText">
            EXPORE NOW
         </span>
         <h3>Find Your Dream Destination</h3>
         <p>Fill in the fields below to find the best 
            spot for your next tour.
         </p>
      </div>

      <div className="serchField ">
         <div className="inputField flex">
              <FmdGoodIcon className='icon'/>
              <input type="text" placeholder='Konum' />
         </div>
         <div className="inputField flex">
              <CreditCardIcon className='icon'/>
              <input type="text" placeholder='Bütçe' />
         </div>
         <div className="inputField flex">
              <CalendarMonthIcon className='icon'/>
              <input type="text" placeholder='Tarih' />
         </div>

         <button className='btn flex'>
            <SearchIcon className='icon'/>Arama</button>
      </div>

      <div className="secMenu">
         <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
         </ul>
      </div>

      <div className="destinationContainer grid">
         {destinations.map((destination) => {
            return(
               <div className="singleDestination" key=
               {destination.id}>
               <div className="imgDiv"> 
               <img src={destination.img}
                alt="DestinationImage" />
  
               <div className="descInfo flex">
                 <div className="text">
                    <span className="name">
                     {destination.name}</span>
                     
                    <h3 className='flex'>
                    {destination.kah}
                     {destination.location}</h3>
                    </div>
                    <span className="rating">
                     {destination.rating}
                       
                    </span>
               </div>
             </div>
           </div>
            );
         })}
         {/* <div className="singleDestination">
             <div className="imgDiv"> 
             <img src={resim3} alt="DestinationImage" />

             <div className="descInfo flex">
               <div className="text">
                  <span className="name">Kahve</span>
                  <h3 className='flex'><CoffeeIcon/>
                   Espresso</h3>
                  </div>
                  <span className="rating">
                     4.6
                  </span>
             </div>
           </div>
         </div> */}
      </div>
   </div>
</div>
}; 

export default Destinations;
