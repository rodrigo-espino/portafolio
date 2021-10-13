import Layout from "../components/Layout";
import { skills, experiences, projects, certific } from "../profile";

import Link from 'next/link'
const NotFound =() => {
    return(
        <Layout>
        <div className="not-found">
            
            <h1>Ooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
        </Layout>
    )
}

export default NotFound;