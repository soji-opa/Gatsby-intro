import React from 'react';
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage =()=>{
    return(
        <Layout>
        <Head title="Contact"/>
            <h1>Contact me</h1>
            <p>Please drop me a message
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">@King_Soji</a>
            </p>
        </Layout>
    )
}

export default ContactPage