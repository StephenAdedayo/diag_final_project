import React from 'react'
import SingleBlogBanner from '../components/SingleBlogBanner'
import BlogDetails from '../components/BlogDetails'
import LatestBlog from '../components/LatestBlog'

const SingleBlog = () => {

  return (
    <>
      <SingleBlogBanner />
      <BlogDetails />
      <LatestBlog />
    </>
  )
}

export default SingleBlog
