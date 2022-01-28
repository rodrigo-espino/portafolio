import Layout from "../../components/Layout";
import { skills, experiences, projects, certific } from "../../profile-EN";
import Link from "next/link";
import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from "emailjs-com"

const Index = () => (
  <Layout>
    {/**Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-4">
              <img src="imagen.png" alt="" className="img-fluid"></img>
            </div>
            <div className="col-md-8">
              <h1>Rodrigo Santacruz Espino</h1>
              <h4>Software Developer</h4>
              <br></br>
              <p>
                I am a software developer focused in creating desktop applications (Windows, MacOs and Linux), mobile applications
                (Android and iOS) and applications web as back-end developer. I consider myself a self-taught person who is able to learn anything about the subject.
                <br></br>
                <br></br>
                Currently, I am studying for becoming a software engineer at Universidad Politécnica de Durango. In the future I hope 
                to specialize in Artificial Inteligence.
              </p>
              <a className="btn btn-outline-primary" href="./download/Resume_Santacruz_Espino.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/**Second Header */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(
                ({ title, description, from, to, web }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>
                      {description}
                      <br></br>{" "}
                      <Link href={web} >
                        <a class="btn btn-primary btn-sm" target="_blank">Web Site</a>
                      </Link>
                      
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/**Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12" id="Portafolio">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ name, description, image, github }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                 <div className="overflow">
                 <img src={image} className="card-img-top"></img>
                 </div>

                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link href={github} >
                        <a class="btn btn-primary btn-sm" target="_blank">Repository</a>
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-8">
        <div className="card bg-light">
        <div className="card bg-light">
        </div>
        </div>
    </div>

    {/*Certificados */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Certificates</h1>
            </div>
            {certific.map(({ name, description, image, documento }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                <div className="overflow">
                 <img src={image} className="card-img-top"></img>
                 </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a className="btn btn-primary btn-sm" href={documento}>
                Download
              </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
<br></br>
    

  </Layout>
);

export default Index;
