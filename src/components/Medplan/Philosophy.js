import React from 'react';
import phil1 from "../../Assets/home1.png";
import phil2 from "../../Assets/plan.png";
import phil3 from "../../Assets/octavia.png";
import phil4 from "../../Assets/np.png";
import phil5 from "../../Assets/tellaPharm.png";
import "./style.css";


const Philosophy = () => {

    return(
        <div>
            <div className='socrates'>MedPlan philosophy</div>
         <div className='plato'>
            <img src={phil1} alt='phil1' />
         </div>
        <h1 className='dedicate'>At MedPlan, we are dedicated to improving healthcare delivery for both
            <br/>individuals and healthcare providers. We believe that by leveraging the
             <br/> power of technology, we can help healthcare providers deliver better care 
             <br/>  and improve patient outcomes. Our innovative and user-friendly  
             <br/>  technologies are designed to streamline health workflows, reduce
             <br/> administrative burden and enhance communication between health care
             <br/>  providers and their patients.
             
             
        
             <br/>  <br/>We offer a wide range of digital health solutions that are tailored to meet the  
             <br/> unique needs of health care providers. In addition, our solutions are designed             
            <br/>  to help individuals take control of their health by providing them with the                                           
            <br/>  tools and information they need to manage their wellbeing in a convenient                                  
            <br/>  and efficient way.
</h1>

           {/* <div style={{backgroundColor: '#333', padding: '50px', border:0 }} */}

           <div className='founder-div'>
            <p className='founder-text'>
                With our digitalHealth solutions, we 
                are commited to transforming the way
                healthcare is delivered <br></br>and experienced
                by both individuals and healthcare
                providers

            </p>
            <br></br>
            <p className='founder-name'>Dr. Lisa Mote (Bpharm, pharmD, MPSN)</p>
            <br></br>
            <p className='founder'>Founder MedPlan Solutions</p>
           </div>

               <p style={{fontSize: '22px', color: 'black', fontWeight:'bold', position: 'relative', left: '90px', bottom: '84px' }}>Our Solutions</p>

        <div className='notime'>

           <div className='stubborn'>
            
           <img src={phil2} alt='phil2' width={'100px'} height={'93px'}/>
           <img src={phil4} alt='phil4' width={'133px'}  height={'110px'} /> 
           <img src={phil5} alt='phil5' width={'127px'} height={'88px'} /> 
           <img src={phil3} alt='phil3' width={'127px'} height={'88px'}  /> 

           </div>
         <div className='coin'>
            <div className='first-part'>
            {/* <img src={phil2} alt='phil2' width={'60px'} /> */}
            
            <div className='Empowering'>
            <h3 className='plantext'>MedPlan app</h3> 
            <p className='chronic'>
                Empowering Chronic Diseases <br/>
                Patients with tools and <br/>
                resources to help them better  <br/>
                manage their health
                </p>
                <br/>

            <a href='#' className='more'>Learn More  </a>

            </div>
            </div>
            







            
            <div className='first-part'>
            {/* <img src={phil4} alt='phil4' width={'60px'}   />  */}
            <div className='Empowering'>
            <h3 className='naija-pharms'>NaijaPharms</h3> 
            <p className='chronic'>
                A platform for Nigerian <br/>
                Pharmacist to connect, learn, <br/>
                with th latest developments in <br/>
                the Nigerian Pharma space.
            </p>
            <br/>
            
            <a href='#' className='more'> Learn More  </a>

           </div>
           </div>



            
            <div className='first-part'>
            {/* <img src={phil5} alt='phil5' width={'60px'}  />  */}
            <div className='Empowering'>
            <h3 className='tellapharm'>TellaPharm</h3> 
            <p className='chronic' fontWeight={'lighter'} fontSize={'30px'} >
                Connecting patients with their 
                Pharmacist for Personalized 
                care anytime, anywhere.
            </p>
            <br/>
            
            <a href='#' className='more'> 
            <br/> Learn More  </a>

            </div>
           </div>



            
            <div className='first-part'>
            {/* <img src={phil3} alt='phil3' width={'60px'} />  */}
            <div className='Empowering'>
            <h3 className='Octavia'>Octavia</h3> 
            <p className='chronic'>
                Digitizing hospital operations <br/>
                for seamless efficiency. <br/>
                Stramlining processes <br/>
                enhancing patients care, and <br/> 
                optimizing healthcare <br/>
                management.
            </p>
            
            <a href='#' className='more'>Learn More  </a>
            </div>
            </div>

        </div>
        
            
        </div>   




            
            
            

            

            

          
         

       

        </div>
    );

};


export default Philosophy