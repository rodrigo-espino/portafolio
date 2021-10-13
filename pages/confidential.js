import Layout from "../components/Layout";
import { skills, experiences, projects, certific } from "../profile";
import Link from "next/link";

const Confidential = () => (

  <Layout>

      <div className="confidential">
      <h1>Lo sentimos</h1>
      <br></br>
      <h4>Parece que el proyecto no esta disponible</h4>
      <p>Este proyecto no esta disponible para el público en general por motivos de confidencialidad</p>
      <br></br>
      <a href="javascript:window.close();">Volver al portafolio</a>
      </div>
  </Layout>
  );

  export default Confidential;