import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = ()=>{
    return(
        <Layout>
        <Head title="About"/>
            <h1>About Kingsley Oladipupo Akpeji</h1>
            <h2>Obtained My B.Eng at UI & Post grad. degree at UCT</h2>
            <Link to="/contact"> want to work with me? reach out</Link>
        </Layout>
    )
}

export default AboutPage