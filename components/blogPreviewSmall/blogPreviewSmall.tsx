import React from 'react'
import styles from './blogPreviewSmall.module.scss'
import Image from 'next/image'

const BlogPreviewSmall = ({ blog }: any) => {
  return (
    <div className={styles['preview-small']}>
      <div className={styles['preview-small__image']}>
        <Image src={blog.imageUrl} alt="" fill/>
      </div>
      <div className={styles['preview-small__content']}>
        <p className={styles['preview-small__content-date']}>{blog.creationDate}</p>
        <h4 className={styles['preview-small__content-title']}>{blog.title}</h4>
        <p className={styles['preview-small__content-description']}>{blog.description}</p>
      </div>
    </div>
  )
}

export default BlogPreviewSmall