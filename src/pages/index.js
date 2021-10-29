import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// Define React Compenent
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby tutorial.</p>
        <StaticImage
          alt="FSU Logo"
          src="../images/FSU.png"
        />
      </Layout>
  )
}

// Export component
export default IndexPage