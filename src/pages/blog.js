import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyles from './blog.module.scss'

 const BlogPage = () =>{

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
              }
              timeToRead
              wordCount{
                words
              }
              fields{
                slug
              }
            }
          }
        }
      }
    `)
   
    return (
        <Layout>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, index)=>{
            return(
                <li key={index} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                <h1>Title: {edge.node.frontmatter.title}</h1>
                <p>Date: {edge.node.frontmatter.date}</p>
                    <span><strong>Word-count: </strong>{edge.node.wordCount.words}</span>
                </Link>
                    
                </li>
            )
        })}</ol>
        </Layout>
    )
}
export default BlogPage