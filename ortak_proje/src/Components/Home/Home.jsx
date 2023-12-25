import React from 'react';
import './Home.css'
import video from '../../React-Proje-foto1/video.mp4'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home=()=> {
   return <div className='Home'> 
   <div className="videoBg">
    <video src={video} autoPlay loop muted ></video>
   </div>

   <div className="sectionText">
    <h1>Unutamayacağınız bir kahve deneyimi için 
        doğru yerdesiniz!</h1>
    <p>
        Harika tatlarıyla tatlı ve kahve, romantik 
        ambiyansıyla KAHVE İÇELİM izmetinizde.
    </p>

    <button className='btn flex'>Haydi Başlayalım 
        <ArrowRightAltIcon className='icon'/></button>
   </div>

   <div className="popularPlaces">
    <div className="content">
        <h3>Popüler Kahvelerimiz</h3>
        <div className="images flex">
            {/* <img src='' alt=''></img> */}
            {/* <img src='' alt=''></img> */}
            {/* <img src='' alt=''></img> */}
            {/* <img src='' alt=''></img> */}

        </div>

    </div>
   </div>
   </div>
};

export default Home;
