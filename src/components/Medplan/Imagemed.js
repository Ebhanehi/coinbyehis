import React, {useState, useEffect } from 'react';
import image1 from "../../Assets/hHeader.png";
import image2 from "../../Assets/hHeader2.png";
import image3 from "../../Assets/hHeader3.png";
import "./style.css";



const Imagemed = () => {
    const images = [image1, image2, image3];
    // const titles = ['a', 'b', 'c'];
    // const images =[
    //     {src: require ("../../Assets/hHeader.png").default, caption: "MEDPLAN Solutions", writeup:'Improving Healthcare In Africa ' },
    //     {src: require ("../../Assets/hHeader2.png").default, caption: "MEDPLAN Solutions", writeup:'Improving Materisl In Africa ' },
    //     {src: require ("../../Assets/hHeader3.png").default, caption: "MEDPLAN Solutions", writeup:'Improving lifestyle In Africa ' },
    // ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) %images.length)
        }, 5000);

        return() => clearInterval(Interval);
    }, [currentIndex, images.length]);

    // const currentImage = image];



//     return(
//         <div style={{position: 'relative', textAlign: 'center', width: '25%', margin: 'auto'}}>
//             <img src={currentIndex.src} alt={`Image ${currentIndex + 1}`} style={{width:'95rem', height:'60rem'}}/>
//             <div style={{ position: 'absolute', top: '50%', left: '50%',transform: 'translate(-50%, -50%)', color: 'black', fontSize: '20px'}}>
//                  <p>{currentImage.writeup}</p>
//         </div>
//         <p style={{position: 'absolute', bottom: '10px', left: '10px', color: 'black'}}>{currentImage.caption}</p>
//        </div> 
//     );
// };
    return(
        <div className='Time-med'>
            <img  className= "img-time"src={images[currentIndex]} alt={`image ${currentIndex + 1}`} />
            

                <div className='back-img'>
                    {/* <img style={{width:"400px"}} className='back-img' src = {image1} alt='image1' /> */}
                    <img src={image1} alt="image1" width="565px"  height="300px"/>
                </div>

                {/* <h2> MEDPLAN Solutions <br/>Improving Healthcare In Africa <br/> using Digital Health Solutions. {currentIndex + 1}</h2> */}
                {/* <h2>{titles[currentIndex]}</h2> */}
{/* <div> <span style={{color: 'white', fontWeight: 'bold', fontSize: '30px'}}>MEDPLAN SOLUTIONS </span> <div style={{color:"white", fontSize: '25px'}}>Improving Healthcare In  <span style={{color:'lightblue', fontSize: '25px'}}>Africa</span><br/>Using <span style={{color: 'lightblue' , fontSize: '25px'}}>Digital Health</span> Solutions</div> </div>  */}
<div className='Time-caption'>
                {
                    currentIndex === 0 ? <div> <span style={{color: 'white', fontWeight: 'bold', fontSize: '30px'}}>MEDPLAN SOLUTIONS </span> <div style={{color:"white", fontSize: '25px'}}>Improving Healthcare In  <span style={{color:'lightblue', fontSize: '25px'}}>Africa</span><br/>Using <span style={{color: 'lightblue' , fontSize: '25px'}}>Digital Health</span> Solutions.</div> </div>
                     : currentIndex === 1 ? <div> <span style={{color: 'white',  fontSize: '25px'}}>From </span> <span style={{color:'lightblue', fontSize: '25px'}}>Telemedicine</span> <span style={{color:'white', fontSize: '25px'}}>to</span> <div style={{color:"lightblue", fontSize: '25px'}}>Personalized Care  <span style={{color:'white', fontSize: '25px'}}>Apps,</span><br/><span style={{color: 'white' , fontSize: '25px'}}>Explore the Ways of our Solutions <br/> are Revolutionizing Healthcare <br/> in Africa</span></div> </div> 
                     : <div> <span style={{color: 'white', fontSize: '25px'}}>Delivering  </span> <span style={{color:"lightblue", fontSize: '25px'}}>Patient Centered</span> <div style={{color:'lightblue', fontSize: '25px'}}>Care<span style={{color: 'white' , fontSize: '25px'}}>at Pivotal moments in their <br/></span> <span style={{color: 'white', fontSize: '25px'}}>treatment journey </span></div> </div>
                }
            </div>
            
        </div>
    );
};

export default Imagemed