import React from 'react'

import {graphql} from 'gatsby'

import Layout from '../components/layout'


export const query = graphql`
query (
    $slug:String!
  ){
    markdownRemark(
      fields:{
        slug:{
          eq:$slug
        }
      }
    ){
      frontmatter{
        title
        date
      }
      html
      timeToRead
      wordCount{
        words
      }
    }
  }
`
const Blog = (props)=>{
    return(
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p><strong>Date: </strong> {props.data.markdownRemark.frontmatter.date}</p>
            <p><strong>Count: </strong><span>{props.data.markdownRemark.wordCount.words}</span></p>
            <p><strong>Time to Read: </strong><span>{props.data.markdownRemark.timeToRead}s</span></p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog;