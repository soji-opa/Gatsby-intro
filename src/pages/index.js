import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = ()=>{
  return(
    <Layout>
        <Head  title="Home"/>
        <h1>Hello</h1>
        <h2>I am Kingsley O. Akpeji, Lecturer & Researcher at UCT!!!</h2>
        <p>Need More Info? <Link to ="/contact"> contact me</Link></p> 
      </Layout>
  )
}

export default IndexPage
