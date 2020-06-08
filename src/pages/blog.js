import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

 const BlogPage = () =>{

    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (
        sort:{
          fields:publishedDate,
          order:DESC
        }
      ){
        edges{
          node{
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY"
            )
          }
        }
      }
    }
    `)
   
    return (
        <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index)=>{
            return(
                <li key={index} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                <h1>Title: {edge.node.title}</h1>
                <p>Date: {edge.node.publishedDate}</p>
                   
                </Link>
                    
                </li>
            )
        })}</ol>
        </Layout>
    )
}
export default BlogPage

// <span><strong>Word-count: </strong>{edge.node.wordCount.words}</span>