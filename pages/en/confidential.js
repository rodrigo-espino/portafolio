import Layout from "../../components/Layout";
import { skills, experiences, projects, certific } from "../../profile";
import Link from "next/link";

const Confidential = () => (

  <Layout>

      <div className="confidential">
      <h1>Sorry</h1>
      <br></br>
      <h4>it seems that this project is not available</h4>
      <p>This project is not available to the general public for confidentiality reasons </p>
      <br></br>
      <a href="javascript:window.close();">Back to Portfolio</a>
      </div>
  </Layout>
  );

  export default Confidential;