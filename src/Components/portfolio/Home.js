import rayicon from './assets/rayicon.jpg'
import image1 from './assets/image1.png'
import github from './assets/github.png'
import web from './assets/web.png'
import linkedin from './assets/linkedin.png'
import yarnix from './assets/yarnix.jpg'
import movieplace from './assets/movieplace.jpg'
import './port.css'
import { Link } from 'react-router-dom'
import login from './assets/login.jpg'
import productlisting from './assets/productlisting.jpg'
import meter from './assets/meter.jpg'

function Home() {
    // const [layer, setLayer] = useState([])

    // useEffect(() => {
    //     axios.get('/datalayer.json')
    //     .then((res) => setLayer(res.data)) 
    //     .catch((err) => console.log(err))
    // },[])

  return (
    <div className='main-container'>
        <div className='top-navigation'>
            <div className='ray'>Rayicon</div>
            <div className='top-links'>
                <Link to='/'><h3 style={{color:'blue'}}>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
        </div>

        <div className='name-image'>
            <div className='writeup'>
                <h2>Hey, I am Raymond <br/><span>Full-Stack (MERN) Developer</span></h2>
                <p>I am a fullstack developer and i will help you build beautiful applications</p>
            <div className='buttons'>
                <Link to='/contact'><button className='getintouch'>Get in touch</button></Link>
                <Link to='/projects'><button className='browseproject'>Browse projects</button></Link>
            </div>
            </div>
            <div>
                <img src={rayicon} alt='ray' className='rayicon'/>
            </div> 
        </div>

        <div className='projects-corner'>
            <h2 id='x2'>Projects</h2>
            <div className='projectDisplays'>
                <div className='cam'>
                   <div className='dox'>
                    <img src={image1} alt='' style={{width:'550px', height:'300px', margin:'10px'}} />
                    <h3 style={{fontWeight:'700'}}>Nedifoods E-commerce App</h3>
                    <h4 style={{width:'550px', lineHeight:'1.6'}}>NediFoods is a full-stack e-commerce web app for browsing, adding to cart, and securely purchasing food products online.
                    It features user authentication, cart management, Stripe checkout, and admin product controls.
                    Built with React, using useContext for state management and react-router-dom for navigation.
                    Backend powered by Express, MongoDB, JWT Auth, and API calls.</h4> 
                    <div className='cani'>
                        <Link to='https://github.com/RayIwobi/Ecom-backend'><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link to='https://nedifoods.co.uk'><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div>
               <div className='dox'>
                    <img src={yarnix} alt='' style={{width:'650px', height:'300px', margin:'10px'}} />
                    <h3 style={{fontWeight:'700'}}>Yarnix social media App</h3>
                    <h4 style={{width:'650px', lineHeight:'1.6'}}>Yarnix is a full-stack social media platform where users can post, comment, like, and manage profiles—similar to Facebook.
                        It supports user auth, real-time updates, and secure content interactions.
                        Frontend built with React, using Axios, useContext, react-router-dom, and Vanilla CSS.
                        Backend includes Node.js, Express, MongoDB, JWT Auth, and Cloudinary for image uploads.</h4><br/>
                    <div className='cani'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div> 
                </div>

                <div className='cam'>
                   <div className='dox'>
                    <img src={movieplace} alt='' style={{width:'550px', height:'300px', margin:'10px'}} />
                    <h3 style={{fontWeight:'700'}}>Movieplace API App</h3>
                    <h4 style={{width:'550px', lineHeight:'1.6'}}>Movie API App is a React-based app that lets users search for movies and view detailed info fetched from the OMDb API.
                        It features a responsive UI with movie search, result listings, and individual movie detail pages.
                        Built with React, using react-router-dom for routing and vanilla CSS for styling.
                        Fetches movie data in real time from the OMDb API at omdbapi.com.</h4> 
                    <div className='cani'>
                        <Link to='https://github.com/RayIwobi/MovieApp'><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link to='https://movieapp-y4hw.onrender.com'><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live webapp</Link>
                    </div>
                </div>
                <div className='dox'>
                    <img src={productlisting} alt='' style={{width:'650px', height:'300px', margin:'10px'}} />
                    <h3 style={{fontWeight:'700'}}>Product listing API App</h3>
                    <h4 style={{width:'650px', lineHeight:'1.6'}}>Product Listing API App is a frontend app that fetches and displays products from the Fake Store API, simulating a basic shopping experience.
                    Users can browse products, view detailed info, and add items to a cart.
                    Built with React, using Redux Toolkit for state management and react-router-dom for navigation.
                    Styled with vanilla CSS and powered by data from the external Fake Store API.</h4><br/>
                    <div className='cani'>
                        <Link to='https://github.com/RayIwobi/product-listing'><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link to='https://productlisting.valorprojects.com.ng/'><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div> 
                </div>

                <div className='cam'>
               <div className='dox'>
                    <img src={login} alt='' style={{width:'550px', height:'300px', margin:'10px'}} />
                    <h3 style={{fontWeight:'700'}}>Map Pinning App</h3>
                    <h4 style={{width:'550px', lineHeight:'1.6'}}>Map Pinning App lets users drop pins on a map, add reviews to favorite locations, and save them to a database.
                    It includes user authentication and supports viewing, adding, and deleting location pins.
                    Built with React, Leaflet API, react-router-dom, and styled with vanilla CSS.
                    Backend uses Node.js, Express, MongoDB, JWT, and bcrypt for secure auth and data storage.</h4> <br/>
                    <div className='cani'>
                        <Link><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div>
                <div className='dox'>
                    <img src={meter} alt='' style={{width:'650px', height:'300px', margin:'10px'}} />
                    <h3 style={{fontWeight:'700'}}>Metering Website (Development ongoing)</h3>
                    <h4 style={{width:'650px', lineHeight:'1.6'}}>Metering and Instrumentation Website showcases products, services, and technical information related to industrial metering and control systems.
                        It includes product listings, contact forms, and company information for client engagement.
                        Built with React, using react-router-dom for navigation and CSS for responsive design.
                        Dynamic content and user interactions are handled via Axios, with possible backend support for form submissions. The platform is built using the MERN stack technology.
                        </h4><br/>
                    <div className='cani'>
                        <Link to='https://github.com/RayIwobi/product-listing'><img src={github} alt='' style={{width:'20px', height:'20px'}} />Github</Link>
                        <Link to='https://productlisting.valorprojects.com.ng/'><img src={web} alt='' style={{width:'20px', height:'20px'}} />Live website</Link>
                    </div>
                </div> 

                </div>
            </div>
        </div>

        {/* ---------My experience section -----------*/}
        



        <div className='stack-container'>
            <p>My Stack</p>
        <div className='the-design'>
            <div className='yellow-circle'></div>
            <div className='yellow-square'></div>
            <div className='writeupblock'>
                <div className='mystack'>
                    <p>Web Design</p>
                    <ul>
                        <li>Responsive Design</li>
                        <li>Wireframing</li>
                        <li>UserResearch</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
                <div className='mystack'>
                    <p>Frontend</p>
                    <ul>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>Redux toolkit</li>
                        <li>HTML5</li>
                        <li>Vanilla CSS / Tailwind</li>
                        <li>Materia ui design</li>
                    </ul>
                </div>
                <div className='mystack'>
                    <p>Backend</p>
                    <ul>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Render</li>
                        <li>Vercel</li>
                    </ul>
                </div>
                <div className='mystack'>
                    <p>Soft Skils</p>
                    <ul>
                        <li>Effective communication</li>
                        <li>Collaboration</li>
                        <li>Committment</li>
                        <li>Leadership</li>
                        <li>Quick learner</li>
                        <li>Creative</li>
                    </ul>
                </div>
        </div>
        </div>
        </div>

        <div className='mystory'>
            <h2>My Story</h2>
            <div>
                Hi, I’m a passionate Full-Stack Developer with 4 years of 
                experience crafting dynamic, user-focused applications using the 
                React ecosystem and beyond. With a background in Computer Science, 
                I’ve built a strong foundation in both front-end and back-end 
                development, allowing me to create complete, scalable, and intuitive 
                digital experiences.<br/><br/>

                I specialize in JavaScript technologies like React, Node.js, and 
                MongoDB, but I also have hands-on experience with Python, PostgreSQL, 
                and MySQL. From responsive layouts with HTML/CSS to efficient APIs and 
                data models, I enjoy bringing ideas to life across the full stack. I 
                have a deep appreciation for beautiful design and functional user 
                experiences—whether it's a sleek e-commerce interface or a robust 
                dashboard...<Link to='/about' id='more'>more</Link>
            </div>
        </div>

        <div className='baselink-container'>
            <div className='top-links'>
                <Link to='/'><h3 style={{color:'blue'}}>Home</h3></Link>
                <Link to='/experience'><h3>Experience</h3></Link>
                <Link to='/projects'><h3>Projects</h3></Link>
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

export default Home
