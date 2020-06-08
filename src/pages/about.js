import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = ()=>{
    return(
        <Layout>
        <Head title="About"/>
            <h1>About Azeez Olasoji</h1>
            <h2>Got my MSc degree, on the path of self discovery</h2>
            <Link to="/contact"> want to work with me? reach out</Link>
        </Layout>
    )
}

export default AboutPage