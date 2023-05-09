import React from 'react'
import styles from './blogPreviewSmall.module.scss'

const BlogPreviewSmall = ({ blog }: any) => {
  return (
    <div className={styles['preview-small']}>
      <img className={styles['preview-small__image']} src={blog.imageUrl} alt=""/>
      <div>
        <p>{blog.title}</p>
        <h4></h4>
        <p></p>
      </div>
    </div>
  )
}

export default BlogPreviewSmall