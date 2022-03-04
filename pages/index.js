import Layout from "../components/Layout";
import { skills, experiences, projects, certific } from "../profile";
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
              <img src="imagen.png" alt="Rodrigo Santacruz Espin" className="img-fluid rounded float-start"></img>
            </div>
            <div className="col-md-8">
              <h1>Rodrigo Santacruz Espino</h1>
              <h4>Desarrollador de Software</h4>
              <br></br>
              <p>
                Soy un desarrollador de software enfocado en la elaboración de aplicaciones de escritorio para diferentes sistemas operativos, aplicaciones web
                como back-end, asi como desarrollo en web3. <br></br>
                <br></br>
                Actualmente soy estudiante de la carrera de ingenieria  en software en la Universidad  Politécnica de  Durango. 
                Me considero una persona autodidacta capaz de aprender cualquier cosa relacionado al tema de programación.
              </p>
              <a className="btn btn-outline-primary" target="_blank" href="./download/Resume_Santacruz_Espino.pdf">
                Descargar CV
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
            <h1>Habilidades</h1>
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
            <h1>Experiencia</h1>
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
                        <a className="btn btn-primary btn-sm" target="_blank">Página web</a>
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
            <div className="col-md-12">
              <h1 className="text-center text-light" >Portafolio</h1>
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
                        <a className="btn btn-primary btn-sm" target="_blank">Repositorio</a>
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <br></br>
    

    {/*Certificados */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Cretificados</h1>
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
                Descargar
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
