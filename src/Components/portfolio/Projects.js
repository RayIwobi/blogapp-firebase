import image1 from './assets/image1.png'
import github from './assets/github.png'
import web from './assets/web.png'
import linkedin from './assets/linkedin.png'
import yarnix from './assets/yarnix.jpg'
import movieplace from './assets/movieplace.jpg'
import './port.css'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='main-container'>
        <div className='top-navigation'>
            <div className='ray'>Rayicon</div>
            <div className='top-links'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3 style={{color:'blue'}}>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
        </div>

        <div className='projecttitle'>
            <h3>Some of my Projects</h3>
        </div>
            <div className='project-text'>
                <div className='project-line'></div>
                <p>Here’s a collection of some of my favorite projects that highlight my skills in full-stack development, UI/UX design, and problem-solving. Each project was an opportunity to explore new technologies, overcome unique challenges, and deliver meaningful digital experiences.

                    From dynamic web applications to responsive user interfaces and robust backend systems, these projects reflect my passion for clean code, performance, and user-first design. Dive in and see what I’ve been building!</p>
            </div>
        

        <div className='projects-corner'>
            <div className='projectDisplays'>
                <div className='cam'>
                   <div className='dox'>
                    <img src={image1} alt='' style={{width:'550px', height:'300px', margin:'10px'}} />
                    <h3>Nedifoods E-commerce App</h3>
                    <h4>Nedifoods is a full-featured e-commerce web application built 
                        for a food business based in the UK. The platform allows users 
                        to seamlessly browse products, add items to their cart, and complete 
                        secure payments via Stripe Checkout.</h4> 
                    <div className='cani'>
                        <Link to='https://github.com/RayIwobi/Ecom-backend'><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link to='https://nedifoods.co.uk'><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div>
               <div className='dox'>
                    <img src={yarnix} alt='' style={{width:'650px', height:'300px', margin:'10px'}} />
                    <h3>Yarnix social media App</h3>
                    <h4>ecommerce app contains all ecommerce functionalities. 
                    project is live. was built with ....</h4> 
                    <div className='cani'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div> 
                </div>

                <div className='cam'>
                   <div className='dox'>
                    <img src={movieplace} alt='' style={{width:'550px', height:'300px', margin:'10px'}} />
                    <h3>Movieplace API App</h3>
                    <h4>ecommerce app contains all ecommerce functionalities. 
                    project is live. was built with ....</h4> 
                    <div className='cani'>
                        <Link to='https://github.com/RayIwobi/MovieApp'><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link to='https://movieapp-y4hw.onrender.com'><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live webapp</Link>
                    </div>
                </div>
               <div className='dox'>
                    <img src={image1} alt='' style={{width:'650px', height:'300px', margin:'10px'}} />
                    <h3>MoviePlace </h3>
                    <h4>ecommerce app contains all ecommerce functionalities. 
                    project is live. was built with ....</h4> 
                    <div className='cani'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div> 
                </div>

                <div className='cam'>
                   <div className='dox'>
                    <img src={movieplace} alt='' style={{width:'550px', height:'300px', margin:'10px'}} />
                    <h3>Movieplace API App</h3>
                    <h4>ecommerce app contains all ecommerce functionalities. 
                    project is live. was built with ....</h4> 
                    <div className='cani'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div>
               <div className='dox'>
                    <img src={image1} alt='' style={{width:'650px', height:'300px', margin:'10px'}} />
                    <h3>E-commerce App</h3>
                    <h4>ecommerce app contains all ecommerce functionalities. 
                    project is live. was built with ....</h4> 
                    <div className='cani'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div> 
                </div>


            </div>
        </div>

        <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3  style={{color:'blue'}}>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
            <div className='baseicone'>
                <Link to='https://www.linkedin.com/in/raymond-iwobi-843785157/'>
                <img src={linkedin} alt='linkedin' /></Link>
                <Link to='https://github.com/RayIwobi'>
                <img src={github} alt='github'  /></Link>
            </div>
        </div>

        <div className='baseinfo'>
            <div>
                <h3>I look forward to working with you</h3>
            <div className='buttons'>
                <Link to='/contact'><button className='getintouch'>Get in touch</button></Link>
                <Link to='/projects'><button className='browseproject'>Browse projects</button></Link>
            </div>
            </div>
            <div className='footerinfo'>
                <h4>&copy; 2025 All Rights Reserved. Designed By Raymond Iwobi<br/>Built with React</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
