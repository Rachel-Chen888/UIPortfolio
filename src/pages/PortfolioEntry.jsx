import '../App.css'
import Container from 'react-bootstrap/Container'; 
import CustomNavbar from '../components/CustomNavbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RachelPic from '../assets/entry/RachelPic.png'
import pokemon from '../assets/entry/pokemon.jpg'
import pokecard from '../assets/entry/pokecard.jpg'
import dentist from '../assets/entry/dentist.jpg'
import cat from '../assets/entry/cat.jpg'
import logo from '../assets/entry/logo.png'
import Carousel from 'react-bootstrap/Carousel';
import deploy from '../assets/entry/deploy.jpg'
import dev from '../assets/entry/dev.jpg'
import research from '../assets/entry/research.jpg'
import testing from '../assets/entry/testing.jpg'
import typography from '../assets/entry/typography.jpg'
import wireframe from '../assets/entry/wireframe.jpg' 
import colours from '../assets/entry/colours.jpg'
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer'
import salon from '../assets/salon/HairHavenLogo.png'
import gamecover from '../assets/game/gameCover.png'


function PortfolioEntry() {
  
  return (
    <>
      <CustomNavbar />


      <main className="mainContent">

        <section id="about">

          <h1 className="portfolioTitle">Hi I'm <span className="Rachel">Rachel Luo</span></h1>
          
          <div className="d-flex align-items-center gap-5">
            <img
              src={RachelPic}  
              width="600"
              height="400"
              className="d-inline-block align-top"
              alt="Rachel Luo Headshot" 
            />
          
            <div className="aboutText"> 
              <p>I am a third year <span className="highlight"> computer science</span> student at UOttawa with experience in <span className="highlight">data engineering </span> at the Department of National Defence. I am currently learning <span className="highlight">UI/UX Design</span> and applying it to various projects shown below.</p> 
              
              <h3>Skills</h3>
              <span>Languages: Java, Python, JavaScript, HTML/CSS</span>
              
              <span>Frameworks: React</span>
              <span>Tools: Git, Fabric, Figma, Power BI</span> 
              <br/>  
              <h3>Interests</h3>
              <p>I love designing websites and creating engaging user experiences.</p>
            </div>  
          
          </div>
        
        </section>


        <section id="workflow">
          
          <h1 className="workflowTitle">Workflow</h1>
          
          <p>I am currently taking a UI/UX course to improve my design skills. As for now, I have adopted my workflow through the various articles I have read.</p>
          <p>
            Useful Resources: 
            <a
                href="https://www.nngroup.com/articles/principles-visual-design/"
                className="workflowLink" 
            >
                Principles of Visual Design by NN/G
            </a>
          </p> 
          
          <Carousel className="workflowCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={research}
                alt="Workflow 1: Research and get inspiration"
              />
              <Carousel.Caption>
                <h3>1. Research</h3>
                <p>Look at various sources and research context to get inspiration for my own project</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={wireframe}
                alt="Workflow 2: Create a wireframe to get the foundation and strcuture of the project"
              />
              <Carousel.Caption>
                <h3>2. Wireframing</h3>
                <p>Create a wireframe to get the foundation and structure of the project</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={colours}
                alt="Workflow 3: Select the correct colour palette to create the right mood and vibe for the project"
              />
              <Carousel.Caption>
                <h3>3. Colour Selection</h3>
                <p>Select the correct colour palette to create the right mood and vibe for the project</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={typography}
                alt="Workflow 4: Select fonts that fit the project and are easy to read"
              />
              <Carousel.Caption>
                <h3>4. Typography</h3>
                <p>Select fonts that fit the project and are easy to read</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={dev}
                alt="Workflow 5: Use React, bootstrap, HTML/CSS, and JavaScript to build the project and make it interactive"
              />
              <Carousel.Caption>
                <h3>5. Development</h3>
                <p>Use React, bootstrap, HTML/CSS, and JavaScript to build the project and make it interactive</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={testing}
                alt="Workflow 6: Test the project and make it accessible to all users"
              />
              <Carousel.Caption>
                <h3>6. Testing</h3>
                <p>Test the project, fix any issues, and incorporate accessibility features</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={deploy}
                alt="Workflow 7: Deploy the project and share it with the world"
              />
              <Carousel.Caption>
                <h3>7. Deployment</h3>
                <p>Deploy the project and share it with the world</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

        </section>


        <section id="projects">
        
          <h1 className="workflowTitle">Projects</h1>  

          <div className="projectsContainer">
            
            <ProjectCard
              image={salon}
              title="Service Site"
              description="A service site for a hair salon built using React and Bootstrap."
              // link={"/comingsoon.html"}
              link="/salon" // react router service site 
            />

            <ProjectCard
              image={gamecover}
              title="Memory Game"
              description="Navigate the Galaxy site built using React and Bootstrap."
              link="https://navigatethegalaxy.netlify.app/"
            />

            <ProjectCard
              image={pokemon}
              title="E-Commerce Site"
              description="An e-commerce platform that sells pokemon figures built using React and Bootstrap."
              link="/coming-soon"
            />

            <ProjectCard
              image={pokecard}
              title="Analytics Site"
              description="An analytics dashboard for Pokemon transactions using React and Bootstrap."
              link="/coming-soon"
            />
    
          </div>
 
        </section>
        
      
        <section id="contact-service" className="footer">
          <Footer/>
        </section>
        
       </main>
    </>
  )
}

export default PortfolioEntry; 